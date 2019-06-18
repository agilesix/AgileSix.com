import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import TeamMembers from '../components/team-members'
import CaseStudies from '../components/case-studies'

export const TeamTemplate = ({
  title,
  body,
  team_intro,
  join_title,
  join_body
}) => (
  <div>
    <div className={'bg-grey-light px-6 py-10 md:py-20'}>
      <div className={'max-w-4xl mx-auto flex'}>
        <div className={'md:w-2/3'}>
          <h1 className={'text-blue-dark text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
          <div className={'text-blue-light text-xl md:text-2xl leading-tight'} dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
      </div>
    </div>
    <Block className={'bg-white'} title={'Meet the Team'}>
      <div className={'text-xl md:text-2xl mb-10'} dangerouslySetInnerHTML={{__html: team_intro}}></div>
      <TeamMembers />
    </Block>
    <Block className={'bg-grey-light'} title={join_title}>
      <div className={'text-xl md:text-2xl mb-10'} dangerouslySetInnerHTML={{__html: join_body}}></div>
    </Block>
  </div>
)

TeamTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  team_intro: PropTypes.string,
  join_title: PropTypes.string,
  join_body: PropTypes.string
}

const Team = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <TeamTemplate
        title={frontmatter.title}
        body={html}
        team_intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.team_intro).toString()}
        join_title={frontmatter.join_title}
        join_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.join_body).toString()}
      />
    </Layout>
  )
}

Team.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Team

export const pageQuery = graphql`
  query TeamTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "team" } }) {
      html
      frontmatter {
        title
        team_intro
        join_title
        join_body
      }
    }
  }
`