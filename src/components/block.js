import PropTypes from "prop-types"
import React from "react"
import Break from "./break"

const Block = ({ title, children, className }) => (
  <div className={`px-10 py-20 ${className}`}>
    <div className={'max-w-4xl mx-auto'}>
      {title && (
        <div className={'mx-auto'}>
          <div className={'text-3xl text-blue-dark font-bold'}>{title}</div>
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
