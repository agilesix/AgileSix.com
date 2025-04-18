const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { execSync } = require("child_process")

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  // Create redirect from /team to /about
  createRedirect({
    fromPath: '/team',
    toPath: '/about',
    isPermanent: true,
    redirectInBrowser: true,
  })

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          slug: edge.node.fields.slug
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const gitModifiedTime = execSync(
      `git log --pretty=format:%aI -- ${node.fileAbsolutePath} | head -1`
    ).toString().trim()
    const gitCreatedTime = execSync(
      `git log --pretty=format:%aI --reverse -- ${node.fileAbsolutePath} | head -1`
    ).toString().trim()
    actions.createNodeField({
      node,
      name: "gitModifiedTime",
      value: gitModifiedTime,
    })
    actions.createNodeField({
      node,
      name: "gitCreatedTime",
      value: gitCreatedTime,
    })
  }
}