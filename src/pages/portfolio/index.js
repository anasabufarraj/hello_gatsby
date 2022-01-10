import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../../components/Layout';

function Portfolio() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ProjectsPage {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Portfolio</h1>
      <section>
        <ul>
          {allMarkdownRemark.nodes.map(_n => (
            <li key={_n.id}>
              <Link to={`/portfolio/${_n.frontmatter.slug}`}>
                {_n.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="btn" to="/portfolio/support">
          Contact Support
        </Link>
      </section>
    </Layout>
  );
}

export default Portfolio;
