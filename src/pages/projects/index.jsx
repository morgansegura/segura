import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

import * as S from '../../styles/projects/styled'

const ProjectIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const tags = data.allMdx.distinct

  return (
    <Layout title={siteTitle}>
      <SEO title="Projects" />

      <S.LayoutWithSidebar>
        <header className="tag-page-head">
          <Link to="/projects">&laquot; All Projects</Link>
          <h1 className="title">Tags({tags.length})</h1>
          <div>
            <span>Star Rating by non-members</span>
            <span>Star Rating by members</span>
            <span>Updated May 8, 2020</span>
            <span>by Morgan Segura</span>
          </div>
          <button>Visit Demo (icon)</button>
          <button>Social (icon)</button>
        </header>
        <div>
          Photo of Project
          <div>
            Left
            <a href="">(Github link) Source</a>
            (On right) Try it yourself
            <a href="">(CodeSandbox Link)</a>
            <a href="">(Codepen Link)</a>
            <a href="">(Netlify link)</a>
          </div>
          <div>
            <p>Install this starter locally:</p>
            <div>
              gatsby new gatsby-starter-22boxes-uno
              https://github.com/iamtherealgd/gatsby-starter-22boxes-uno (Copy
              Link)
            </div>
            <div>
              <h3>Tags</h3>
              <p>Tag1, Tag2, Tag3</p>
            </div>
            <div>
              <h3>Description</h3>
              <p>
                A Gatsby starter for creating blogs and showcasing your work
              </p>
            </div>
            <div>
              <h3>Features</h3>
              <p>
                Work and About pages Work page with blog type content management
                Personal webiste to create content and put your portfolio items
                Landing pages for your work items, not just links
              </p>
            </div>
            <div>
              <h3>Dependencies</h3>
              <div>
                A bunch of meta like, MDX, Gatsby, React, CSS in JS, etc.,
                <button>Show More</button>
              </div>
            </div>
          </div>
        </div>
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
      </S.LayoutWithSidebar>
    </Layout>
  )
}

const projectQuery = graphql`
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
    query={projectQuery}
    render={data => <ProjectIndex props data={data} />}
  />
)
