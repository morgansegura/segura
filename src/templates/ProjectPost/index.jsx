import React from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import _ from 'lodash'

import Layout from '../../components/Layout'
import SEO from 'react-seo-component'
import { ButtonOutline } from '../../components/Button'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'

// Material UI
import Grid from '@material-ui/core/Grid';

/* Styled Components */
import * as S from '../../styles/blog-post/styled'
import { TitleBlock, Section } from '../../styles/layout/styled'
import { ButtonBlock } from '../../components/Button/styled'
import {
  HorizontalRule
} from '../../components/Typography'

// Icons
import { FaListAlt } from "react-icons/fa";

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


      <Section>
        <S.BioImageContainer>
          {thumbnail && (
            <S.BioImage
              fluid={thumbnail.childImageSharp.fluid}
              alt={title}
            />
          )}

        </S.BioImageContainer>

        <S.BioContent>
          <span>{category}</span>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <ButtonBlock>
            <ButtonOutline>Download CV</ButtonOutline>
          </ButtonBlock>
        </S.BioContent>
      </Section>

      <Section className="section--inner">
        <S.BlogHeader>
          <h1>{title}</h1>
          {!!excerpt && <h2>{excerpt}</h2>}

        </S.BlogHeader>
        <HorizontalRule />
        <S.BlogBody>
          <MDXProvider>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </S.BlogBody>
        <S.BlogFooter>
          Footer Stuff
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
      </Section>

      <S.AsideToolbar>
        <TitleBlock>
          <h3>What I Do</h3>
        </TitleBlock>
        <S.ToolbarSection>
          <Link>Article 1</Link>
          <Link>Article 1</Link>
          <Link>Article 1</Link>
          <Link>Article 1</Link>
          <Link>Article 1</Link>
        </S.ToolbarSection>
      </S.AsideToolbar>
      <S.ToolbarBlock>
        <S.ToolbarButton>
          <FaListAlt />
        </S.ToolbarButton>
      </S.ToolbarBlock>
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
