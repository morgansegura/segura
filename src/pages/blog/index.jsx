import React from 'react'
import { graphql } from 'gatsby'
/* Components */
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import PostCard from '../../components/PostCard'
/* Material UI */
import Grid from '@material-ui/core/Grid'
import * as S from '../../styles/blog/styled'
import { Section, SectionInner, SectionTitleBlock, SectionTitle, SectionDescription, SectionContent, TitleBlock } from '../../styles/layout/styled'

export default ({ data, location, pageContext }) => {
  const { title: siteTitle } = useSiteMetadata()

  const tag = pageContext
  const posts = data.allMdx.edges
  // const authors = data.allAuthorYaml.edges

  console.log(posts)
  return (
    <Layout location={location.pathname} title={siteTitle}>
      <SEO
        title={`Blog`}
        keywords={[`${tag}`, `blog`, `gatsby`, `javascript`, `react`]}
      />
      <Section>
        <SectionInner>
          <SectionTitleBlock>
            <SectionTitle>Blog</SectionTitle>
            <SectionDescription>({data.allMdx.totalCount}) Post and Counting</SectionDescription>
          </SectionTitleBlock>

          <SectionContent>
            <Grid container spacing={3}>
              {!!posts && posts.map(({ node }) => {
                return (
                  <Grid key={node.fields.slug} item xs={12} md={6} xl={4}>
                    <PostCard node={node} postClass={`post`} />
                  </Grid>
                )
              })}
            </Grid>
          </SectionContent>
        </SectionInner>
      </Section>
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
    allMdx(sort: {fields: [frontmatter___date], order: DESC }) {
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
        body
        content {
          
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
    # allAuthorYaml {
    #             edges {
    #             node {
    #             bio
    #       bioExcerpt
    #       title
    #       jobTitle
    #       avatar {
    #             childImageSharp {
    #             fluid(maxWidth: 48) {
    #             ...GatsbyImageSharpFluid
    #           }
    #         }
    #       }
    #     }
    #   }    
    # }     
  }
`
