import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import TeamMembers from '../components/team-members'
import CaseStudies from '../components/case-studies'

export const TeamTemplate = ({
  title,
  body
}) => (
  <div>
    <div className={'bg-white px-6 py-10 md:py-20'}>
      <div className={'max-w-4xl mx-auto flex'}>
        <div className={'md:w-2/3'}>
          <h1 className={'text-blue-dark text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
          <div className={'text-blue-light text-xl md:text-2xl leading-tight'} dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
      </div>
    </div>
    <Block className={'bg-grey-light'} title={'Meet the Team'}>
      <p className={'text-xl md:text-2xl mb-4'}>At Agile Six, we work as a team. We trust and help each other. And we consciously pull talent from all sorts of different sectors because we want to learn from them — and because different perspectives on a project will make for a better end result.</p>
      <p className={'text-xl md:text-2xl mb-10'}>Staff hierarchy is overrated. Every one of usthose faces below, from our founders to our most recent hires, areis both a teachers and studentsand a students.</p>
      <TeamMembers />
    </Block>
    <Block className={'bg-white'} title={'Recent Work'}>
      <CaseStudies />
      <div class="text-center mt-10">
        <a href="#" className="block md:inline-block px-8 py-3 leading-none border text-white text-center bg-red hover:border-red hover:text-red hover:bg-white mt-4 md:mt-0">See all of our work</a>
      </div>
    </Block>
  </div>
)

TeamTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

const Team = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <TeamTemplate
        title={frontmatter.title}
        body={html}
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
      }
    }
  }
`