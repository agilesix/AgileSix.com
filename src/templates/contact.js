import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Block from '../components/block'
import SEO from '../components/seo'

export const ContactTemplate = ({
  title,
  body
}) => (
  <div>
    <SEO title={title} description={body} />
    <div className={'bg-grey-light px-6 py-10 md:py-20'}>
      <div className={'max-w-4xl mx-auto flex'}>
        <div className={'md:w-2/3'}>
          <h1 className={'text-blue-dark text-4xl md:text-5xl leading-none font-bold mb-5'}>{title}</h1>
          <div className={'text-blue-light text-xl md:text-2xl leading-tight'} dangerouslySetInnerHTML={{__html: body}}></div>
        </div>
      </div>
    </div>
    <Block className={'bg-white'} title={null}>
      <form class="w-full max-w-lg mx-auto">
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="name"><strong>Name</strong></label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="" />
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="email"><strong>Email</strong></label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="" />
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="email"><strong>Company</strong> (optional)</label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="" />
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="email"><strong>I'd like to talk about</strong></label>
          <div class="inline-block relative w-full">
            <select class="block appearance-none w-full bg-white border border-grey-light hover:border-grey-dark px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Select one...</option>
              <option value="hiring us">Working with us</option>
              <option value="market development">Civic tech market development</option>
              <option value="partnering">Partnering opportunities</option>
              <option value="our work">Our work</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        <div class="w-full px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="email"><strong>Company</strong> (optional)</label>
          <textarea rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="message" type="message" placeholder=""></textarea>
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
  body: PropTypes.string
}

const Contact = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <ContactTemplate
        title={frontmatter.title}
        body={html}
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
      }
    }
  }
`