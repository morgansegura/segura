const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

const postNodes = [];

function addSiblingNodes(createNodeField) {
  postNodes.sort(
    ({ frontmatter: { date: date1 } }, { frontmatter: { date: date2 } }) => {
      const dateA = moment(date1, siteConfig.dateFromFormat);
      const dateB = moment(date2, siteConfig.dateFromFormat);

      if (dateA.isBefore(dateB)) return 1;

      if (dateB.isBefore(dateA)) return -1;

      return 0;
    }
  );
  for (let i = 0; i < postNodes.length; i += 1) {
    const nextID = i + 1 < postNodes.length ? i + 1 : 0;
    const prevID = i - 1 >= 0 ? i - 1 : postNodes.length - 1;
    const currNode = postNodes[i];
    const nextNode = postNodes[nextID];
    const prevNode = postNodes[prevID];
    createNodeField({
      node: currNode,
      name: "nextTitle",
      value: nextNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "nextSlug",
      value: nextNode.fields.slug
    });
    createNodeField({
      node: currNode,
      name: "prevTitle",
      value: prevNode.frontmatter.title
    });
    createNodeField({
      node: currNode,
      name: "prevSlug",
      value: prevNode.fields.slug
    });
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const projectPost = path.resolve(`./src/templates/project-post.js`)
  const tagPage = path.resolve("src/templates/Tag/index.js");
  const categoryPage = path.resolve("src/templates/Category/index.js");
  const authorsPage = path.resolve("src/templates/Authors/index.js");
  const authorPage = path.resolve("src/templates/Author/index.js");

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
      console.log(result.errors);
      reject(result.errors);
    }


    const tagSet = new Set();
    const categorySet = new Set();
    const authorSet = new Set();


    result.data.allMdx.edges.forEach(edge => {
        if (edge.node.frontmatter.tags) {
          edge.node.frontmatter.tags.forEach(tag => {
            tagSet.add(tag);
          });
        }

        if (edge.node.frontmatter.category) {
          categorySet.add(edge.node.frontmatter.category);
        }

        if (edge.node.fields.authorId) {
          authorSet.add(edge.node.fields.authorId);
        }

        createPage({
          path: edge.node.fields.slug,
          component: blogPost,
          context: {
            slug: edge.node.fields.slug
          }
        });
      });

      const tagList = Array.from(tagSet);
      tagList.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagPage,
          context: {
            tag
          }
        });
      });

      const categoryList = Array.from(categorySet);
      categoryList.forEach(category => {
        createPage({
          path: `/categories/${_.kebabCase(category)}/`,
          component: categoryPage,
          context: {
            category
          }
        });
      });

      createPage({
        path: `/authors/`,
        component: authorsPage
      });
      const authorList = Array.from(authorSet);
      authorList.forEach(author => {
        createPage({
          path: `/author/${_.kebabCase(author)}/`,
          component: authorPage,
          context: {
            authorId: author
          }
        });
      });

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
