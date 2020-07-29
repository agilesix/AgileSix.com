import React from "react"
import Capabilities from "../src/components/capabilities"

export default {
  title: "Capabilities",
  component: Capabilities,
}

const demoCapabilities = [
  "Digital transformation, start to finish",
  "Tools that work for real people",
  "Product development and devops",
  "Pioneering work in civic tech",
]

export const ExampleCapabilities = () => (
  <Capabilities selectedCapabilities={demoCapabilities} />
)
