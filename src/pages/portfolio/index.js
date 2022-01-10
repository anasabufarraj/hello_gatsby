import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

function Portfolio() {
  return (
    <Layout>
      <h1>Projects</h1>
      <section>
        <p>Page content goes here</p>
        <Link className="btn" to="/portfolio/support">
          Contact Us
        </Link>
      </section>
    </Layout>
  );
}

export default Portfolio;
