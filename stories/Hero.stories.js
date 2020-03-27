import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../src/components/hero"
import { pageQuery } from "../src/templates/work"
import exampleHeroImage from "../static/img/cloud.png"

export default {
  title: "Hero",
  component: Hero,
}

export const ExampleHero = () => (
  <Hero
    title="Title"
    subtitle="This is an example subtitle"
    hero={exampleHeroImage}
  />
)
