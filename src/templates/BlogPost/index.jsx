import React, { useState, useEffect } from 'react'
import { Link, graphql, parsePath } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

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
import { AiOutlineSetting, AiOutlineArrowUp } from "react-icons/ai";

export default ({ data, location, pageContext, pathContext }) => {
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
  const {
    relatedArticles
  } = pathContext

  const { previous, next } = pageContext


  // useState Hook
  const [toggleToolbar, setToggleToolbar] = useState(false)
  const [fontSize, toggleFontSize] = useFontSize()
  const fontSizeMode = fontSize === 'normal' ? fontSizeNormal : fontSize === 'medium' ? fontSizeMedium : fontSize === 'large' ? fontSizeLarge : fontSizeNormal
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const checkScrollTop = () => {

      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    };
    return () => {
      window.addEventListener('scroll', checkScrollTop)
    };
  });


  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
          author={authorTitle}
          article="true"
          publishedDate={date}
          modifiedDate={new Date(Date.now()).toISOString()}
        />

        <S.BlogWrapper className={toggleToolbar ? `toolbar--open` : ``}>
          <Section>
            <S.BioImageContainer>
              {!!thumbnail && (

                <S.BioImage
                  style={{ backgroundImage: `url(${thumbnail.childImageSharp.fluid.src})` }}
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
                  <ButtonOutline onClick={() => setToggleToolbar(!toggleToolbar)}>{!toggleToolbar ? `Show Post Settings` : `Hide Post Settings`}</ButtonOutline>
                </ButtonBlock>

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
            <S.CloseToolbar onClick={() => setToggleToolbar(!toggleToolbar)}>
              CLOSE
            </S.CloseToolbar>

            <S.ToolbarSection>
              <span className="title--sm">Font Options</span>
              <ToggleFontSize fontSize={fontSize} toggleFontSize={toggleFontSize} />
            </S.ToolbarSection>

            {!!relatedArticles &&
              <S.ToolbarSection>
                <h5 className="title">Similar Posts</h5>
                {relatedArticles.map(({ node: post }) => (
                  <Link to={post.fields.slug} key={post.id}>
                    <div className="anchor-title">{post.frontmatter.title}</div>
                    <div className="anchor-body">{post.frontmatter.subheading}</div>
                  </Link>
                ))}
              </S.ToolbarSection>
            }
            {!!category &&
              <S.ToolbarSection>
                <p className="title">Categories</p>
                <Link to={`/categories/${category.replace(/\s+/g, '-').toLowerCase()}`}>{category}</Link>
              </S.ToolbarSection>
            }
            {!!tags &&
              <S.ToolbarSection>
                <h6 className="title">Tags</h6>
                {tags.map(tag => {
                  return (
                    <Link
                      key={tag}
                      style={{ textDecoration: 'none' }}
                      to={`/tags/${tag.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <div className="tag-item">#{tag}</div>
                    </Link>
                  )
                })}
              </S.ToolbarSection>
            }

          </S.AsideToolbar>
          <S.ToolbarBlock>
            <S.ToTopButton
              onClick={scrollTop}
              className={showScroll ? `show` : ``}
            >
              <AiOutlineArrowUp />
            </S.ToTopButton>
            <S.ToolbarButton onClick={() => setToggleToolbar(!toggleToolbar)}>
              <AiOutlineSetting />
            </S.ToolbarButton>
          </S.ToolbarBlock>
        </S.BlogWrapper>
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
      fileAbsolutePath
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
