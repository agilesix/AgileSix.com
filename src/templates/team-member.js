import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const TeamMemberTemplate = ({
  title,
  body
}) => (
  <div>
    <h1 className={'text-white text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
  </div>
)

TeamMemberTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const TeamMember = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <TeamMemberTemplate
        title={frontmatter.title}
        body={html}
      />
    </Layout>
  )
}

TeamMember.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TeamMember

export const pageQuery = graphql`
  query TeamMemberTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "team-member" } }) {
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