const urljoin = require('url-join');
const siteConfig = require('./siteConfig');

module.exports = {
    siteMetadata: {
        title: siteConfig.name,
        author: siteConfig.author,
        description: siteConfig.description,
        siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
        social: {
            twitter: siteConfig.twitter,
        },
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
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
                path: `${__dirname}/content/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/static/assets`,
                name: `assets`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 680,
                            withWebp: true,
                            showCaptions: true,
                            quality: 75,
                            wrapperStyle: `margin: 7vw 0;`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /static\/.*\.svg/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: ``,
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`hind\:500`, `rasmus andersson\:400,500`],
            },
        },
        `gatsby-plugin-feed`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: siteConfig.name,
                short_name: siteConfig.shortName,
                start_url: siteConfig.prefix,
                background_color: `#ffffff`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/assets/gatsby-icon.png`,
            },
        },
        // `gatsby-plugin-netlify`,
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`,
    ],
};
