const urljoin = require('url-join')
const siteConfig = require('./siteConfig')

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    author: siteConfig.author,
    image: siteConfig.image,
    siteLanguage: siteConfig.language,
    siteLocale: siteConfig.locale,
    description: siteConfig.description,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
    twitter: siteConfig.twitter,
  },
  mapping: {
    'mdx.frontmatter.author': `AuthorYaml`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mappings',
        path: `${__dirname}/content/mappings`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/authors`,
        name: `authors`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          posts: require.resolve('./src/templates/BlogPost/index.jsx'),
          default: require.resolve('./src/templates/BlogPost/index.jsx'),
        },
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                'gatsby-remark-relative-images',
                {
                  resolve: "gatsby-remark-related-posts",
                  options: {
                    posts_dir: `${__dirname}/blog`,
                  },
                },
                {
                  resolve: `gatsby-plugin-netlify-cms-paths`,
                  options: {
                    cmsConfig: `/static/admin/config.yml`
                  }

                },
                {
                  resolve: `gatsby-remark-images`,
                  options: {
                    maxWidth: 1200,
                  },
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
            },
          },
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },

          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    {
                      'content:encoded': edge.node.html,
                    },
                  ],
                })
              })
            },
            /* if you want to filter for only published posts, you can do
             * something like this:
             * filter: { frontmatter: { published: { ne: false } } }
             * just make sure to add a published frontmatter field to all posts,
             * otherwise gatsby will complain
             **/
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                    body
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS feed',
          },
        ],
      },
    },
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: siteConfig.prefix,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/segura-icon.png`,
        icon_options: [
          {
            purpose: `any maskable`
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: 'Open Sans',
            weights: ['300', '400', '600', '700']
          },
          {
            family: 'Cairo',
            weights: ['400', '600', '700']
          },
          // {
          //   family: 'Roboto Slab',
          //   weights: ['400', '700']
          // },
        ]
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
