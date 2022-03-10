/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TeamMembers = ({ children }) => (
  <StaticQuery
    query={graphql`
      query TeamMembersQuery {
        allMarkdownRemark(
          filter: { frontmatter: {templateKey: {eq: "team-member"}} }
          sort: { 
            order: [DESC, ASC], 
            fields: [frontmatter___order, frontmatter___name]
          }
        ) {
          edges {
            node {
              html
              fields {
                slug
              }
              frontmatter {
                name
                position
                picture {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 600) {
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
      let teamMembers = data.allMarkdownRemark.edges;

      return (
        <div className={'flex flex-wrap sm:-mx-4'}>
          {teamMembers.map(person => {
            return (
              <div className={'mt-6 md:mt-0 px-8 sm:p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'}>
                <div className={'mx-auto'}>
                  {person.node.frontmatter.picture && (
                    <Img fluid={person.node.frontmatter.picture.childImageSharp.fluid} />
                  )}
                </div>
                <div className={'py-2'}>
                  <h2 className={'font-bold text-l leading-tight'}>{person.node.frontmatter.name}</h2>
                  <div className={'leading-tight'}>{person.node.frontmatter.position}</div>
                </div>
              </div>
            )
          })}
        </div>
      )
    }}
  />
)

export default TeamMembers
