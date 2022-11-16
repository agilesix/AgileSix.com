import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import Prose from '../components/prose'
import SEO from '../components/seo'
import Hero from '../components/hero'

export const SuccessTemplate = ({
  title,
  subtitle,
  hero,
  body
}) => (
  <div>
    <SEO title={title} description={subtitle} />
    <Hero
      title={title}
      subtitle={subtitle}
      hero={hero}
    />
    <Block className={'bg-grey-light'} title={null}>
      <Prose>
        <div dangerouslySetInnerHTML={{__html: body}}></div>
      </Prose>
    </Block>
  </div>
)

SuccessTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hero: PropTypes.object,
  body: PropTypes.string
}

const Success = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <SuccessTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        hero={frontmatter.hero.childImageSharp}
        body={html}
      />
    </Layout>
  )
}

Success.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Success

export const pageQuery = graphql`
  query SuccessTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "success" } }) {
      html
      frontmatter {
        title
        subtitle
        hero {
          childImageSharp {
            fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`