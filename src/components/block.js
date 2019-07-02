import PropTypes from "prop-types"
import React from "react"
import Break from "./break"
import SectionTitle from "./section-title"

const Block = ({ title, children, className, image, imageTitle, imageBackgroundColor }) => (
  <div className={`px-6 py-10 md:py-20 relative ${className}`}>
    <div className={'max-w-5xl mx-auto'}>
      {title && (
        <div className={'mx-auto'}>
          <SectionTitle>{title}</SectionTitle>
          <Break />
        </div>
      )}
      {children}
    </div>
  </div>
)

Block.propTypes = {
  title: PropTypes.node.isRequired,
}

Block.defaultProps = {
  title: null,
}

export default Block
