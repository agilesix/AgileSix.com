/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Capabilities = ({ children }) => (
  <StaticQuery
    query={graphql`
      query CapabilitiesQuery {
        allMarkdownRemark(
            filter: { frontmatter: {templateKey: {eq: "capability"}} }
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
      let capabilities = data.allMarkdownRemark.edges;

      return (
        <>
          {capabilities.map(capability => {
            console.log(capability);
            return (
              <div>
                <div style={{maxWidth: 300}}>
                  <Img fluid={capability.node.frontmatter.featuredimage.childImageSharp.fluid} />
                </div>
                {capability.node.frontmatter.title}
                {capability.node.frontmatter.shortdescription}
              </div>
            )
          })}
        </>
      )
    }}
  />
)

export default Capabilities
