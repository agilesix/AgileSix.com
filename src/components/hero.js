import PropTypes from "prop-types"
import React from "react"

const Hero = ({ title, subtitle, className, textClass }) => (
  <div className={`px-6 py-10 md:py-20 relative ${className}`}>
    <div className={'max-w-4xl mx-auto'}>
      {title && (
        <div className={'mx-auto'}>
          <h1 className={`${textClass || 'text-blue-dark'} text-4xl md:text-5xl leading-none font-bold mb-5`}>{title}</h1>
          <div className={'text-blue-light text-xl md:text-2xl leading-tight'} dangerouslySetInnerHTML={{__html: subtitle}}></div>
        </div>
      )}
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
