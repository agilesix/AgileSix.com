import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Hero = ({
  title,
  subtitle,
  className,
  titleClass,
  subtitleClass,
  hero,
}) => {
  return (
    <div className={`px-6 relative ${className || "bg-white"}`}>
      <div className={"max-w-5xl mx-auto"}>
        <div
          style={{ minHeight: 335 }}
          className={`flex flex-col-reverse md:flex-row items-center`}
        >
          <div className={`w-full md:w-1/2`}>
            {title && (
              <div className={`pr-0 md:pr-20`}>
                <h1
                  className={`${
                    titleClass || "text-blue-dark"
                  } tracking-tight text-4xl md:text-5xl leading-none font-bold mb-2`}
                >
                  {title}
                </h1>
                <div
                  className={`${
                    subtitleClass || "text-red"
                  } text-2xl md:text-3xl mb-6 leading-tight`}
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                ></div>
              </div>
            )}
          </div>
          <div className={`w-3/4 md:w-1/2 mb-10 md:mb-0`}>
            {hero && hero.fluid && <Img fluid={hero.fluid} />}
            {hero && !hero.fluid && <img src={hero} alt={title} />}
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  titleClass: PropTypes.string,
  subtitleClass: PropTypes.string,
}

Hero.defaultProps = {
  title: null,
}

export default Hero
