import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import FeaturedWork from '../components/FeaturedWork'

const structuredData = {
  "@context": "https://schema.org",
      "@type": "Person",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Saint Louis",
        "addressRegion": "MO"
      },
      "knowsAbout": ["design", "user experience", "human-centered design", "product management", "technology", "UX", "HCD", "product design"],
      "image": "https://matthewrea.com/img/matt-rea.jpg",
      "name": "Matthew Rea",
      "additionalName": "Matt Rea",
      "alumniOf": "Miami University",
      "gender": "male",
      "disambiguatingDescription": "Design and Technology Professional",
      "url": "https://matthewrea.com",
	    "sameAs" : [ "https://www.linkedin.com/in/mattrea/",
      "https://github.com/nyan-matt", "https://twitter.com/mattrea"]
}

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
}) => (
  <Fragment>
    <section className="home hero is-medium has-background-white">
      <div className="hero-body">
        <div id="hero-container" className="container" style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src: image
          })`
        }}>
          <div className="columns is-mobile">
            <div className="column is-half-desktop is-full-tablet hero-text-container">
              <h1 data-sal="fade" data-sal-delay="300" className="title is-spaced hero-headline is-primary">
                {title}
              </h1>
              <h2 data-sal="slide-up" data-sal-delay="600" className="subtitle hero-subheadline">
                {subheading}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-white">
      <div className="container">
      <h3 className="title is-size-4">Expertise &amp; Skills</h3>
        <div className="columns is-mobile is-multiline">
          <div className="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div className="columns is-mobile">
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/strategy.svg" alt="strategy icon" />
                Strategy
              </div>
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/interview.svg" alt="user research icon" />
                User Research
              </div>
            </div>
          </div>
          <div className="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div className="columns is-mobile">
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/journey-map.svg" alt="journey mapping icon" />
                Journey Mapping
              </div>
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/wireframe.svg" alt="design icon" />
                Design
              </div>
            </div>
          </div>
          <div className="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div className="columns is-mobile">
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/prototype.svg" alt="user testing icon" />
                Testing
              </div>
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/code.svg" alt="prototyping icon" />
                Prototyping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-white">
      <div className="container">
        <h3 className="title is-size-4">Featured Work</h3>
        <FeaturedWork />
      </div>
    </section>
    
    <section className="section background-divider">
      <div className="container is-fluid  ">
      </div>
    </section>  

    <section className="section has-background-white">
      <div className="container">
        <h3 className="title is-size-4">Latest Stories</h3>
        <BlogRoll />
      </div>
    </section>
  </Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout structuredData={structuredData}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
      }
    }
  }
`
