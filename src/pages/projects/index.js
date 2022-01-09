import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout';

function Projects() {
  return (
    <Layout>
      <h1>Projects</h1>
      <sections>
        <p>Page content goes here</p>
        <Link className="btn" to="/projects/support">
          Contact Support
        </Link>
      </sections>
    </Layout>
  );
}

export default Projects;
