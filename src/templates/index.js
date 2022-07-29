import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import Block from "../components/block"
import Hero from "../components/hero"
import CapabilitiesBlock from "../components/capabilities"
import CaseStudiesBlock from "../components/case-studies"
import SEO from "../components/seo"
import Prose from "../components/prose"
import CTA from "../components/cta"

export const IndexTemplate = ({
  title,
  subtitle,
  hero,
  cta,
  capabilities,
  capabilities_title,
  capabilities_body,
  casestudies,
  casestudies_title,
  casestudies_body,
  preview,
}) => (
  <div>
    <SEO title={title} description={subtitle} />
    <Hero
      title={title}
      subtitle={subtitle}
      className={`bg-blue-dark`}
      textClass={`text-white`}
      hero={hero}
    />
    <Block className={"bg-white"} title={capabilities_title}>
      <Prose>
        <div
          className={"text-xl md:text-2xl mb-10"}
          dangerouslySetInnerHTML={{ __html: capabilities_body }}
        ></div>
      </Prose>
      {!preview && <CapabilitiesBlock selectedCapabilities={capabilities} />}
      <div class="text-center mt-10">
        <a
          href="/capabilities"
          className="block md:inline-block px-8 py-3 leading-none border border-transparent text-white text-center bg-red hover:border-red hover:text-red hover:bg-white mt-4 md:mt-0"
        >
          Learn more about our capabilities
        </a>
      </div>
    </Block>
    <Block className={"bg-grey-light"} title={casestudies_title}>
      <Prose>
        <div
          className={"text-xl md:text-2xl mb-10"}
          dangerouslySetInnerHTML={{ __html: casestudies_body }}
        ></div>
      </Prose>
      {!preview && <CaseStudiesBlock selectedCasestudies={casestudies} />}
      <div class="text-center mt-10">
        <a
          href="/work"
          className="block md:inline-block px-8 py-3 leading-none border border-transparent text-white text-center bg-red hover:border-red hover:text-red hover:bg-white mt-4 md:mt-0"
        >
          See more of our work
        </a>
      </div>
    </Block>
    {cta.cta_visible && (
      <CTA
        title={cta.cta_title}
        description={cta.cta_description}
        label={cta.cta_label}
        url={cta.cta_url}
      />
    )}
  </div>
)

IndexTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

const Index = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter)
  return (
    <Layout>
      <IndexTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        hero={frontmatter.hero.childImageSharp}
        cta={frontmatter.cta}
        capabilities={frontmatter.capabilities}
        capabilities_title={frontmatter.capabilities_title}
        capabilities_body={remark()
          .use(recommended)
          .use(remarkHtml)
          .processSync(frontmatter.capabilities_body)
          .toString()}
        casestudies={frontmatter.casestudies}
        casestudies_title={frontmatter.casestudies_title}
        casestudies_body={remark()
          .use(recommended)
          .use(remarkHtml)
          .processSync(frontmatter.casestudies_body)
          .toString()}
      />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Index

export const pageQuery = graphql`
  query IndexTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index" } }) {
      html
      frontmatter {
        title
        subtitle
        capabilities
        capabilities_title
        capabilities_body
        casestudies
        casestudies_title
        casestudies_body
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
