import React from "react"

const SectionTitle = ({ textColor, children }) => (
  <h2
    className={`text-3xl md:text-4xl leading-tight font-bold ${
      textColor || "text-blue-dark"
    }`}
  >
    {children}
  </h2>
)

export default SectionTitle
