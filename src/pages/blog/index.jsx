import React from 'react'
import {graphql} from 'gatsby'
/* Components */
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'
import {useSiteMetadata} from '../../hooks/useSiteMetadata'
import PostCard from '../../components/PostCard'
/* Material UI */
import Grid from '@material-ui/core/Grid'
import * as S from '../../styles/blog/styled'
// import { Section, SectionInner, SectionTitleBlock, SectionTitle, SectionDescription, SectionContent, TitleBlock } from '../../styles/layout/styled'

export default ({data, location, pageContext}) => {
    const {title: siteTitle} = useSiteMetadata()

    const tag = pageContext
    const posts = data.allMdx.edges
    // const authors = data.allAuthorYaml.edges

    // console.log(posts)
    return (
        <Layout location={location.pathname}
                title={siteTitle}> <SEO
            title={`Blog`}
            keywords={[`${tag}`, `blog`, `gatsby`, `javascript`, `react`]}
        />
            <section className="pt-24">
                <div className="p-10 lg:p-16">
                    <header className="mb-6">
                        <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                            Areas of expertise
                        </h3>
                    </header>
                    <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-4">
                        {!!posts && posts.map(({node}) => {
                            return (
                                <div>
                                    <PostCard node={node}
                                              postClass={`post`}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
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
                        author
                        category
                        tags
                        excerpt
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
