import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/global.css';

function Home() {
  const { site, allFile } = useStaticQuery(graphql`
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
  `);

  return (
    <Layout>
      <h1>{site.siteMetadata.title}</h1>
      <section>
        <p>{site.siteMetadata.description}</p>
        <img src="iguana_image.jpg" alt="Iguana" draggable="false" />
        <figcaption>File Name: {allFile.nodes[0].relativePath}</figcaption>
      </section>
    </Layout>
  );
}

export default Home;
