import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="columns is-mobile is-multiline work">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-4-desktop is-6-tablet is-full-mobile" key={post.id} data-sal="fade">
              <Link className="" to={post.fields.slug}>
                <div className="column-content" data-sal="fade" data-sal-duration="500" style={{ 
                  backgroundImage: `url(${
                    post.frontmatter.featuredimage ?
                    post.frontmatter.featuredimage.childImageSharp.fluid.src : 'img/chemex.jpg' 
                  })` 
                }}>
                </div>
                {post.frontmatter.title}
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          limit: 3
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" }, featuredpost: { eq: true } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                description
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
