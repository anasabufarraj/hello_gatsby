import React from 'react';
import Layout from '../components/Layout';
import '../styles/global.css';

function Home() {
  return (
    <Layout>
      {/* Start: Layout index Children */}
      <h1>Home</h1>
      <section>
        <p>Page content goes here</p>
      </section>
      {/* End: Layout index Children */}
    </Layout>
  );
}

export default Home;
