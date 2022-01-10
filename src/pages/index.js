import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/global.css';

function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
  console.log(title, description);

  return (
    <Layout>
      {/* Start: Layout index Children */}
      <h1>Home</h1>
      <section>
        <p>Page content goes here</p>
        <img src="iguana_image.jpg" alt="Iguana" draggable="false" />
      </section>
      {/* End: Layout index Children */}
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      host
      port
      siteMetadata {
        title
        description
        copyright
      }
    }
  }
`;

export default Home;
