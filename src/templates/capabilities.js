import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import Hero from '../components/hero'
import CapabilitiesBlock from '../components/capabilities'
import CTA from '../components/cta'
import SEO from '../components/seo'
import Prose from '../components/prose'

export const CapabilitiesTemplate = ({
  title,
  subtitle,
  cta,
  capabilities,
  capabilities_title,
  capabilities_body,
  process_title,
  process_body,
  contracts_title,
  contracts_body,
  hero
}) => (
  <div>
    <SEO title={title} description={subtitle} />
    <Hero
      title={title}
      subtitle={subtitle}
      hero={hero}
    />
    <Block className={'bg-white'} title={capabilities_title}>
      <Prose>
        <div className={'text-xl md:text-2xl mb-10'} dangerouslySetInnerHTML={{__html: capabilities_body}}></div>
      </Prose>
      <CapabilitiesBlock selectedCapabilities={capabilities} />
    </Block>
    <Block className={'bg-grey-light'} title={process_title}>
      <Prose>
        <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: process_body}}></div>
      </Prose>
    </Block>
    {
      cta && cta.cta_visible && (
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

CapabilitiesTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  intro: PropTypes.string,
  capabilities_title: PropTypes.string,
  capabilities_body: PropTypes.string,
  contracts_title: PropTypes.string,
  contracts_body: PropTypes.string,
  process_title: PropTypes.string,
  process_body: PropTypes.string,
  capabilities: PropTypes.array,
  cta: PropTypes.object
}

const Capabilities = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CapabilitiesTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        capabilities={frontmatter.capabilities}
        intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.intro).toString()}
        capabilities_title={frontmatter.capabilities_title}
        capabilities_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.capabilities_body).toString()}
        contracts_title={frontmatter.contracts_title}
        contracts_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.contracts_body).toString()}
        process_title={frontmatter.process_title}
        process_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.process_body).toString()}
        cta={frontmatter.cta}
        hero={frontmatter.hero.childImageSharp}
      />
    </Layout>
  )
}

Capabilities.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Capabilities

export const pageQuery = graphql`
  query CapabilitiesTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "capabilities" } }) {
      html
      frontmatter {
        title
        subtitle
        intro
        capabilities
        capabilities_title
        capabilities_body
        process_title
        process_body
        contracts_title
        contracts_body
        hero {
          childImageSharp {
            fluid(maxWidth: 200) {
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