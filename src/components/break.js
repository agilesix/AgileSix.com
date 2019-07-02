import React from "react"

const Break = ({className, noMargin}) => (
  <hr 
    className={`m-0 mt-1 ${noMargin ?  '' : 'mb-10'} border-b-2 ${className || 'border-red'}`}
    style={{
      maxWidth: 250
    }}
  />
)

export default Break
