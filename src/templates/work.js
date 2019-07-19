import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CTA from '../components/cta'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Block from '../components/block'
import Prose from '../components/prose'
import CaseStudiesBlock from '../components/case-studies'

export const WorkTemplate = ({
  title,
  subtitle,
  cta,
  hero,
  casestudies,
  casestudiestitle,
  preview,
  intro
}) => (
  <div>
    {!preview && (
      <SEO title={title} description={subtitle}></SEO>
    )}
    <Hero
      title={title}
      subtitle={subtitle}
      hero={hero}
    />
    <Block className={'bg-grey-light'} title={casestudiestitle}>
      <Prose>
        <div className={'text-xl md:text-2xl mb-10'} dangerouslySetInnerHTML={{__html: intro}}></div>
      </Prose>
      {!preview && (
        <CaseStudiesBlock selectedCasestudies={casestudies} />
      )}
    </Block>
    {
      cta.cta_visible && (
        <CTA
          title={cta.cta_title}
          description={cta.cta_description}
          label={cta.cta_label}
          url={cta.cta_url}
        />
      )
    }
  </div>
)

WorkTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  intro: PropTypes.string,
  cta: PropTypes.object,
  casestudies: PropTypes.array,
  casestudiestitle: PropTypes.string
}

const Work = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WorkTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.intro).toString()}
        cta={frontmatter.cta}
        hero={frontmatter.hero.childImageSharp}
        casestudies={frontmatter.casestudies}
        casestudiestitle={frontmatter.casestudiestitle}
      />
    </Layout>
  )
}

Work.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Work

export const pageQuery = graphql`
  query WorkTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "work" } }) {
      html
      frontmatter {
        title
        subtitle
        intro
        casestudies
        casestudiestitle
        hero {
          childImageSharp {
            fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        cta {
          cta_url
          cta_label
          cta_title
          cta_visible
          cta_description
        }
      }
    }
  }
`