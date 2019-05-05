import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexTemplate = ({
  title,
  body
}) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{__html: body}}></div>
  </div>
)

IndexTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const Index = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexTemplate
        title={frontmatter.title}
        body={html}
      />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Index

export const pageQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`