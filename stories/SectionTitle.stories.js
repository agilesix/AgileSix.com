import React from "react"
import { select } from "@storybook/addon-knobs"
import SectionTitle from "../src/components/section-title"

export default {
  title: "SectionTitle",
  component: SectionTitle,
}

const colors = {
  white: "text-white",
  red: "text-red",
  grey: "text-grey",
  "Light Grey": "text-grey-light",
  "Medium Grey": "text-grey-medium",
  "Dark Blue": "text-blue-dark",
  "Light Blue": "text-blue-light",
}

export const ExampleSectionTitle = () => (
  <SectionTitle textColor={select("textColor", colors, "text-red")}>
    Section Title
  </SectionTitle>
)
