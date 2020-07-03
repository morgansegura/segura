import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Sidebar from '../components/Sidebar'
import { Paragraph, Headline, Heading } from '../components/Typography'
import PostCard from '../components/PostCard'
// import WrapGameElement from '../components/Games/Reacteroids'

/* Material UI */
import Grid from '@material-ui/core/Grid'

import { Content, Container, Section } from '../styles/layout/styled'

import { HorizontalRule } from '../components/Typography'

// Images
// import brickWall from '../../static/assets/images/brick-wall.jpg'

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

      {/* <WrapGameElement /> */}

      <Container className="container sidebar--left"></Container>
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
