require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Segura LLC`,
    siteUrl: `https://segura.llc`,
    shortName: `Segura`,
    slogan: `You'l never walk alone`,
    keywords: `soccer, club, youth, liverpool, competitive, lakeside, el cajon, san diego, east county, presidio`,
    description: `Liverpool Soccer Club ... `,
    copyright: `&copy; The Brazilian Guys, Established 2015. San Diego, CA.`,
    icon: `src/favicon.ico`,
    rssFeed: ``,
    twitterID: `@liverpoolsc`,
    fbAppID: `liverpoolsc`,
    instagramID: `liverpoolsc`,
    googleAnalyticsId: `UA-138891523-1`,
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorYaml',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem',
            },
          },
          {
            resolve: '@weknow/gatsby-remark-codepen',
            options: {
              theme: 'dark',
              height: 400,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
              quality: 90,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '~',
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
          {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
              modulePath: `${__dirname}/src/cms/cms.js`,
            },
          },
        ],
      },
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://segura.llc',
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-yaml',
    // 'gatsby-plugin-feed',
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
    //               custom_elements: [{ 'content:encoded': edge.node.html }],
    //             });
    //           });
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   html
    //                   fields { slug }
    //                   frontmatter {
    //                     title
    //                     date
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: '/rss.xml',
    //         title: "Your Site's RSS Feed",
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         match: '^/blog/',
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-color-function'), require('cssnano')()],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-131102503-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // IP anonymization for GDPR compliance
        anonymize: true,
        // Disable analytics for users with `Do Not Track` enabled
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/preview/**'],
        // Specifies what percentage of users should be tracked
        sampleRate: 100,
        // Determines how often site speed tracking beacons will be sent
        siteSpeedSampleRate: 10,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-marketing-platform',
    //   options: {
    //     dataLayer: {
    //       gaPropertyId: 'analyticsID',
    //     },
    //     tagmanager: {
    //       id: 'GTM-TF2RZWP',
    //       params: {
    //         gtm_auth: 'fcEqQRh_pspucUYBeQzpYw',
    //         gtm_preview: 'env-2',
    //         gtm_cookies_win: 'x',
    //       },
    //     },
    //     analytics: {
    //       id: 'UA-138891523-1',
    //     },
    //     optimize: {
    //       id: 'GTM-WPZSMLL',
    //     },
    //     includeInDevelopment: false,
    //   },
    // },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/content/avatars/segura.png`,
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        headers: {
          '/*': ['Strict-Transport-Security: max-age=63072000; includeSubDomains; preload'],
        }, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto Slab`,
            variants: [`300`, `400`, `600`],
          },
          {
            family: `Lato`,
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected: false,
        develop: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    // `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPO,
        accessToken: process.env.PRISMIC_API_KEY,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },

    'gatsby-plugin-netlify',
  ],
};
