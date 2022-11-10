import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import CTA from '../components/cta'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Block from '../components/block'
import Prose from '../components/prose'
import BlogPostBlock from '../components/blog-posts'

export const BlogTemplate = ({
  title,
  subtitle,
  cta,
  hero,
  blogposts,
  blogSubheadline,
  preview,
  intro
}) => (
  <div>
    {!preview && (
      <SEO title={title} description={subtitle}></SEO>
    )}
    <Hero
      title={title}
      subtitle={subtitle}
      hero={hero}
    />
    <Block className={'bg-white'} title={false}>
      <Prose>
        <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: intro}}></div>
      </Prose>
    </Block>
    <Block className={'bg-grey-light'} title={blogSubheadline}>
      {!preview && (
        <BlogPostBlock selectedBlogPosts={blogposts} />
      )}
    </Block>
    {
      cta.cta_visible && (
        <CTA
          title={cta.cta_title}
          description={cta.cta_description}
          label={cta.cta_label}
          url={cta.cta_url}
        />
      )
    }
  </div>
)

BlogTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  intro: PropTypes.string,
  cta: PropTypes.object,
  blogposts: PropTypes.array,
  blogSubheadline: PropTypes.string
}

const Blog = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BlogTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.intro).toString()}
        cta={frontmatter.cta}
        hero={frontmatter.hero.childImageSharp}
        blogposts={frontmatter.blogposts}
        blogSubheadline={frontmatter.blogSubheadline}
      />
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Blog

export const pageQuery = graphql`
  query BlogTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "blog" } }) {
      html
      frontmatter {
        title
        subtitle
        intro
        blogposts
        blogSubheadline
        hero {
          childImageSharp {
            fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        cta {
          cta_url
          cta_label
          cta_title
          cta_visible
          cta_description
        }
      }
    }
  }
`