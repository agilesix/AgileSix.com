/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CaseStudies = ({ children, selectedCasestudies, featuredOnly }) => (
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
                featured
                background {
                  childImageSharp {
                    fluid(maxWidth: 900) {
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
            let display = true;
            if (featuredOnly) {
              if (caseStudy.node.frontmatter.featured) {
                display = true;
              } else {
                display = false;
              }
            }

            if (!featuredOnly && selectedCasestudies) {
              display = selectedCasestudies.includes(caseStudy.node.frontmatter.title);
            }

            if (display) {
              return (
                <div className={'mt-6 md:mt-0 md:p-2 md:w-1/2 flex'}>
                  <div className={'w-full bg-white'}>
                    <a href={caseStudy.node.fields.slug} title={caseStudy.node.frontmatter.title}>
                      <div className={'bg-white relative'}>
                        <Img fluid={caseStudy.node.frontmatter.background.childImageSharp.fluid} style={{maxHeight: 250}} />
                      </div>
                    </a>
                    <div className={'p-8 border-t-2 border-grey-light'}>
                      <h2 className={'font-bold text-xl md:text-2xl text-blue-dark leading-tight mb-3'}>
                        <a href={caseStudy.node.fields.slug}>{caseStudy.node.frontmatter.title}</a>
                      </h2>
                      <div className={'text-l md:text-xl leading-tight'}>{caseStudy.node.frontmatter.shortdescription}</div>
                    </div>
                  </div>
                </div>
              )
            }

            return null;
          })}
        </div>
      )
    }}
  />
)

export default CaseStudies
