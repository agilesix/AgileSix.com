import PropTypes from "prop-types"
import React from "react"

const Block = ({ title, children, className }) => (
  <div className={`px-6 py-10 ${className}`}>
    <div className={'max-w-6xl mx-auto'}>
      {title && (
        <div className={'mx-auto'}>
          <div className={'text-3xl text-bold'}>{title}</div>
          <hr />
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
