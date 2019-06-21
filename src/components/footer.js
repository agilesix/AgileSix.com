/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Block from "./block"


const CaseStudies = ({ children }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
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
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      let caseStudies = data.allMarkdownRemark.edges;

      return (
        <footer className={'text-grey-medium'}>
          <Block className={"bg-white"}>
            <div className={'md:flex'}>
              <div className={'md:w-1/4 md:pr-4'}>
                <div className={'mb-6'}>
                  <div className={'uppercase font-bold'}>Legal Name</div>
                  <div>Agile Six Applications, Inc</div>
                </div>
                <div className={'mb-6'}>
                  <div className={'uppercase font-bold'}>DUNS Number</div>
                  <div>079622664</div>
                </div>
                <div className={'mb-6'}>
                  <div className={'uppercase font-bold'}>Cage Code</div>
                  <div>79H77</div>
                </div>
                <div>
                  <div className={'uppercase font-bold'}>NAICS Codes</div>
                  <div>541511, 541512, 541513, 541519, 541611, 611420, 611430</div>
                </div>
              </div>
              <div className={'md:w-1/4 md:px-4'}>
                <div className={'uppercase font-bold mb-4'}>Case Studies</div>
                {caseStudies.map((caseStudy) => {
                  return(
                    <div className={'mb-6'}>
                      <Link to={caseStudy.node.fields.slug}>{caseStudy.node.frontmatter.title}</Link>
                    </div>
                  )
                })}
              </div>
              <div className={'md:w-1/4 md:px-4'}>
                <div className={'uppercase font-bold mb-4'}>Learn About</div>
                <div className={'mb-6'}>
                  <Link to={'/'}>Agile Six</Link>
                </div>
                <div className={'mb-6'}>
                  <Link to={'/'}>Our Capabilities</Link>
                </div>
                <div className={'mb-6'}>
                  <Link to={'/'}>The Team</Link>
                </div>
              </div>
              <div className={'md:w-1/4 md:px-4'}>
                <div className={'uppercase font-bold mb-4'}>Contact</div>
                <div className={'mb-6'}>
                  <Link to={'/'}>Hire Us</Link>
                </div>
                <div className={'mb-6'}>
                  <Link to={'/'}>GitHub</Link>
                </div>
                <div className={'mb-6'}>
                  <Link to={'/'}>LinkedIn</Link>
                </div>
              </div>
            </div>
            <div className={'border-t-2 border-grey-light pt-8 mt-8'}>
              <div className={'text-md'}>Copyright © 2019 Agile Six Applications, Inc.</div>
              <div className={'text-md'}>
                <a href="/privacy" className={'text-blue-light mr-2 underline'}>Privacy Policy</a>
                <a href="/purpose" className={'text-blue-light underline'}>Purpose</a>
              </div>
            </div>
          </Block>
        </footer>
      )
    }}
  />
)

export default CaseStudies
