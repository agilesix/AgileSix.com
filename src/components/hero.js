import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import Break from "../components/break"

const Hero = ({ title, subtitle, className, textClass, hero }) => (
  <div className={`px-6 relative ${className || 'bg-white'}`}>
    <div className={'max-w-5xl mx-auto'}>
      <div style={{minHeight: 335}} className={`flex flex-col-reverse md:flex-row items-center`}>
        <div className={`w-full md:w-1/2`}>
          {title && (
            <div className={`pr-0 md:pr-6`}>
              <h1 className={`${textClass || 'text-blue-dark'} text-4xl md:text-5xl leading-none font-bold mb-2`}>{title}</h1>
              <div className={'text-grey-medium text-xl md:text-2xl mb-6 leading-tight'} dangerouslySetInnerHTML={{__html: subtitle}}></div>
              <Break />
            </div>
          )}
        </div>
        <div className={`w-3/4 md:w-1/2 mb-10 md:mb-0`}>
          {hero && (
            <Img fluid={hero.fluid} />
          )}
        </div>
      </div>
    </div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.node.isRequired,
}

Hero.defaultProps = {
  title: null,
}

export default Hero
