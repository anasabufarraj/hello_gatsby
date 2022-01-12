const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/portfolio/${node.frontmatter.slug}`, // Page URL
      component: path.resolve('./src/templates/project_details.js'), // Where to generate pages.
      context: { slug: node.frontmatter.slug }, // Variable to pass to the generated page.
    });
  });
};
