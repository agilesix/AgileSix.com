import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const IndexTemplate = ({
  title,
  subtitle,
  body
}) => (
  <div>
    <div className={'hero'}>
      <div className={'wrapper'}>
        <div className={'hero-text'}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </div>
    <div className={'content'}>
      <div 
        className={'wrapper'}
        dangerouslySetInnerHTML={{__html: body}}
      />
    </div>
  </div>
)

IndexTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  body: PropTypes.string
}

const Index = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <IndexTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
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
        title,
        subtitle
      }
    }
  }
`