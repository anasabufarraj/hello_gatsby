import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

function Support({ data }) {
  const iguana_dynamic = getImage(data.file.childImageSharp)

  return (
    <Layout>
      <h1>Support</h1>
      <section>
        <p>Page content goes here</p>
      </section>
      <GatsbyImage className="img" image={iguana_dynamic} alt="Iguana" />
      <small>
        Dynamic Image, use only default options in 'gatsby-config.js'.
      </small>
    </Layout>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "iguana_dynamic.jpg" }) {
      childImageSharp {
        fluid {
          src
        }
        gatsbyImageData
      }
    }
  }
`

export default Support
