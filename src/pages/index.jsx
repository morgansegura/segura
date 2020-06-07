import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
// import { HeaderNavigation } from '../../components/Navigation'
import PostCard from '../components/PostCard'
// import Sticky from '../components/Sticky'
import WrapGameElement from '../components/Games/Reacteroids'

/* Material UI */
import Grid from '@material-ui/core/Grid'

import * as S from '../styles/home/styled'

// Images
import brickWall from '../../static/assets/images/brick-wall.jpg'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle} location={location}>
      <SEO
        title="Blog"
        keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* Rasteroids Game */}
      {/* <WrapGameElement /> /*}
      {/* Sticky Nav 
      <Sticky>
        <HeaderNavigation />
      </Sticky> */}
      {/* Large Card */}

      <S.Container className="container light-background">
        <S.Header className="page-head">
          <h2 className="page-head-title">Skills</h2>
        </S.Header>
        <S.ContentHero>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <S.ContentLeft
                className="bg-image"
                style={{ backgroundImage: `url(${brickWall})` }}
              >
                Left One
              </S.ContentLeft>
            </Grid>
            <Grid item xs={12} md={6}>
              <S.ContentLeft>
                <h3>
                  My <span>Design</span> and <span>Development</span> Skills
                </h3>
              </S.ContentLeft>
            </Grid>
          </Grid>
        </S.ContentHero>

        <S.Content></S.Content>
        <S.Footer>
          <S.ButtonWrapper></S.ButtonWrapper>
        </S.Footer>
      </S.Container>

      {/* Large Card */}
      <S.Container className="container dark-background">
        <S.Header className="page-head">
          <h2 className="page-head-title">Blog</h2>
        </S.Header>

        <Grid container spacing={3}>
          {posts.map(({ node }) => {
            postCounter++
            return (
              <Grid key={node.fields.slug} item xs={12} sm={6} md={6} lg={4}>
                <PostCard count={postCounter} node={node} postClass={`post`} />
              </Grid>
            )
          })}
        </Grid>
        <S.Footer>
          <S.ButtonWrapper></S.ButtonWrapper>
        </S.Footer>
      </S.Container>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            tags
            description
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
export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
