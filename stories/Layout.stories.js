import React from "react"
import Layout from "../src/components/layout"
import Header from "../src/components/header"
import Footer from "../src/components/footer"

export default {
  title: "Layout",
  component: Layout,
}

export const AppLayout = () => (
  <Layout>
    <p>Example Content</p>
  </Layout>
)

export const AppHeader = () => <Header />

export const AppFooter = () => <Footer />
