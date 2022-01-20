import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'

function About() {
  return (
    <Layout>
      <h1>About</h1>
      <section>
        <p>Page content goes here</p>
      </section>
      <StaticImage
        className="img"
        src="../images/iguana_static.jpg"
        placeholder="blurred"
        quality="80"
        alt="Iguana"
      />
      <small>
        Static Image, options overrides the default in 'gatsby-config.js'.
      </small>
    </Layout>
  )
}

export default About
