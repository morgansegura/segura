import React, {useState, useEffect} from 'react'
import {Link, graphql, parsePath} from 'gatsby'
import {MDXProvider} from '@mdx-js/react'
import {MDXRenderer} from 'gatsby-plugin-mdx'

import Layout from '../../components/Layout'
import SEO from 'react-seo-component'
import {ButtonOutline} from '../../components/Button'
import {useSiteMetadata} from '../../hooks/useSiteMetadata'
import {useFontSize} from '../../components/Theme/useFontSize'
import ToggleFontSize from '../../components/Theme/toggleFontSize'
import {fontSizeNormal, fontSizeMedium, fontSizeLarge} from '../../components/Theme/themeStyles'
import {ThemeProvider} from 'styled-components'
/* Styled Components */
import {HeroBlock, BioImageContainer, BioContent, Button} from '../../styles/home/styled'

// Icons
import {AiOutlineSetting, AiOutlineArrowUp} from "react-icons/ai";

export default ({data, location, pageContext, pathContext}) => {
    const {
        image,
        siteUrl,
        siteLanguage,
        siteLocale,
        title: siteTitle,
        image: siteImage,
        twitter,
    } = useSiteMetadata()
    const {frontmatter, fields, body} = data.mdx
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

    const {previous, next} = pageContext


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
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <ThemeProvider theme={fontSizeMode}>

            <Layout location={location.pathname}
                    title={siteTitle}>
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
                <HeroBlock className="flex flex-col xl:flex-row">
                    <BioImageContainer>
                        <BioImage
                            className="w-full h-full"
                            style={{backgroundImage: `url(${thumbnail.childImageSharp.fluid.src})`}}
                            alt=""
                        />
                    </BioImageContainer>
                    <BioContent className="p-10 lg:p-16">
                        <span className="block font-thin text-base font-sans tracking-normal">Creative Technologist</span>
                        <h2 className="font-sans font-headline text-5xl leading-10 font-semibold mb-5">Morgan Segura</h2>
                        <div className="font-sans text-sm leading-loose">
                            <p className="mb-3 pt-2">
                                Hook leggings snapple dj jazzy jeff david duchovny end of the road gatorade, cornrows pulp
                                fiction alta vista skate tees roseanne barr wesley snipes. Eminem bandanas fanny packs hot pink
                                boy bands when you’re lost out there and you’re all alone.
                            </p>
                            <p className="pt-2">
                                Flip flops wearing your cap backwards encarta I've fallen and I can't get up wayne gretzky
                                tamagotchi. Nintendo 64 sup hip hop playa puff daddy, courtney love end of the road warheads
                                push pencils.
                            </p>
                        </div>
                        <Button className="mt-6 ml-auto text-center inline-flex lg:block py-3 px-6 rounded-md shadow-md font-semibold text-lg font-sans"
                          to={'/'}>
                            Download CV
                        </Button>
                    </BioContent>
                </HeroBlock>
                <div className={toggleToolbar ? `toolbar--open` : ``}>
                    <section>
                        <S.BioImageContainer>
                            {!!thumbnail && (
                                <S.BioImage
                                    style={{backgroundImage: `url(${thumbnail.childImageSharp.fluid.src})`}}
                                />
                            )}
                        </S.BioImageContainer>

                        <S.BioContent>
                            {!!category && <span className="category">{category}</span>}
                            <h2>{title}</h2>
                            {!!excerpt && <p>{excerpt}</p>} <S.TagsList> Tag 1, tag 2 </S.TagsList>

                        </S.BioContent>
                    </section>

                    <section className="section--inner">
                        <S.BlogHeader>
                            <S.BlogMeta>
                                <Grid container
                                      spacing={3}> <Grid item
                                                         xs={12}
                                                         sm={6}
                                                         className="author__section">

                                    {/*
              authorTitle,
              avatar,
              bio,
              bioExcerpt,
              jobTitle,
              */} {/*!!authorTitle && (
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
                                </Grid> <Grid item
                                              xs={12}
                                              sm={6}>

                                </Grid> </Grid> </S.BlogMeta>
                            <h3>{subheading}</h3>
                        </S.BlogHeader> <HorizontalRule/> <S.BlogBody> <MDXProvider> <MDXRenderer>{body}</MDXRenderer>
                    </MDXProvider> </S.BlogBody> <S.BlogFooter> Footer Stuff </S.BlogFooter>


                        {previous === false ? null : (
                            <div>
                                {previous && (
                                    <Link to={previous.fields.slug}>
                                        <p>{previous.frontmatter.title}</p>
                                    </Link>
                                )}
                            </div>
                        )} {next === false ? null : (
                        <div>
                            {next && (
                                <Link to={next.fields.slug}>
                                    <p>{next.frontmatter.title}</p>
                                </Link>
                            )}
                        </div>
                    )}
                    </section>
                    <S.ToolbarBlock> <S.ToTopButton
                        onClick={scrollTop}
                        className={showScroll ? `show` : ``}
                    > <AiOutlineArrowUp/> </S.ToTopButton>
                        <S.ToolbarButton onClick={() => setToggleToolbar(!toggleToolbar)}> <AiOutlineSetting/>
                        </S.ToolbarButton> </S.ToolbarBlock>
                </div>
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
