import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import Hero from '../components/hero'
import Capabilities from '../components/capabilities'
import CaseStudies from '../components/case-studies'
import SEO from '../components/seo'

export const IndexTemplate = ({
  title,
  subtitle
}) => (
  <div>
    <SEO title={title} description={subtitle} />
    <Hero
      title={title}
      subtitle={subtitle}
      className={`bg-blue-dark`}
      textClass={`text-white`}
    />
    <Block className={'bg-white'} title={'Capabilities'}>
      <p className={'text-xl md:text-2xl mb-10'}>Agile Six helps government agencies and other clients create customized digital solutions to meet the needs of their users. No matter how much experience you have with digital development or where you are in the process, we can get you where you want to go.</p>
      <Capabilities featuredOnly={true} />
      <div class="text-center mt-10">
        <a href="/capabilities" className="block md:inline-block px-8 py-3 leading-none border text-white text-center bg-red hover:border-red hover:text-red hover:bg-white mt-4 md:mt-0">Learn about our capabilities</a>
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
  subtitle: PropTypes.string
}

const Index = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
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
        subtitle
        cta {
          cta_url
          cta_label
          cta_title
          cta_visible
          cta_description
        }
      }
    }
  }
`