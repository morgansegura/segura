import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
// import Bio from "../components/Bio"
import Header from '../components/Header'
import PostCard from '../components/PostCard'
import WrapGameElement from '../components/Games/Reacteroids'

/* Material UI */
import Grid from '@material-ui/core/Grid'

import * as S from '../styles/home.styled.js'

class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
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
        {/* <WrapGameElement /> */}

        {/* Large Card */}
        <S.Background className="bg-shapes half-height">
          <S.Container>
            <h2>Do you like clowns?</h2>
          </S.Container>
        </S.Background>

        {/* Large Card */}
        <S.Container>
          {data.site.siteMetadata.description && (
            <S.Header className="page-head">
              <h2 className="page-head-title">Blog</h2>
            </S.Header>
          )}

          <Grid container spacing={3}>
            {posts.map(({ node }) => {
              postCounter++
              return (
                <Grid key={node.fields.slug} item xs={12} sm={6} md={6} lg={4}>
                  <PostCard
                    count={postCounter}
                    node={node}
                    postClass={`post`}
                  />
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
}

{
  /* 
    
                <div className="social-block">
              <a
                href="https://github.com/morgansegura/"
                title="Follow me on Github"
              >
                <FaGithubAlt />
              </a>
              <a
                href="https://twitter.com/codestandard"
                title="Follow me on Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/morgansegura/"
                title="Connect with me on Linkedin"
              >
                <FaLinkedinIn />
              </a>
            </div>
    */
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
