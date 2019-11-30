import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import FeaturedWork from '../../components/FeaturedWork'
import BlogRoll from '../../components/BlogRoll'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <h1 className="title is-size-3">Tags</h1>
            <div className="buttons">
              {group.map(tag => (
                <Link key={tag.fieldValue} className="button is-rounded is-primary" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              ))}
            </div>
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
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <h4 className="title">Featured Work</h4>
            <FeaturedWork />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
