import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import Capabilities from '../components/capabilities'
import CaseStudies from '../components/case-studies'

export const IndexTemplate = ({
  title,
  body
}) => (
  <div>
    <div className={'bg-blue-dark px-6 py-10'}>
      <div className={'max-w-5xl mx-auto flex'}>
        <div className={'md:w-2/3'}>
          <h1 className={'text-white text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
          <div className={'text-white text-md md:text-xl'} dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
        <div className={'w-1/3'} style={{backgroundColor: 'red'}}>
        </div>
      </div>
    </div>
    <Block className={'bg-grey-light'} title={'Capabilities'}>
      <Capabilities />
    </Block>
    <Block className={'bg-white'} title={'Recent Work'}>
      <CaseStudies />
    </Block>
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