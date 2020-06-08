import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import _ from "lodash";

import Layout from '../../components/Layout'
import SEO from 'react-seo-component'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai'

/* Styled Components */
import * as S from '../../styles/blog-post/styled'

export default ({ data, location, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    title: siteTitle,
    image: siteImage,
    twitter,
  } = useSiteMetadata()
  const { frontmatter, body, fields, excerpt } = data.mdx
  const { title, date, author, thumbnail, description } = frontmatter
  const { title: authorTitle, avatar, bio, bioExcerpt, jobTitle } = data.authorYaml
  
  const { previous, next } = pageContext

  return (
    <Layout location={location.pathname} title={siteTitle}>
      <SEO
        title={title}
        description={excerpt}
        image={
          siteImage === null
            ? `${siteUrl}${image}`
            : `${siteUrl}${siteImage.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitter}
        author={author}
        article="true"
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      {console.log(data)}
      <S.BlogContainer>
        <S.BlogHeader>       
          <S.BlogFlex className="flex-end"> 
            <S.BlogSocialBlock>
              <S.BlogSocial>
                <Link to="">
                  <AiFillTwitterSquare />
                </Link>
                <Link to="">
                  <AiFillFacebook />
                </Link>
                <Link to="">
                  <AiFillLinkedin />
                </Link>
              </S.BlogSocial>
            </S.BlogSocialBlock>            
            <S.BlogDate>{date}</S.BlogDate>
          </S.BlogFlex> 
          <S.BlogTitle>{title}</S.BlogTitle>         
        </S.BlogHeader>

        {!!description && 
          <S.BlogDescription>
            <h2>Synopsis:</h2>
            <p>{description}</p>
          </S.BlogDescription>
        }

        {thumbnail && (
          <S.BlogImageWrapper>
            <S.BlogImage
              className="kg-image"
              fluid={thumbnail.childImageSharp.fluid}
              alt={title}
            />
          </S.BlogImageWrapper>
        )}

        <S.BlogContent>
        <MDXProvider>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        </S.BlogContent>

        <S.BlogFooter>
          <S.BlogFlex className="flex-end">          
              <S.BlogAuthor to={`/author/${_.kebabCase(authorTitle)}`} title="">
              <S.BlogAuthorImg fluid={avatar.childImageSharp.fluid} alt="" />
                <p>{authorTitle}</p>
              </S.BlogAuthor>
          </S.BlogFlex>
        </S.BlogFooter>

        {previous === false ? null : (
          <div>
            {previous && (
              <Link to={previous.fields.slug}>
                <p>{previous.frontmatter.title}</p>
              </Link>
            )}
          </div>
        )}
        {next === false ? null : (
          <div>
            {next && (
              <Link to={next.fields.slug}>
                <p>{next.frontmatter.title}</p>
              </Link>
            )}
          </div>
        )}
      </S.BlogContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      body
      fields {
        slug
        authorId
      }
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        # thumbnail
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 680) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    authorYaml {
      bio
      bioExcerpt
      title
      jobTitle
      avatar {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }     
  }
`
