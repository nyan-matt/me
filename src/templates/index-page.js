import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

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
    <section class="home hero is-medium has-background-white">
      <div class="hero-body">
        <div id="hero-container" class="container" style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src: image
          })`
        }}>
          <div class="columns is-mobile">
            <div class="column is-half-desktop is-full-tablet hero-text-container">
              <h1 class="title is-spaced hero-headline">
                {title}
              </h1>
              <h2 class="subtitle hero-subheadline">
                
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section has-background-white">
      <div class="container">
      <h3 class="title">Expertise &amp; Skills</h3>
        <div class="columns is-mobile is-multiline">
          <div class="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div class="columns is-mobile">
              <div class="column ">
                <img class="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/strategy.svg" alt="Cloud Services icon" />
                Strategy
              </div>
              <div class="column ">
                <img class="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/interview.svg" alt="Cloud Services icon" />
                User Research
              </div>
            </div>
            {/* User Research &amp; Strategy */}
          </div>
          <div class="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div class="columns is-mobile">
              <div class="column ">
                <img class="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/journey-map.svg" alt="Cloud Services icon" />
                Journey Mapping
              </div>
              <div class="column ">
                <img class="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/wireframe.svg" alt="Cloud Services icon" />
                Design
              </div>
            </div>
            {/* Design &amp; Ideation */}
          </div>
          <div class="column is-4-desktop is-4-tablet is-full-mobile has-text-centered">
            <div class="columns is-mobile">
              <div class="column ">
                <img class="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/prototype.svg" alt="Cloud Services icon" />
                Testing
              </div>
              <div class="column ">
                <img class="image is-96x96 has-margin-bottom-5 is-centered-img" src="img/code.svg" alt="Cloud Services icon" />
                Prototyping
              </div>
            </div>
            {/* Prototyping &amp; Validation */}
          </div>
          
        </div>
      </div>
    </section>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll count={2} />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
