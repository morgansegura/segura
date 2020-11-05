import React, {useState, useEffect} from 'react'
import {graphql, Link} from 'gatsby'
import {MDXProvider} from '@mdx-js/react'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import Layout from '../../components/Layout'
import SEO from 'react-seo-component'
import {useSiteMetadata} from '../../hooks/useSiteMetadata'
import {useFontSize} from '../../components/Theme/useFontSize'
// import ToggleFontSize from '../../components/Theme/toggleFontSize'
import {fontSizeNormal, fontSizeMedium, fontSizeLarge} from '../../components/Theme/themeStyles'
import {ThemeProvider} from 'styled-components'
/* Styled Components */
import {HeroBlock, BioImageContainer, BioImage, BioContent, Button} from '../../styles/home/styled'
import * as S from '../../styles/blog-post/styled'

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
                <HeroBlock className="flex flex-col lg:flex-row">
                    <BioImageContainer>
                        <BioImage
                            className="w-full h-full"
                            style={{backgroundImage: `url(${thumbnail.childImageSharp.fluid.src})`}}
                            alt=""
                        />
                    </BioImageContainer>
                    <BioContent className="p-10 lg:p-16">
                        <span className="block font-thin text-base font-sans tracking-normal">{category}</span>
                        <h2 className="font-sans font-headline text-5xl leading-10 font-semibold mb-5">{title}</h2>
                        <div className="font-sans text-sm leading-loose">
                            <p className="mb-3 pt-2">
                                {excerpt}
                            </p>
                        </div>
                        <Button className="mt-6 ml-auto text-center inline-flex lg:block py-3 px-6 rounded-md shadow-md font-semibold text-lg font-sans"
                                to={'/'}>
                            Read Full {category}
                        </Button>
                    </BioContent>
                </HeroBlock>

                <section className="p-10 lg:p-16">
                    <S.Body>
                        <MDXProvider>
                            <MDXRenderer>{body}</MDXRenderer>
                        </MDXProvider>
                    </S.Body>
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
                </section>

                <div>
                    <button
                        onClick={scrollTop}
                        className={showScroll ? `show` : ``}
                    >
                        <AiOutlineArrowUp/>
                    </button>
                    <button onClick={() => setToggleToolbar(!toggleToolbar)}>
                        <AiOutlineSetting/>
                    </button>
                </div>
            </Layout>
        </ThemeProvider>
    )
}

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
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
