const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const siteConfig = require("./data/SiteConfig");

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


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  fmImagesToRelative(node)
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`;
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`;
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter);

        createNodeField({
          node,
          name: "date",
          value: date.toISOString()
        });
      }
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "author")) {
        createNodeField({
          node,
          name: "authorId",
          value: node.frontmatter.author
        });
      }
    }
    createNodeField({ node, name: "slug", value: slug });
    postNodes.push(node);
  }
};

exports.setFieldsOnGraphQLNodeType = ({ type, actions }) => {
  const { name } = type;
  const { createNodeField } = actions;
  if (name === "Mdx") {
    addSiblingNodes(createNodeField);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {

    const blogPost = path.resolve(`./src/templates/blog-post.jsx`)
    // const tutorialPost = path.resolve(`./src/templates/tutorial-post.jsx`)
    const tagPage = path.resolve("src/templates/tag-page.jsx");
    const categoryPage = path.resolve("src/templates/category-page.jsx");
    const authorPage = path.resolve("src/templates/author-page.jsx");
    resolve(
      graphql(
        `
          {
            blogs: allMdx(limit: 1000, filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, sort: {fields: [frontmatter___date], order: [DESC]}) {
              edges {
                node {
                  id
                  frontmatter {
                    templateKey
                    title               
                  }
                  fields {
                    slug
                    authorId
                  }                   
                }
              }
            }
            pages: allMdx(limit: 1000, filter: {frontmatter: {templateKey: {ne: "blog-post"}}}) {
              edges {
                node {
                  id
                  frontmatter {
                    templateKey
                    title               
                  }
                  fields {
                    slug
                    authorId
                  }                   
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors);
          reject(result.errors);
        }

        const sortByDateDescending = (a, b) => {
          const aPubDateInMS = (new Date(a.publishedOn)).getTime()
          const bPubDateInMS = (new Date(a.publishedOn)).getTime()

          if (aPubDateInMS > bPubDateInMS) {
            return 1
          }

          if (aPubDateInMS < bPubDateInMS) {
            return -1
          }
          return 0
        }
        const getRelatedArticles = (currentArticles, articles) => {
          const MINIMUM_TAGS_IN_COMMON = 1

          const hasAtLeastOneTagInCommon = ({ node }) => {
            if (currentArticles.id === node.id) {
              return false
            }

            const commonTags = _.intersectionBy(currentArticles.frontmatter.tags, node.frontmatter.tags, (tag) => tag)
            return commonTags.length >= MINIMUM_TAGS_IN_COMMON
          }

          const filteredResults = articles.filter(hasAtLeastOneTagInCommon)
          if (filteredResults.length > 5) {
            return filteredResults.sort(sortByDateDescending).slice(0, 5)
          }
          return filteredResults
        }

        const tagSet = new Set();
        const categorySet = new Set();
        const authorSet = new Set();

        const {blogs, pages} = result.data

        blogs.edges.forEach(edge => {
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
            tags: edge.node.frontmatter.tags,
            component: path.resolve(
              `src/templates/blog-post.jsx`
            ),
            context: {
              slug: edge.node.fields.slug,
              relatedArticles: getRelatedArticles(edge.node, blogs.edges)
            }
          });
        });

        pages.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug,
            tags: edge.node.frontmatter.tags,
            component: path.resolve(
              `src/templates/${String(edge.node.frontmatter.templateKey)}.jsx`
            ),
            context: {
              slug: edge.node.fields.slug,
            }
          });
        })

        const tagListPosts = Array.from(tagSet);
        tagListPosts.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagPage,
            context: {
              tag
            }
          });
        });

        const categoryListPosts = Array.from(categorySet);
        categoryListPosts.forEach(category => {
          createPage({
            path: `/category/${_.kebabCase(category)}/`,
            component: categoryPage,
            context: {
              category
            }
          });
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
      })
    );
  });
};
