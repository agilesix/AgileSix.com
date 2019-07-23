/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Capabilities = ({ children, selectedCapabilities, featuredOnly }) => (
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
                featured
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
        <div className={'flex flex-wrap md:-mx-2'}>
          {capabilities.map(capability => {
            let display = true;
            if (featuredOnly) {
              if (capability.node.frontmatter.featured) {
                display = true;
              } else {
                display = false;
              }
            }

            if (!featuredOnly && selectedCapabilities) {
              display = selectedCapabilities.includes(capability.node.frontmatter.title);
            }

            if (display) {
              return (
                <div className={'mt-6 md:mt-0 md:p-2 md:w-1/2 flex'}>
                  <div className={'bg-grey-light p-1'}>
                    {capability.node.frontmatter.featuredimage && (
                      <div className={'bg-white mb-3'}>
                        <div className={'py-10 mx-auto'} style={{maxWidth: 250}}>
                          <Img fluid={capability.node.frontmatter.featuredimage.childImageSharp.fluid} />
                        </div>
                      </div>
                    )}
                    <div className={'p-8'}>
                      <h2 className={'font-bold text-xl md:text-2xl text-blue-dark leading-tight mb-3'}>{capability.node.frontmatter.title}</h2>
                      <div className={'text-l md:text-xl leading-tight'}>{capability.node.frontmatter.shortdescription}</div>
                    </div>
                  </div>
                </div>
              )
            }

            return null
          })}
        </div>
      )
    }}
  />
)

export default Capabilities
