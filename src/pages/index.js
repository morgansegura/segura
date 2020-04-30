import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
// import Bio from "../components/Bio"
import PostCard from '../components/PostCard'
import { ColorButton } from '../components/Button'
import WrapGameElement from '../components/Games/Reacteroids'
/* Material UI */
import Grid from '@material-ui/core/Grid'
/* React Spring */
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

//
import * as S from '../styles/home.styled.js'
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
class BlogIndex extends React.Component {
  render() {
    const { data, location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    let postCounter = 0
    return (
      <Layout title={siteTitle}>
        <SEO
          title="Blog"
          keywords={[`devlog`, `blog`, `gatsby`, `javascript`, `react`]}
        />
        <Parallax ref={ref => (this.parallax = ref)} pages={2}>
          <ParallaxLayer offset={0} speed={1}>
            <WrapGameElement />
            <S.IndexButtonWrapper>
              <ColorButton onClick={() => this.parallax.scrollTo(2)}>
                {' '}
                Arrow
              </ColorButton>
            </S.IndexButtonWrapper>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={1}>
            <S.IndexContainer>
              {data.site.siteMetadata.description && (
                <S.IndexHeader className="page-head">
                  <h2 className="page-head-title">
                    {data.site.siteMetadata.description}
                  </h2>
                </S.IndexHeader>
              )}

              <Grid container spacing={3}>
                {posts.map(({ node }) => {
                  postCounter++
                  return (
                    <Grid key={node.fields.slug} item xs={12} md={6} lg={4}>
                      <PostCard
                        count={postCounter}
                        node={node}
                        postClass={`post`}
                      />
                    </Grid>
                  )
                })}
              </Grid>
              <S.IndexFooter>
                <S.IndexButtonWrapper>
                  <ColorButton onClick={() => this.parallax.scrollTo(0)}>
                    {' '}
                    Arrow
                  </ColorButton>
                </S.IndexButtonWrapper>
              </S.IndexFooter>
            </S.IndexContainer>
          </ParallaxLayer>
        </Parallax>
      </Layout>
    )
  }
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
