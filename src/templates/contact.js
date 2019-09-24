import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import SEO from '../components/seo'
import Hero from '../components/hero'

export const ContactTemplate = ({
  title,
  subtitle,
  hero,
  preview
}) => (
  <div>
    {!preview && (
      <SEO title={title} description={subtitle} />
    )}
    <Hero
      title={title}
      subtitle={subtitle}
      hero={hero}
    />
    <Block className={'bg-white'} title={null}>
      <form 
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
        class="w-full max-w-lg mx-auto" 
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="name"><strong>Name</strong></label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-dark" id="name" name="name" type="text" placeholder="" required />
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="email"><strong>Email</strong></label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-dark" id="email" name="email" type="email" placeholder="" required />
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="company"><strong>Company</strong> (optional)</label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-dark" id="company" name="company" type="text" placeholder="" />
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="subject"><strong>I'd like to talk about</strong></label>
          <div class="relative">
            <select id="subject" name="subject" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-dark" required>
              <option>Select one...</option>
              <option value="hiring us">Working with us</option>
              <option value="market development">Civic tech market development</option>
              <option value="partnering">Partnering opportunities</option>
              <option value="our work">Our work</option>
              <option value="something else">Something else</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="email"><strong>Message</strong></label>
          <textarea rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-dark" name="message" id="message" type="message" placeholder="" required></textarea>
          <div class="text-center mt-10">
            <button className="block md:inline-block px-8 py-3 leading-none border text-white text-center bg-red hover:border-red hover:text-red hover:bg-white mt-4 md:mt-0">Send it</button>
          </div>
        </div>
      </form>
    </Block>
  </div>
)

ContactTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hero: PropTypes.object
}

const Contact = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactTemplate
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        hero={frontmatter.hero.childImageSharp}
      />
    </Layout>
  )
}

Contact.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Contact

export const pageQuery = graphql`
  query ContactTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "contact" } }) {
      html
      frontmatter {
        title
        subtitle
        hero {
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
