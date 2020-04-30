import React from 'react'
import { graphql } from 'gatsby'
/* Components */
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import PostCard from '../components/PostCard'
/* Material UI */
import Grid from '@material-ui/core/Grid'
/* Styled Components */
import * as S from '../styles/blog.styled.js'

export default ({ data, location, pageContext }) => {
  const { title: siteTitle } = useSiteMetadata()

  const tag = pageContext
  const posts = data.allMdx.edges

  console.log(posts)
  return (
    <Layout location={location.pathname} title={siteTitle}>
      <SEO
        title={`Blog`}
        keywords={[`${tag}`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      <S.BlogContainer>
        <S.BlogHeader>
          <h1>
            #Blog <span>({data.allMdx.totalCount})</span>
          </h1>
        </S.BlogHeader>
        <S.BlogPostFeed>
          <Grid container spacing={3}>
            {posts.map(({ node }) => {
              return (
                <Grid key={node.fields.slug} item xs={12} md={6} lg={4}>
                  <PostCard node={node} postClass={`post`} />
                </Grid>
              )
            })}
          </Grid>
        </S.BlogPostFeed>
      </S.BlogContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostPage {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            tags
            # thumbnail
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
