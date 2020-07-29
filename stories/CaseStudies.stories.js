import React from "react"
import CaseStudies from "../src/components/case-studies"

export default {
  title: "CaseStudies",
  component: CaseStudies,
}

const demoCasestudies = [
  "VA.gov Modernization",
  "CCSQ Agile Coaching and Digital Transformation",
  "Diffusion Marketplace",
  "Digital Services Coalition",
]

export const ExampleCaseStudies = () => (
  <CaseStudies selectedCasestudies={demoCasestudies} />
)
