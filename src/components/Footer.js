import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Footer() {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `);

  return (
    <footer>
      <small>® {site.siteMetadata.copyright}</small>
    </footer>
  );
}

export default Footer;
