import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'

export const AboutTemplate = ({
  title,
  body,
  intro,
  purpose_title,
  purpose_body,
  history_title,
  history_body
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
    <Block className={'bg-white'} title={null}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: intro}}></div>
    </Block>
    <Block className={'bg-grey-light'} title={purpose_title}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: purpose_body}}></div>
    </Block>
    <Block className={'bg-white'} title={history_title}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: history_body}}></div>
    </Block>
  </div>
)

AboutTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  intro: PropTypes.string,
  purpose_title: PropTypes.string,
  purpose_body: PropTypes.string,
  history_title: PropTypes.string,
  history_body: PropTypes.string
}

const About = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <AboutTemplate
        title={frontmatter.title}
        body={html}
        intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.intro).toString()}
        purpose_title={frontmatter.purpose_title}
        purpose_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.purpose_body).toString()}
        history_title={frontmatter.history_title}
        history_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.history_body).toString()}
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
        intro
        purpose_title
        purpose_body
        history_title
        history_body
      }
    }
  }
`