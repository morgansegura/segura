require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Segura LLC`,
    siteUrl: `https://segura.llc`,
    shortName: `Segura`,
    slogan: `You'l never walk alone`,
    keywords: `soccer, club, youth, liverpool, competitive, lakeside, el cajon, san diego, east county, presidio`,
    description: `Liverpool Soccer Club ... `,
    copyright: `&copy; The Brazilian Guys, Established 2015. San Diego, CA.`,
    icon: `src/assets/images/logo.svg`,
    rssFeed: ``,
    twitterID: `@liverpoolsc`,
    fbAppID: `liverpoolsc`,
    instagramID: `liverpoolsc`,
    googleAnalyticsId: `UA-138891523-1`,
  },

  plugins: [
    // Files system
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          gaPropertyId: 'analyticsID',
        },
        tagmanager: {
          id: 'GTM-TF2RZWP',
          params: {
            gtm_auth: 'fcEqQRh_pspucUYBeQzpYw',
            gtm_preview: 'env-2',
            gtm_cookies_win: 'x',
          },
        },
        analytics: {
          id: 'UA-138891523-1',
        },
        optimize: {
          id: 'GTM-WPZSMLL',
        },
        includeInDevelopment: false,
      },
    },
    `gatsby-transformer-sharp`,
    // Media
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sitemap',
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
        icon: `src/assets/images/favicon.svg`,
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        headers: {
          '/*': [
            'Strict-Transport-Security: max-age=63072000; includeSubDomains; preload',
          ],
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
            family: `Source Sans Pro`,
            variants: [`300`, `400`, `600`],
          },
          {
            family: `Lato`,
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected: false,
        develop: true,
      },
    },
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
}
