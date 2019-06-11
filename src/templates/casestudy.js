import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const CaseStudyTemplate = ({
  title,
  body
}) => (
  <div>
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
      }
    }
  }
`