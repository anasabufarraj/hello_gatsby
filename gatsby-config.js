/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Warrior',
    description: 'Learning Gatsby and Gatsby CLI.',
    copyright: 'Copyright 2021. All rights are reserved.',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`, // For dynamic images
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
          backgroundColor: 'black',
          jpgOptions: { progressive: true },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
}
