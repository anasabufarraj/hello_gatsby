import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../../static/global.css';

function Home({ data }) {
  const { title, description } = data.metadata.siteMetadata;
  const file = data.files.nodes[1].relativePath;

  return (
    <Layout>
      <h1>{title}</h1>
      <section>
        <p>{description}</p>
        <img src="iguana.jpg" alt="Iguana" draggable="false" />
        <small>Image regularly loaded from the 'static' directory.</small>
      </section>
      <small>File Name: {file}</small>
    </Layout>
  );
}

// Titled queries
export const query = graphql`
  {
    metadata: site {
      siteMetadata {
        title
        description
      }
    }
    files: allFile {
      nodes {
        relativePath
        size
      }
    }
  }
`;

export default Home;
