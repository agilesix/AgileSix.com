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
        ) {
          edges {
            node {
              frontmatter {
                name
                position
                picture {
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
      let teamMembers = data.allMarkdownRemark.edges;

      return (
        <div className={'flex flex-wrap md:-mx-2'}>
          {teamMembers.map(capability => {
            return (
              <div className={'mt-6 md:mt-0 md:p-2 md:w-1/2'}>
                Beer
              </div>
            )
          })}
        </div>
      )
    }}
  />
)

export default TeamMembers
