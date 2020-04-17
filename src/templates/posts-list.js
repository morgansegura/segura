import React from 'react'
import { graphql, Link } from 'gatsby'
import PostItem from '../components/PostItem'
import Section from '../components/Section'
import Sidebar from '../components/Sidebar'
import { ColumnWrapper, Column } from '../components/Grid'
import SEO from '../components/seo'

import Pagination from '../components/Pagination'
import { SiteHeader } from '../components/Header'

const Blog = props => {
    const postList = props.data.allMarkdownRemark.edges

    // const topicHeader = `${totalCount} post${
    //     totalCount === 1 ? '' : 's'
    // } topics in "${topic}"`

    // Logic for Pagination Component
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
        currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    return (
        <div style={{ width: '100%' }}>
            <SEO title="Blog" />
            <Section className="section">
                <ColumnWrapper className="gap">
                    <Column className="col-3">
                        <h1>Blog</h1>
                    </Column>
                    <Column className="col-9">
                        <nav className="list-nav">
                            <Link className="list-anchor" to="/">
                                Tutorials
                            </Link>
                            <Link className="list-anchor" to="/">
                                Tutorials
                            </Link>
                            <Link className="list-anchor" to="/">
                                Tutorials
                            </Link>
                        </nav>
                    </Column>
                </ColumnWrapper>

                <ColumnWrapper className="gap">
                    {postList.map(
                        ({
                            node: {
                                frontmatter: {
                                    background,
                                    category,
                                    date,
                                    description,
                                    title,
                                    image,
                                    id,
                                },
                                timeToRead,
                                fields: { slug },
                            },
                        }) => (
                            <Column className="col-12 col-lg-6 col-xl-4 col-xxl-3">
                                <PostItem
                                    key={slug}
                                    slug={`/blog/${slug}`}
                                    background={background}
                                    category={category}
                                    date={date}
                                    timeToRead={timeToRead}
                                    title={title}
                                    description={description}
                                    image={image}
                                />
                            </Column>
                        )
                    )}
                </ColumnWrapper>
            </Section>
            {/*  
            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
            */}
        </div>
    )
}

export const query = graphql`
  query PostsList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: { 
        fields: { locale: { eq: $locale } } 
        fileAbsolutePath: {regex: "/(blog)\/.*\\.md$/"}
      }
      limit: $limit
      skip: $skip
    ){
      edges {
        node {
          frontmatter {
            title
            description
            category
            background
            image
            date(formatString: $dateFormat)

          }
          timeToRead
          fields {
            locale
            slug
          }
        }
      }
    }
  }
`

export default Blog
