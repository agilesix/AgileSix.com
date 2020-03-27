import React from "react"
import Prose from "../src/components/prose"

export default {
  title: "Prose",
}

export const ProseText = () => (
  <Prose>This is some text inside a Prose component container.</Prose>
)

export const ProseHeading2 = () => (
  <Prose>
    <h2>Heading 2</h2>
  </Prose>
)

export const ProseHeading3 = () => (
  <Prose>
    <h3>Heading 3</h3>
  </Prose>
)

export const ProseParagraph = () => (
  <Prose>
    <p>Paragraph</p>
  </Prose>
)

export const ProseLink = () => (
  <Prose>
    <a href="https://https://agile6.com/">Link to Agile6.com</a>
  </Prose>
)
