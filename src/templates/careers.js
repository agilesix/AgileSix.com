import React, { useEffect } from "react"
import PropTypes from "prop-types"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Block from "../components/block"
import CTA from "../components/cta"
import Prose from "../components/prose"
import SEO from "../components/seo"

export const CareersTemplate = ({
  title,
  subtitle,
  careers_intro,
  join_title,
  join_body,
  cta,
  hero,
  preview,
}) => {
  useEffect(() => {
    if (!document) return

    const oldScript = document.getElementById("grnhse_script")
    if (oldScript) {
      document.getElementById("grnhse_script_embed").removeChild(oldScript)
    }

    const ghScript = document.createElement("script")
    ghScript.src =
      "https://boards.greenhouse.io/embed/job_board/js?for=agilesix"
    ghScript.id = "grnhse_script"
    document.getElementById("grnhse_script_embed").appendChild(ghScript)
    console.log("embedded script!")
  }, [])

  return (
    <div>
      {!preview && (
        <div>
          <SEO title={title} description={subtitle} />
        </div>
      )}
      <Hero title={title} subtitle={subtitle} hero={hero} />
      <Block className={"bg-white"} title={false}>
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: careers_intro }} />
        </Prose>
      </Block>
      <Block className={"bg-white"} title={join_title}>
        <Prose>
          <div
            className={"mb-10"}
            dangerouslySetInnerHTML={{ __html: join_body }}
          />
          {!preview && (
            <>
              <div className="text-2xl font-semibold pb-1 mb-4 border-b border-grey">
                Here’s what’s available now.
              </div>
              <div id="grnhse_app">
                <a
                  style={{ fontSize: "1.5rem" }}
                  href="https://boards.greenhouse.io/agilesix"
                >
                  Browse Current Open Positions
                </a>
              </div>
              <div id="grnhse_script_embed" />
            </>
          )}
        </Prose>
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
}

CareersTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  careers_intro: PropTypes.string,
  join_title: PropTypes.string,
  join_body: PropTypes.string,
  cta: PropTypes.object,
}

const Careers = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <CareersTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        careers_intro={remark()
          .use(recommended)
          .use(remarkHtml)
          .processSync(frontmatter.careers_intro)
          .toString()}
        join_title={frontmatter.join_title}
        join_body={remark()
          .use(recommended)
          .use(remarkHtml)
          .processSync(frontmatter.join_body)
          .toString()}
        cta={frontmatter.cta}
        hero={frontmatter.hero.childImageSharp}
      />
    </Layout>
  )
}

Careers.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Careers

export const pageQuery = graphql`
  query CareersTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "careers" } }) {
      html
      frontmatter {
        title
        subtitle
        careers_intro
        join_title
        join_body
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
