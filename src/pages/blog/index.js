import * as React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
//import BlogRoll from "../../components/BlogRoll";

// export default class BlogIndexPage extends React.Component {
//   render() {
//     return (
//       <Layout path="/blog/">
//         <div
//           className="full-width-image-container margin-top-0"
//           style={{
//             backgroundImage: `url('/img/blog-index.jpg')`,
//           }}
//         >
//           <h1
//             className="has-text-weight-bold is-size-1"
//             style={{
//               boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
//               backgroundColor: "#f40",
//               color: "white",
//               padding: "1rem",
//             }}
//           >
//             Latest Stories
//           </h1>
//         </div>
//         <section className="section">
//           <div className="container">
//             <div className="content">
//               <BlogRoll />
//             </div>
//           </div>
//         </section>
//       </Layout>
//     );
//   }
// }

class BlogIndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const title = data.site.siteMetadata.title;
    return (
      <Layout path="/blog/">
        <section className="section">
          <div className="container">
            <Helmet title={`Blog listing | ${title}`} />
            <div className="container content">
            <div className="columns">
              <div className="column is-12">
                <div className="banner-image"
                  style={{
                    backgroundImage: 'url(/img/shapes-bg-3.png)',
                    backgroundColor: '#333E48'
                  }}
                >
                  <div className="banner-image-text has-border-radius">
                    <h1 className="landing-title has-text-white" data-sal="fade" data-sal-duration="500">Blog</h1>
                    <h2 className="landing-subtitle has-text-white" data-sal="fade" data-sal-duration="500" data-sal-delay="500">Writings on design and technology</h2>
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
                    <p className="is-size-6 has-text-grey-dark excerpt">
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
      filter: { frontmatter: { templateKey: { eq: "blog-post" }, 
       featuredpost: { eq: true } } }
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