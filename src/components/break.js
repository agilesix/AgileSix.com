import React from "react"

const Break = ({className}) => (
  <hr 
    className={`mt-1 mb-6 border-b-2 ${className || 'border-red'} m-0`}
    style={{
      maxWidth: 250
    }}
  />
)

export default Break
