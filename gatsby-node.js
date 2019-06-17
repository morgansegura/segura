const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  console.log();
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, templateKey, primaryTag } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;
      let layout = templateKey;

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || '',
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || '',
      });

      createNodeField({
        node,
        name: 'primaryTag',
        value: primaryTag || '',
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            excerpt
            timeToRead
            fields {
              slug
            }
            frontmatter {
              title
              tags
              templateKey
              date
              draft
              image {
                childImageSharp {
                  fluid(maxWidth: 3720) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              author {
                id
                bio
              }
            }
          }
        }
      }
      allAuthorYaml {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw new Error(result.errors);
  }

  // Create post pages
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node }, index) => {
    const { slug, layout } = node.fields;
    const id = node.id;
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/${layout || 'post'}.tsx`),
      context: {
        id,
        slug,
        prev,
        next,
        primaryTag: node.frontmatter.tags ? node.frontmatter.tags[0] : '',
      },
    });
  });

  // Create tag pages
  const tagTemplate = path.resolve('./src/templates/tags.tsx');
  const tags = _.uniq(
    _.flatten(
      result.data.allMarkdownRemark.edges.map(edge => {
        return _.castArray(_.get(edge, 'node.frontmatter.tags', []));
      }),
    ),
  );
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  });

  // Create author pages
  const authorTemplate = path.resolve('./src/templates/author.tsx');
  result.data.allAuthorYaml.edges.forEach(edge => {
    createPage({
      path: `/author/${_.kebabCase(edge.node.id)}/`,
      component: authorTemplate,
      context: {
        author: edge.node.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      resolve: {
        // extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      // module: {
      //   rules: [
      //     {
      //       test: /\.ts|\.tsx$/,
      //       loader: ['babel-loader', 'awesome-typescript-loader'],
      //     },
      //   ],
      // },
      // module: {
      //   rules: [
      //     {
      //       test: /smooth-scroll/,
      //       use: loaders.null(),
      //     },
      //   ],
      // },
    });
  }
  if (stage === `develop` || stage === `develop-html`) {
    actions.setWebpackConfig({
      devtool: 'eval-source-map',
    });
  }
};
/*
              image {
                ImageSharp {
                  fluid(maxWidth: 3720) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              author {
                id
                bio
                avatar {
                  children {
                    ImageSharp {
                      fixed(quality: 90) {
                        src
                      }
                    }
                  }
                }
              }
*/
