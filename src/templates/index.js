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
    <div className={'bg-blue-dark px-6 py-10 md:py-20'}>
      <div className={'max-w-4xl mx-auto flex'}>
        <div className={'md:w-2/3'}>
          <h1 className={'text-white text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
          <div className={'text-blue-light text-md text-3xl md:text-4xl leading-none'} dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
      </div>
    </div>
    <Block className={'bg-white'} title={'Capabilities'}>
      <p className={'text-xl md:text-2xl mb-10'}>Agile Six helps government agencies and other clients create customized digital solutions to meet the needs of their users. No matter how much experience you have with digital development or where you are in the process, we can get you where you want to go.</p>
      <Capabilities />
      <div class="text-center mt-10">
        <a href="/capabilities" className="block md:inline-block px-8 py-3 leading-none border text-white text-center bg-red hover:border-red hover:text-red hover:bg-white mt-4 md:mt-0">Learn More</a>
      </div>
    </Block>
    <Block className={'bg-grey-light'} title={'Recent Work'}>
      <CaseStudies />
      <div class="text-center mt-10">
        <a href="/work" className="block md:inline-block px-8 py-3 leading-none border text-white text-center bg-red hover:border-red hover:text-red hover:bg-white mt-4 md:mt-0">See all of our work</a>
      </div>
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