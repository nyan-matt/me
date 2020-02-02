import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";
// import { kebabCase } from "lodash";
import Layout from "../../components/Layout";


class WorkIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    // const totalCount = data.allMarkdownRemark.totalCount;
    const title = data.site.siteMetadata.title;
    return (
      <Layout>
        <section className="section">
        <div className="container">
          <Helmet title={`Work - summaries of various projects | ${title}`} />
          <div className="container content">
          <div className="columns">
            <div className="column is-12">
              <div className="banner-image"
                style={{
                  backgroundImage: 'url(/img/shapes-bg-2.png)',
                  backgroundColor: '#333E48'
                }}
              >
                <div className="banner-image-text has-border-radius">
                  <h1 className="landing-title has-text-white" data-sal="fade" data-sal-duration="500">Work</h1>
                  <h2 className="landing-subtitle has-text-white" data-sal="fade" data-sal-duration="500" data-sal-delay="500">Summaries of various projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="columns is-mobile is-multiline work">
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
                          post.frontmatter.cardimage
                            ? post.frontmatter.cardimage.childImageSharp.fluid
                                .src
                            : "img/chemex.jpg"
                        })`,
                        backgroundColor: post.frontmatter.cardcolor
                          ? post.frontmatter.cardcolor
                          : "#AAA"
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
                  {/* <p className="is-size-7 has-text-grey-dark excerpt">
                    {post.frontmatter.summary}
                  </p> */}
                </div>
              ))}
          </div>
        </div>
        </section>
      </Layout>
    );
  }
}

WorkIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    }),
    totalCount: PropTypes.number
  })
};

export default WorkIndexPage;
export const workIndexQuery = graphql`
  query WorkIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 100
      skip: 0
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "work-post" } } }
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
            summary
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            cardcolor
            cardimage {
              childImageSharp {
                fluid(maxWidth: 600, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
