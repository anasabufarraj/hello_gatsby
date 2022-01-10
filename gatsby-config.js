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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
    },
  ],
};
