import React from 'react'
import { graphql } from 'gatsby'
import PostItem from '../components/PostItem'
import Section from '../components/Section'
import { ColumnWrapper } from '../components/Grid'
import SEO from '../components/seo'

import Pagination from '../components/Pagination'

const Blog = props => {
    const postList = props.data.allMarkdownRemark.edges

    // Logic for Pagination Component
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
        currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
    const nextPage = `/blog/page/${currentPage + 1}`

    return (
        <div>
            <SEO title="Blog" />

            <Section className="section">
                <ColumnWrapper className="center-fit">
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
