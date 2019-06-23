import React from "react"

const SectionTitle = ({textColor, children}) => (
  <div className={`text-3xl md:text-4xl font-bold ${textColor || 'text-blue-dark'}`}>{children}</div>
)

export default SectionTitle
