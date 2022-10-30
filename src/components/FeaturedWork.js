import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'


const FeaturedWorkTemplate = (props) => {
  const { edges: posts } = props.data.allMarkdownRemark

  return (
    <div className="columns is-mobile is-multiline work">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-4-desktop is-6-tablet is-full-mobile" key={post.id}>
              <Link className="" to={post.fields.slug}>
                <div className="column-content" data-sal="fade" data-sal-duration="500" style={{ 
                  backgroundColor: post.frontmatter.cardcolor,
                  backgroundImage: `url(${
                    !!post.frontmatter.cardimage.childImageSharp ?
                    post.frontmatter.cardimage.childImageSharp.fluid.src: post.frontmatter.cardimage 
                  })` 
                }}>
                </div>
                <span className="is-block is-family-secondary has-margin-top-12 is-size-6">{post.frontmatter.title}</span>
              </Link>
            </div>
          ))
        }
      </div>
  )
}


FeaturedWork.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function FeaturedWork() {
  return (
  <StaticQuery
    query={graphql`
      query FeaturedWorkQuery {
        allMarkdownRemark(
          limit: 6
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-post" }, featuredpost: { eq: true } } }
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
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                cardcolor
                cardimage {
                  childImageSharp {
                    fluid(maxWidth:600, quality: 50) {
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
    render={(data, count) => <FeaturedWorkTemplate data={data} count={count} />}
  />
  );
}
