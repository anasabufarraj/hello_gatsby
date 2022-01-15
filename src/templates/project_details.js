import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

function ProjectsDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <h3>{stack}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const query = graphql`
  query ProjectContent($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        stack
        title
      }
      html
    }
  }
`;

export default ProjectsDetails;
