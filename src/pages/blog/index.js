import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../../components/Layout";

class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const title = data.site.siteMetadata.title;
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <Helmet title={`Blog listing | ${title}`} />
            <div className="container content">
            <div className="columns">
              <div className="column is-12">
                <div
                  className="banner-image"
                  style={{
                    backgroundImage: "url(/img/blog-hero.png)"
                  }}
                ></div>
              </div>
            </div>
            </div>
            <div className="columns is-mobile is-multiline work">
              <div className="column is-12">
                <h1 className="title is-size-3">Blog</h1>
              </div>
              {posts &&
                posts.map(({ node: post }) => (
                  <div
                    className="column is-4-desktop is-6-tablet is-full-mobile"
                    key={post.id}
                    data-sal="fade"
                  >
                    <Link className="" to={post.fields.slug}>
                      <div
                        className="column-content"
                        style={{
                          backgroundImage: `url(${
                            post.frontmatter.featuredimage
                              ? post.frontmatter.featuredimage.childImageSharp
                                  .fluid.src
                              : "img/chemex.jpg"
                          })`
                        }}
                      ></div>
                    </Link>
                    <Link
                      className="card-title has-margin-top-12 is-block is-size-5"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <p className="is-size-6 has-text-grey-dark">
                      {post.frontmatter.description}
                    </p>
                  </div>
                ))}
            </div>
            </div>
          
        </section>
      </Layout>
    );
  }
}

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    }),
    totalCount: PropTypes.number
  })
};

export default BlogIndexPage;
export const blogIndexQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 100
      skip: 0
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
            tags
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
      totalCount
      pageInfo {
        currentPage
      }
    }
  }
`;
