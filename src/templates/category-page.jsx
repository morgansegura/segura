import React, { Fragment } from 'react'
import _ from 'lodash'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
/* Components */
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {useSiteMetadata} from '../hooks/useSiteMetadata'
import * as S from '../styles/blog/styled'

export default ({data, location, pageContext}) => {
    const {title: siteTitle} = useSiteMetadata()

    const tag = pageContext
    const posts = data.allMdx.edges
    // const authors = data.allAuthorYaml.edges
    console.log(data)
    return (
        <Layout location={location.pathname} title={siteTitle}>
            <SEO
                title={`Blog`}
                keywords={[`${tag}`, `blog`, `gatsby`, `javascript`, `react`]}
            />
            <S.Body className="pt-24 md:pt-0">
                <div className="p-10 lg:p-16">
                    <S.Header className="mb-6">
                        <h3 className="inline-flex items-center uppercase tracking-wide rounded-md shadow-lg px-4 py-2 font-headline font-semibold text-lg">
                            Areas of expertise
                        </h3>
                    </S.Header>
                    <div className="font-sans grid grid-cols-1 gap-4">
                        {!!posts && posts.map(({ node: { fields: { slug }, frontmatter: { author, category, date, excerpt, title, tags, thumbnail } } }, i) => (
                            <S.PostCard className="card shadow-lg relative rounded-md w-full p-4">
                                <div  className="relative flex flex-col md:flex-row">
                                    <Link to={slug} className="w-full mb-2 md:w-1/3 relative overflow-hidden md:mr-4 md:mb-0">
                                        {!!thumbnail && <Img className="h-32 min-h-full md:h-40 absolute rounded-sm" fluid={thumbnail.childImageSharp.fluid} alt={title} />}
                                    </Link>             
                                    <div className="flex-1">
                                        <Link to={slug} className="flex justify-between">
                                            <div className="category uppercase text-xs">{category}</div>
                                            <div className="date uppercase text-xs">{date}</div>                                        
                                        </Link>
                                        <Link to={slug} className="title block font-headline text-2xl mb-1 font-semibold">{title}</Link>
                                        <Link to={slug} className="excerpt block text-xs">{excerpt}</Link>
                                        <div className="tags text-xs font-semibold mt-4 flex justify-end space-x-2">
                                            {
                                                !!tags && tags.map((tag, i) => (
                                                    <Fragment>
                                                        <Link className="link rounded-md px-2" to={`/tags/${_.kebabCase(tag.toLowerCase())}`}>
                                                            #{tag}
                                                        </Link>
                                                    </Fragment>
                                                ))
                                            }
                                        </div>   
                                    </div>
                                </div>                             
                            </S.PostCard>
                        ))}
                    </div>
                </div>
            </S.Body>
        </Layout>
    );
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    site {
      siteMetadata {
          title
          author
      }
    }
    allMdx(
      limit: 1000
      sort: { fields: [fields___slug], order: DESC }
      filter: { frontmatter: { category: { eq: $category }, templateKey: {eq: "category-page"}}}
    ) {
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
                  thumbnail {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }          
              }

          }
      }
    }
  }
`;