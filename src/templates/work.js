import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const WorkTemplate = ({
  title,
  body,
  intro
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
  </div>
)

WorkTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  intro: PropTypes.string
}

const Work = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <WorkTemplate
        title={frontmatter.title}
        body={html}
        intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.intro).toString()}
      />
    </Layout>
  )
}

Work.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Work

export const pageQuery = graphql`
  query WorkTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "work" } }) {
      html
      frontmatter {
        title
        intro
      }
    }
  }
`