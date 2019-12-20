import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
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
