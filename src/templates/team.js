import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import recommended from 'remark-preset-lint-recommended'
import remarkHtml from 'remark-html'
import { graphql } from 'gatsby'
import Helmet from  'react-helmet'
import { PostScribe } from 'react-postscribe'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Block from '../components/block'
import TeamMembers from '../components/team-members'
import CTA from '../components/cta'
import Prose from '../components/prose'
import SEO from '../components/seo'

export const TeamTemplate = ({
  title,
  subtitle,
  team_intro,
  join_title,
  join_body,
  cta,
  hero,
  preview
}) => (
  <div>
    {!preview && (
        <SEO title={title} description={subtitle}>
          <Helmet>
            <script src="https://www.workable.com/assets/embed.js" type="text/javascript"></script>
          </Helmet>
        </SEO>
    )}
    <Hero
      title={title}
      subtitle={subtitle}
      hero={hero}
    />
    <Block className={'bg-white'} title={'Meet the Team'}>
      <Prose>
        <div className={'mb-10'} dangerouslySetInnerHTML={{__html: team_intro}}></div>
      </Prose>
      {!preview && (
        <TeamMembers />
      )}
    </Block>
    <Block className={'bg-grey-light'} title={join_title}>
      <Prose>
        <div className={'mb-10'} dangerouslySetInnerHTML={{__html: join_body}}></div>
        {!preview && (
          <PostScribe html={`
            <div class="text-2xl font-semibold pb-1 mb-4 border-b border-grey">Open Positions</div>
            <script>
              function checkVariable() {
                if (window.whr) {
                  whr(document).ready(function(){whr_embed(357587, {detail: 'titles', base: 'jobs', zoom: 'country', grouping: 'none'});});
                } else {
                  setTimeout(checkVariable, 1000);
                }
              }

              setTimeout(checkVariable, 50);
            </script>
            <div id='whr_embed_hook'></div>
          `} />
        )}
      </Prose>
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

TeamTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  team_intro: PropTypes.string,
  join_title: PropTypes.string,
  join_body: PropTypes.string,
  cta: PropTypes.object
}

const Team = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TeamTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        team_intro={remark().use(recommended).use(remarkHtml).processSync(frontmatter.team_intro).toString()}
        join_title={frontmatter.join_title}
        join_body={remark().use(recommended).use(remarkHtml).processSync(frontmatter.join_body).toString()}
        cta={frontmatter.cta}
        hero={frontmatter.hero.childImageSharp}
      />
    </Layout>
  )
}

Team.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Team

export const pageQuery = graphql`
  query TeamTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "team" } }) {
      html
      frontmatter {
        title
        subtitle
        team_intro
        join_title
        join_body
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