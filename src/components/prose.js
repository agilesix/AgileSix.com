import PropTypes from "prop-types"
import React from "react"

const Prose = ({ children }) => (
  <div className={`agile-prose md:px-20`}>
    {children}
  </div>
)

Prose.propTypes = {
  title: PropTypes.node.isRequired,
}

Prose.defaultProps = {
  title: null,
}

export default Prose
