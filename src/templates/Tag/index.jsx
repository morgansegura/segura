import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import PostCard from '../../components/PostCard'

class TagPageTemplate extends React.Component {
  render() {
    const props = this.props
    const tag = this.props.pageContext.tag
    const posts = this.props.data.allMdx.edges
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          // title={`#${tag}`}
          title={`#${tag.charAt(0).toUpperCase() + tag.slice(1)}`}
          keywords={[`${tag}`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        <header className="tag-page-head">
          <h1 className="page-head-title">
            #{tag}({props.data.allMdx.totalCount})
          </h1>
        </header>
        <div className="post-feed">
          {posts.map(({ node }) => {
            return (
              <PostCard key={node.fields.slug} node={node} postClass={`post`} />
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default TagPageTemplate

export const pageQuery = graphql`
  query PostByTag($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(
      filter: { frontmatter: { meta: { tags: { in: [$tag] } } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title        
            date(formatString: "MMMM DD, YYYY")        
            # meta {
            #   # author
            #   # category
            #   # tags
            # }
            content {
              body
              excerpt
              subheading
              # thumbnail {
              #   childImageSharp {
              #     fluid(maxWidth: 680) {
              #       ...GatsbyImageSharpFluid
              #     }
              #   }
              # }          
            }
          }
        }
      }
    }
  }
`
