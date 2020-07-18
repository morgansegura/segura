import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import _ from 'lodash'

import Layout from '../../components/Layout'
import SEO from 'react-seo-component'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

/* Styled Components */
import * as S from '../../styles/blog-post/styled'
import {
  Heading,
  Headline,
  Paragraph,
  HorizontalRule,
} from '../../components/Typography'

import { Content, Container, Section } from '../../styles/layout/styled'

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
  const { title, date, author, category, thumbnail, description } = frontmatter
  const {
    title: authorTitle,
    avatar,
    bio,
    bioExcerpt,
    jobTitle,
  } = data.authorYaml

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

      <Container className="sidebar--right">

        <Content>
          <Section>
            <Heading
              type="supertitle"
              className="supertitle-outline accent3--border"
              text="Category"
            />

            <Headline className="" size="h1" text={title} />
            <Headline className="accent2--color" size="h2" text={title} />
            {!!excerpt && <Paragraph>{excerpt}</Paragraph>}

            {thumbnail && (
              <S.BlogImageWrapper>
                <S.BlogImage
                  className="kg-image"
                  fluid={thumbnail.childImageSharp.fluid}
                  alt={title}
                />
              </S.BlogImageWrapper>
            )}
          </Section>
          <HorizontalRule />
          <Section>
            <S.BlogPost>
              <MDXProvider>
                <MDXRenderer>{body}</MDXRenderer>
              </MDXProvider>
            </S.BlogPost>
          </Section>
        </Content>

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
      </Container>
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
        excerpt
        category
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
