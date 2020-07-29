import React from "react"
import { boolean } from "@storybook/addon-knobs"
import Break from "../src/components/break"

export default {
  title: "Break",
  component: Break,
}

export const HorizontalBreak = () => (
  <>
    <p>content above</p>
    <Break noMargin={boolean("noMargin", false)} />
    <p>content below</p>
  </>
)
