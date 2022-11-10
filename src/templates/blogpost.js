import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import Break from '../components/break'
import Prose from '../components/prose'

export const BlogPostTemplate = ({
  title,
  body,
  subtitle
}) => (
  <div>
    <Block 
      className={'bg-white'}
    >
      <Prose>
        <div className={'pb-10'}>
          <div className={'mb-5'}>
            <a className={'text-blue-light text-md'} href={'/blog'}>View more articles</a>
          </div>
          <h1 className={'text-blue-dark text-4xl md:text-5xl leading-none font-bold mb-1'}>{title}</h1>
          <div className={'text-xl md:text-2xl leading-tight mb-5'}>{subtitle}</div>
          <Break />
        </div>
        <div className={'agile-prose'} dangerouslySetInnerHTML={{__html: body}}></div>
      </Prose>
    </Block>
  </div>
)

BlogPostTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  subtitle: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <BlogPostTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        body={html}
        background={frontmatter.background}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
            fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`