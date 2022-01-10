import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/global.css';

function Home() {
  const { site } = useStaticQuery(graphql`
    query SiteTitleHome {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <Layout>
      {/* Start: Layout index Children */}
      <h1>{site.siteMetadata.title}</h1>
      <section>
        <p>{site.siteMetadata.description}</p>
        <img src="iguana_image.jpg" alt="Iguana" draggable="false" />
      </section>
      {/* End: Layout index Children */}
    </Layout>
  );
}

export default Home;
