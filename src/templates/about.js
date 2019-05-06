import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const AboutTemplate = ({
  title,
  body
}) => (
  <div>
    <h1>{title}</h1>
    <div dangerouslySetInnerHTML={{__html: body}}></div>
  </div>
)

AboutTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const About = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <AboutTemplate
        title={frontmatter.title}
        body={html}
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
      }
    }
  }
`