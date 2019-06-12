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
                    fluid(maxWidth: 200) {
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
        <div className={'flex flex-wrap'}>
          {capabilities.map(capability => {
            console.log(capability);
            return (
              <div className={'text-center w-1/2'}>
                <div className={'mx-auto mb-6'} style={{maxWidth: 200}}>
                  <Img fluid={capability.node.frontmatter.featuredimage.childImageSharp.fluid} />
                </div>
                <h2 className={'font-bold'}>{capability.node.frontmatter.title}</h2>
                {capability.node.frontmatter.shortdescription}
              </div>
            )
          })}
        </div>
      )
    }}
  />
)

export default Capabilities
