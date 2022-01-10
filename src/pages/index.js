import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/global.css';

function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
  const allFile = data.allFile.nodes[1].relativePath;

  return (
    <Layout>
      <h1>{title}</h1>
      <section>
        <p>{description}</p>
        <img src="iguana_image.jpg" alt="Iguana" draggable="false" />
        <figcaption>File Name: {allFile}</figcaption>
      </section>
    </Layout>
  );
}

export const SiteTitleHome = graphql`
  query SiteTitleHome {
    site {
      siteMetadata {
        title
        description
      }
    }
    allFile {
      nodes {
        relativePath
        size
      }
    }
  }
`;

export default Home;
