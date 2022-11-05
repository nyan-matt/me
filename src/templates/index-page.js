import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FeaturedWork from "../components/FeaturedWork";
import BlogRoll from "../components/BlogRoll";
import githublogo from '../img/github-icon.svg'
//import FullWidthImage from "../components/FullWidthImage";


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

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  subheading,
}) => {
  
  return (
    <>
    <section className="home hero is-medium background-hero">
      <div className="hero-body">
        <div id="hero-container" className="container">
          <div className="columns is-mobile full-height hero-bg">
            <div className="column is-two-thirds-desktop is-full-tablet hero-text-container">
              <h1 data-sal="fade" data-sal-delay="300" className="title is-spaced hero-headline is-primary">
                {title}
              </h1>
              <h2 data-sal="slide-up" data-sal-delay="600" className="subtitle hero-subheadline">
                {subheading}
              </h2>
            </div>
            <div className="column is-one-third-desktop is-hidden-touch">
            </div>
          </div>
        </div>
      </div>
      <div className="baz">
          <div className="bar">
            <img className="image is-16x16 is-inline" src={githublogo} alt="github logo" />
              <a className="is-inline" href="https://github.com/nyan-matt">I made this site, view on github</a>
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
                Development
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
        <h3 className="title is-size-4">Latest Posts</h3>
        <BlogRoll />
      </div>
    </section>
  </>
  )
};


IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout structuredData={structuredData} path={location.pathname}>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

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
`;
