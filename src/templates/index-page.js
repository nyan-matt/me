import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import FeaturedWork from '../components/FeaturedWork'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
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
              <h1 className="title is-spaced hero-headline">
                {title}
              </h1>
              <h2 className="subtitle hero-subheadline">
                {subheading}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-white">
      <div className="container">
      <h3 className="title">Expertise &amp; Skills</h3>
        <div className="columns is-mobile is-multiline">
          <div className="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div className="columns is-mobile">
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/strategy.svg" alt="Cloud Services icon" />
                Strategy
              </div>
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/interview.svg" alt="Cloud Services icon" />
                User Research
              </div>
            </div>
          </div>
          <div className="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div className="columns is-mobile">
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/journey-map.svg" alt="Cloud Services icon" />
                Journey Mapping
              </div>
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/wireframe.svg" alt="Cloud Services icon" />
                Design
              </div>
            </div>
          </div>
          <div className="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div className="columns is-mobile">
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/prototype.svg" alt="Cloud Services icon" />
                Testing
              </div>
              <div className="column ">
                <img className="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/code.svg" alt="Cloud Services icon" />
                Prototyping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section has-background-white">
      <div className="container">
        <h3 className="title">Featured Work</h3>
        <FeaturedWork />
      </div>
    </section>
    
    <section className="section background-divider">
      <div className="container is-fluid  ">
      </div>
    </section>  

    <section className="section has-background-white">
      <div className="container">
        <div className="columns">
          <div className="column">
            <h3 className="has-text-weight-semibold is-size-2">Latest stories</h3>
            <BlogRoll />
          </div>
        </div>
      </div>
    </section>
  </Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
