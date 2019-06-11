import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const CapabilityTemplate = ({
  title,
  body
}) => (
  <div>
    <h1 className={'text-white text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
  </div>
)

CapabilityTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const Capability = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <CapabilityTemplate
        title={frontmatter.title}
        body={html}
      />
    </Layout>
  )
}

Capability.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Capability

export const pageQuery = graphql`
  query CapabilityTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "capability" } }) {
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