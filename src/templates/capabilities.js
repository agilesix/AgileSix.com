import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import CapabilitiesBlock from '../components/capabilities'
import CTA from '../components/cta'

export const CapabilitiesTemplate = ({
  title,
  body,
  cta,
  capabilities,
  capabilities_title,
  capabilities_body,
  process_title,
  process_body,
  contracts_title,
  contracts_body
}) => (
  <div>
    <div className={'bg-grey-light px-6 py-10 md:py-20'}>
      <div className={'max-w-4xl mx-auto flex'}>
        <div className={'md:w-2/3'}>
          <h1 className={'text-blue-dark text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
          <div className={'text-blue-light text-xl md:text-2xl leading-tight'} dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
      </div>
    </div>
    <Block className={'bg-white'} title={capabilities_title}>
      <div className={'text-xl md:text-2xl mb-10'} dangerouslySetInnerHTML={{__html: capabilities_body}}></div>
      <CapabilitiesBlock selectedCapabilities={capabilities} />
    </Block>
    <Block className={'bg-grey-light'} title={process_title}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: process_body}}></div>
    </Block>
    <Block className={'bg-white'} title={contracts_title}>
      <div className={'text-xl md:text-2xl'} dangerouslySetInnerHTML={{__html: contracts_body}}></div>
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

CapabilitiesTemplate.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
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
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <CapabilitiesTemplate
        title={frontmatter.title}
        body={html}
        capabilities={frontmatter.capabilities}
        intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.intro).toString()}
        capabilities_title={frontmatter.capabilities_title}
        capabilities_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.capabilities_body).toString()}
        contracts_title={frontmatter.contracts_title}
        contracts_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.contracts_body).toString()}
        process_title={frontmatter.process_title}
        process_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.process_body).toString()}
        cta={frontmatter.cta}
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
        intro
        capabilities
        capabilities_title
        capabilities_body
        process_title
        process_body
        contracts_title
        contracts_body
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