/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CaseStudies = ({ children }) => (
  <StaticQuery
    query={graphql`
      query CaseStudyQuery {
        allMarkdownRemark(
            filter: { frontmatter: {templateKey: {eq: "casestudy"}} }
        ) {
          edges {
            node {
              html
              fields {
                slug
              }
              frontmatter {
                title
                shortdescription
                background {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
                logo {
                  childImageSharp {
                    fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      let caseStudies = data.allMarkdownRemark.edges;

      return (
        <div className={'flex flex-wrap md:-mx-2'}>
          {caseStudies.map(caseStudy => {
            return (
              <div className={'mt-6 md:mt-0 md:p-2 md:w-1/2'}>
                <div className={'bg-white p-1'}>
                  <div className={'bg-white mb-3 relative'}>
                    <Img fluid={caseStudy.node.frontmatter.background.childImageSharp.fluid} />
                    <div className={'absolute bottom-0 left-0 top-0 right-0 flex justify-center items-center'}>
                      <div style={{width: 150}}>
                        <Img fluid={caseStudy.node.frontmatter.logo.childImageSharp.fluid} />
                      </div>
                    </div>
                  </div>
                  <div className={'p-8'}>
                    <h2 className={'font-bold text-xl md:text-2xl text-blue-dark leading-tight mb-3'}>
                      <a href={caseStudy.node.fields.slug}>{caseStudy.node.frontmatter.title}</a>
                    </h2>
                    <div className={'text-l md:text-xl leading-tight'}>{caseStudy.node.frontmatter.shortdescription}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )
    }}
  />
)

export default CaseStudies
