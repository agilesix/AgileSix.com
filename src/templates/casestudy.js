import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import Break from '../components/break'
import Img from "gatsby-image"

export const CaseStudyTemplate = ({
  title,
  body,
  background,
  subtitle
}) => (
  <div>
    <Block 
      className={'bg-white'}
    >
      <div className={'pb-10'}>
        <h1 className={'text-blue-dark text-4xl md:text-5xl leading-none font-bold mb-1'}>{title}</h1>
        <div className={'text-blue-light text-xl md:text-2xl leading-tight mb-5'}>{subtitle}</div>
        <Break />
      </div>
      <div dangerouslySetInnerHTML={{__html: body}}></div>
    </Block>
  </div>
)

CaseStudyTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  subtitle: PropTypes.string
}

const CaseStudy = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <CaseStudyTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        body={html}
        background={frontmatter.background}
      />
    </Layout>
  )
}

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "casestudy" } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        subtitle
        shortdescription
        background {
          childImageSharp {
            fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`