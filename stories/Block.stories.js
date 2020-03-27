import React from "react"
import { text } from "@storybook/addon-knobs"
import Block from "../src/components/block"

export default {
  title: "Block",
  component: Block,
}

export const BlockContent = () => (
  <Block title={text("title", "Title")}>
    <p>This is some block Block Content</p>
  </Block>
)
