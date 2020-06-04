const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPost = path.resolve(`./src/templates/project-post.js`)
  // const tagPage = path.resolve('src/templates/tag.jsx')
  // const categoryPage = path.resolve('src/templates/category.jsx')
  const authorsPage = path.resolve(`./src/templates/Authors/index.js`)
  const authorPage = path.resolve(`./src/templates/Author/index.js`)

  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                authorId
              }
              frontmatter {
                title
              }
              body
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    // Create project posts pages.
    const projects = result.data.allMdx.edges

    projects.forEach((project, index) => {
      const previous =
        index === projects.length - 1 ? null : projects[index + 1].node
      const next = index === 0 ? null : projects[index - 1].node

      createPage({
        path: project.node.fields.slug,
        component: projectPost,
        context: {
          slug: project.node.fields.slug,
          previous,
          next,
        },
      })
    })

    const authorSet = new Set()
    result.data.allMdx.edges.forEach(edge => {
      if (edge.node.fields.authorId) {
        authorSet.add(edge.node.fields.authorId)
      }
    })

    // create author's pages inside export.createPages:
    const authorList = Array.from(authorSet)

    authorList.forEach(author => {
      createPage({
        path: `/author/${_.kebabCase(author)}/`,
        component: authorPage,
        context: {
          authorId: author,
        },
      })
    })

    // Create author pages.
    const authors = result.data.allMdx.edges

    authors.forEach((author, index) => {
      const previous =
        index === authors.length - 1 ? null : authors[index + 1].node
      const next = index === 0 ? null : authors[index - 1].node

      createPage({
        path: author.node.fields.slug,
        component: authorsPage,
        context: {
          slug: author.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
    if (Object.prototype.hasOwnProperty.call(node.frontmatter, 'author')) {
      createNodeField({
        node,
        name: 'authorId',
        value: node.frontmatter.author,
      })
    }
  }
}
