import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, siteTitle, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <section className="section">
    <div className="container">
      <Helmet title={`${title} | ${siteTitle}`} />
      <div className="container content">
      <div className="columns">
        <div className="column is-12">
        <div className="banner-image"
                style={{
                  backgroundImage: 'url(/img/shapes-bg-1.png)',
                  backgroundColor: '#333E48'
                }}
              >
                <div className="banner-image-text has-border-radius">
                  <h1 className="landing-title has-text-white" data-sal="fade" data-sal-duration="500">About</h1>
                  <h2 className="landing-subtitle has-text-white" data-sal="fade" data-sal-duration="500" data-sal-delay="500">About me</h2>
                </div>
              </div>
        </div>
      </div>
    </div>
      <div className="columns is-mobile is-multiline work">
        <div className="column is-12">
          <PageContent className="content" content={content} />
        </div>
      </div>
    </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        siteTitle={data.site.siteMetadata.title}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
