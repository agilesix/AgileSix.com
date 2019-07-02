import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from "gatsby-image"

export const CaseStudyTemplate = ({
  title,
  body,
  background
}) => (
  <div>
    <div className={'mx-auto'}>
      <Img fluid={background.childImageSharp.fluid} />
    </div>
    <h1 className={'text-white text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
  </div>
)

CaseStudyTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const CaseStudy = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <CaseStudyTemplate
        title={frontmatter.title}
        body={html}
        background={frontmatter.background}
      />
    </Layout>
  )
}

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "casestudy" } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        shortdescription
        background {
          childImageSharp {
            fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`