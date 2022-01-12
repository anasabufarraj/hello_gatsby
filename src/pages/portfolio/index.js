import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';

function Portfolio({ data }) {
  const projects = data.allMarkdownRemark.nodes;
  
  return (
    <Layout>
      <h1>Portfolio</h1>
      <section>
        <ul>
          {projects.map(_p => (
            <li key={_p.id}>
              <Link to={`/portfolio/${_p.frontmatter.slug}`}>
                {_p.frontmatter.title}
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

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: frontmatter___title, order: ASC }) {
      nodes {
        id
        frontmatter {
          slug
          stack
          title
          thumb {
            childrenImageSharp {
              id
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;
