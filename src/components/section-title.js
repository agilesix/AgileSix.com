import React from "react"

const SectionTitle = ({textColor, children}) => (
  <div className={`text-3xl md:text-4xl leading-tight font-bold ${textColor || 'text-blue-dark'}`}>{children}</div>
)

export default SectionTitle
