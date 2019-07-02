import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import Hero from '../components/hero'
import CTA from '../components/cta'
import SEO from "../components/seo"

export const AboutTemplate = ({
  title,
  subtitle,
  cta,
  intro,
  purpose_title,
  purpose_body,
  history_title,
  history_body
}) => (
  <div>
    <SEO title={title} description={subtitle} />
    <Hero
      title={title}
      subtitle={subtitle}
    />
    <Block className={'bg-white'} title={null}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: intro}}></div>
    </Block>
    <Block className={'bg-grey-light'} title={purpose_title}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: purpose_body}}></div>
    </Block>
    <Block className={'bg-white'} title={history_title}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: history_body}}></div>
    </Block>
    {
      cta && cta.cta_visible && (
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

AboutTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  intro: PropTypes.string,
  purpose_title: PropTypes.string,
  purpose_body: PropTypes.string,
  history_title: PropTypes.string,
  history_body: PropTypes.string,
  cta: PropTypes.object
}

const About = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.intro).toString()}
        purpose_title={frontmatter.purpose_title}
        purpose_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.purpose_body).toString()}
        history_title={frontmatter.history_title}
        history_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.history_body).toString()}
        cta={frontmatter.cta}
      />
    </Layout>
  )
}

About.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default About

export const pageQuery = graphql`
  query AboutTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about" } }) {
      html
      frontmatter {
        title
        subtitle
        intro
        purpose_title
        purpose_body
        history_title
        history_body
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