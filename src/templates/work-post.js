import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import MarkdownContent from '../components/MarkdownContent'

export const WorkPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
  summary,
  roles,
  bannerimage1,
  bodyblock1,
}) => {
  const PostContent = contentComponent || Content
  
  return (
    <section className="">
      {helmet || ''}
      
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <div className="featured-image" style={{
              backgroundImage: `url('${
              featuredimage ?
              featuredimage.childImageSharp.fluid.src : 'img/chemex.jpg' 
              }')` 
            }}>
            </div>
            <h1 className="title is-size-2">{title}</h1>
            <h2 className="subtitle is-size-5 has-text-weight-normal is-family-primary">{description}</h2>
            <div className="columns">
              <div className="column is-6">
                <h4>Summary</h4>
                <MarkdownContent className="foo" content={summary} />
              </div>
              <div className="column is-6">
                <h4>Roles</h4>
                <MarkdownContent className="foo" content={roles} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container is-fluid is-paddingless">
        <div className="work-banner-image" style={{
          backgroundImage: `url('${
          bannerimage1 ?
          bannerimage1.childImageSharp.fluid.src : 'img/chemex.jpg' 
          }')` 
        }}>
        </div>
      </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <MarkdownContent className="foo" content={bodyblock1} />
          </div>
        </div>
      </div>
      <div className="container is-fluid is-paddingless">
        <div className="work-banner-image" style={{
          backgroundImage: `url('${
          bannerimage1 ?
          bannerimage1.childImageSharp.fluid.src : 'img/chemex.jpg' 
          }')` 
        }}>
        </div>
      </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <MarkdownContent className="foo" content={bodyblock1} />
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="columns">
          <div className="column is-12">

          </div>
        </div>
      </div>

      <div className="container content">
        <div className="columns">
          <div className="column is-12">
          <PostContent content={content} />

          {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                {tags.map(tag => (
                  <li key={tag + `tag`}>
                    <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          </div>
        </div>
      </div>

      
      
            
    </section>
  )
}

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
  summary: PropTypes.string,
  bodyblock1: PropTypes.string,
  bannerimage1: PropTypes.object,
}

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Work">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        roles={post.frontmatter.roles}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
        summary={post.frontmatter.summary}
        bannerimage1={post.frontmatter.bannerimage1}
        bodyblock1={post.frontmatter.bodyblock1}
      />
    </Layout>
  )
}

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WorkPost

export const pageQuery = graphql`
  query WorkPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        summary
        bodyblock1
        tags
        roles
        bannerimage1 {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
