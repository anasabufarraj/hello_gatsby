import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

function Projects() {
  return (
    <Layout>
      <h1>Projects</h1>
      <section>
        <p>Page content goes here</p>
        <Link className="btn" to="/projects/support">
          Contact Support
        </Link>
      </section>
    </Layout>
  );
}

export default Projects;
