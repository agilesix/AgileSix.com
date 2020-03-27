import React from "react"
import { text } from "@storybook/addon-knobs"
import CTA from "../src/components/cta"

export default {
  title: "Call To Action",
  component: CTA,
}

export const CallToAction = () => (
  <CTA
    title={text("title", "Title")}
    description={text("description", "Description")}
    label={text("label", "Link Label")}
    url={text("url", "https://agile6.com")}
  />
)
