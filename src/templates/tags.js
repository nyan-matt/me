import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'


class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    function getImagePath(post) {
      if (post.node.frontmatter.templateKey === 'work-post') {
        return post.node.frontmatter.cardimage.childImageSharp.fluid.src
      } else {
        return post.node.frontmatter.featuredimage.childImageSharp.fluid.src
      }
    }
    const postLinks = posts.map(post => (
      <div key={post.node.fields.slug} className="columns is-12 is-paddingless has-margin-top-32">
        <div className="column column-content is-4-desktop is-6-tablet" style={{
          backgroundImage: `url(${getImagePath(post)})`,
          backgroundColor: post.node.frontmatter.cardcolor ? post.node.frontmatter.cardcolor : '#AAA'
        }}>
        </div>
        <div className="column is-8-desktop is-6-tablet">
          <Link to={post.node.fields.slug} className="is-size-4 is-family-secondary">
            {post.node.frontmatter.title}
          </Link>
          <p>{post.node.frontmatter.description}</p>
          <p className="is-size-7 has-text-grey-light">From the {post.node.frontmatter.templateKey === 'blog-post' ? 'Blog' : 'Work'} Collection</p>
        </div>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} item${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`Items tagged with ${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div className="column is-12">
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                {postLinks}
                <p className="has-margin-top-32">
                  <Link className="button is-primary is-rounded" to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___templateKey], order: ASC }
      filter: { frontmatter: { tags: { in: [$tag] }, featuredpost: {eq: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            cardcolor
            featuredimage {
              childImageSharp {
                fluid(maxWidth:600, quality: 100) {
                  src
                }
              }
            }
            cardimage {
              childImageSharp {
                fluid(maxWidth:600, quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
