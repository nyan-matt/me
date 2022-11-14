import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import backButton from "../img/arrow-left-solid.svg";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  featuredimage,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <><section className="section has-padding-bottom-32 has-padding-left-0 has-padding-right-0">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <div className="has-margin-top-0 has-margin-bottom-8">
              <Link to="/blog/">
                <img className="image is-24x24 is-inline" src={backButton} alt="Back Arrow" />
                <span style={{ position: 'absolute', top: '12px', paddingLeft: '12px' }}>
                  Back
                </span>
              </Link>
            </div>
            <div
              className="featured-image"
              style={{
                backgroundImage: `url(${featuredimage
                    ? featuredimage.childImageSharp.gatsbyImageData.images.fallback.src
                    : "img/placholder.jpg"})`
              }}
            ></div>
            <h1 className="title is-size-3">{title}</h1>
            <h2 className="subtitle is-size-5 has-text-weight-normal is-family-primary">
              {description}
            </h2>
            <PostContent className="main" content={content} />
          </div>
        </div>
      </div>
    </section><div className="container content">
        <div className="columns">
          <div className="column is-12">
            {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <div className="buttons">
                  {tags.map(tag => (
                    <Link
                      key={tag}
                      className="button is-small is-rounded is-outline"
                      to={`/tags/${kebabCase(tag)}/`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div></>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object
};

const BlogPost = ({ data, location }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout path={location.pathname}>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
