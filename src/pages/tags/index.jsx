import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

// import { Content, Container } from '../../styles/layout/styled'

const TagIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMdx.distinct

  return (
    <Layout title={siteTitle}>
      <SEO title="Tags" />
      <header className="tag-page-head">
        <h1 className="page-head-title">Tags({tags.length})</h1>
      </header>
      <div className="tag-container">
        {tags.map(tag => {
          return (
            <Link
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/tags/${tag.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <div className="tag-item">#{tag}</div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      distinct(field: frontmatter___tags)
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => <TagIndex props data={data} />}
  />
)
