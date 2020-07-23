import React, { useState } from 'react'
import { Link, graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import _ from 'lodash'

import Layout from '../../components/Layout'
import SEO from 'react-seo-component'
import { ButtonOutline } from '../../components/Button'
import { useSiteMetadata } from '../../hooks/useSiteMetadata'
import { useFontSize } from '../../components/Theme/useFontSize'
import ToggleFontSize from '../../components/Theme/toggleFontSize'
import { fontSizeNormal, fontSizeMedium, fontSizeLarge } from '../../components/Theme/themeStyles'
import { ThemeProvider } from 'styled-components'
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
import { FaListAlt, FaTwitter, FaReact, FaGithubAlt, FaDev, FaDribbble } from "react-icons/fa";

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
  const { frontmatter, fields, body } = data.mdx
  const {
    title,
    date,
    excerpt,
    thumbnail,
    category,
    subheading,
    tags
  } = frontmatter
  const {
    title: authorTitle,
    avatar,
    bio,
    bioExcerpt,
    jobTitle,
  } = data.authorYaml

  const { previous, next } = pageContext


  // useState Hook
  const [toggleHideCard, setToggleHideCard] = useState(false)
  const [fontSize, toggleFontSize, componentMounted] = useFontSize()
  const fontSizeMode = fontSize === 'normal' ? fontSizeNormal : fontSize === 'medium' ? fontSizeMedium : fontSize === 'large' ? fontSizeLarge : fontSizeNormal

  return (
    <ThemeProvider theme={fontSizeMode}>

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
          // author={author}
          article="true"
          publishedDate={date}
          modifiedDate={new Date(Date.now()).toISOString()}
        />
        {console.log(data)}


        <Section className={toggleHideCard ? `card--hidden` : ``}>
          <S.BioImageContainer>
            {!!thumbnail && (
              <S.BioImage
                fluid={thumbnail.childImageSharp.fluid}
                alt={title}
              />
            )}
          </S.BioImageContainer>

          <S.BioContent>
            {!!category && <span className="category">{category}</span>}
            <h2>{title}</h2>
            {!!excerpt && <p>{excerpt}</p>}
            <S.TagsList>
              Tag 1, tag 2
            </S.TagsList>
            <S.ContentFooter>
              <ButtonBlock>
                <ButtonOutline onClick={() => setToggleHideCard(!toggleHideCard)}>{!toggleHideCard ? `Hide Card` : `Show Card`}</ButtonOutline>
              </ButtonBlock>
              <ToggleFontSize fontSize={fontSize} toggleFontSize={toggleFontSize} />
            </S.ContentFooter>
          </S.BioContent>
        </Section>

        <Section className="section--inner">
          <S.BlogHeader>
            <S.BlogMeta>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} className="author__section">

                  {/*
              authorTitle,
              avatar,
              bio,
              bioExcerpt,
              jobTitle,
              */}
                  {/*!!authorTitle && (
                  <S.AuthorDisplay>
                    <S.AuthorMeta>
                      <S.AuthorAvatar
                        fluid={avatar.childImageSharp.fluid}
                        alt={authorTitle}
                      />
                      <span>{authorTitle}</span>
                      <span>{jobTitle}</span>
                      <S.Social>
                        <FaDribbble />
                        <FaGithubAlt />
                        <FaTwitter />
                      </S.Social>
                    </S.AuthorMeta>
                    
                    <S.AuthorExcerpt>
                      {bioExcerpt}
                    </S.AuthorExcerpt>
                    <S.AuthorBio>
                      {bio}
                    </S.AuthorBio>
                  </S.AuthorDisplay>
                )*/}
                </Grid>
                <Grid item xs={12} sm={6}>

                </Grid>
              </Grid>
            </S.BlogMeta>
            <h3>{subheading}</h3>
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
            <Link to="/">Article 1</Link>
            <Link to="/">Article 1</Link>
            <Link to="/">Article 1</Link>
            <Link to="/">Article 1</Link>
            <Link to="/">Article 1</Link>
          </S.ToolbarSection>
        </S.AsideToolbar>
        <S.ToolbarBlock>
          <S.ToolbarButton to="">
            <FaListAlt />
          </S.ToolbarButton>
        </S.ToolbarBlock>
      </Layout>
    </ThemeProvider>
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
      fields {
        slug
        authorId
      }
      body
      frontmatter {
        title 
        date(formatString: "MMMM DD, YYYY")        
        category
        tags
        excerpt
        subheading
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
