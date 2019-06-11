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
                featuredimage {
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
        <>
          {caseStudies.map(caseStudy => {
            return (
              <div>
                <div style={{maxWidth: 300}}>
                  <Img fluid={caseStudy.node.frontmatter.featuredimage.childImageSharp.fluid} />
                </div>
                {caseStudy.node.frontmatter.title}
                {caseStudy.node.frontmatter.shortdescription}
              </div>
            )
          })}
        </>
      )
    }}
  />
)

export default CaseStudies
