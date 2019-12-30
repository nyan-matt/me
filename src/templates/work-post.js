import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import MarkdownContent from "../components/MarkdownContent";
import BlogRoll from "../components/BlogRoll";

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
  showcase1,
  showcase2,
  learning,
  cardColor
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Fragment>
      <section className="section has-padding-bottom-32 has-padding-left-0 has-padding-right-0">
        {helmet || ""}

        <div className="container content">
          <div className="columns">
            <div className="column is-12">
              <div
                className="featured-image"
                style={{
                  backgroundImage: `url('${
                    featuredimage
                      ? featuredimage.childImageSharp.fluid.src
                      : "img/chemex.jpg"
                  }')`,
                  backgroundColor: cardColor
                }}
              ></div>
              <h1 className="title is-size-3">{title}</h1>
              <h2 className="subtitle is-size-5 has-text-weight-normal is-family-primary">
                {description}
              </h2>
              
            </div>
          </div>
        </div>
      </section>
      <div className="container content">
                <div className="columns">
                  <div className="column is-6">
                    <h2 className="title is-size-4 has-margin-bottom-8">Summary</h2>
                    <MarkdownContent className="foo" content={summary} />
                  </div>
                  <div className="column is-6">
                    <h4 className="title is-size-4 has-margin-bottom-8">Role &amp; Contribution</h4>
                    <MarkdownContent className="foo" content={roles} />
                  </div>
                </div>
              </div>
      <div className="container is-fluid is-paddingless">
        <div
          className="work-banner-image"
          style={{
            backgroundImage: `url('${
              showcase1 && showcase1.backgroundimage
                ? showcase1.backgroundimage.childImageSharp.fluid.src
                : null
            }')`,
            height: `${showcase1 && showcase1.height ? showcase1.height : 0}px`,
            backgroundAttachment: `${ showcase1 && showcase1.fixed ? "fixed" : null}`
          }}
        ></div>
      </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <PostContent content={content} />
          </div>
        </div>
      </div>
      <div className="container is-fluid is-paddingless">
        <div
          className="work-banner-image"
          style={{
            backgroundImage: `url('${
              showcase2 && showcase2.backgroundimage
                ? showcase2.backgroundimage.childImageSharp.fluid.src
                : null
            }')`,
            height: `${
              showcase2 && showcase2.height ? showcase2.height : 0
            }px`,
            backgroundAttachment: `${
              showcase2 && showcase2.fixed ? "fixed" : null
            }`
          }}
        ></div>
      </div>
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <MarkdownContent className="foo" content={learning} />
          </div>
        </div>
      </div>

      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            {tags && tags.length ? (
              <div>
                <h4 className="title is-size-4">Tags</h4>
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
      </div>

      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <h4 className="title">Latest Stories</h4>
            <BlogRoll />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

WorkPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.object,
  summary: PropTypes.string,
  roles: PropTypes.string,
  showcase1: PropTypes.object,
  showcase2: PropTypes.object,
  learning: PropTypes.string,
  cardColor: PropTypes.string
};

const WorkPost = ({ data }) => {
  const { markdownRemark: post } = data;

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
        showcase1={post.frontmatter.showcase1}
        showcase2={post.frontmatter.showcase2}
        learning={post.frontmatter.learning}
        cardColor={post.frontmatter.cardcolor}
      />
    </Layout>
  );
};

WorkPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default WorkPost;

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
        tags
        roles
        learning
        cardcolor
        showcase1 {
          height
          fixed
          backgroundimage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                src
              }
            }
          }
        }
        showcase2 {
          height
          fixed
          backgroundimage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                src
              }
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
`;
