import React from 'react'
import { graphql, Link } from 'gatsby'
import PostItem from '../components/PostItem'
import Section from '../components/Section'
import Sidebar from '../components/Sidebar'
import Grid from '@material-ui/core/Grid'
import { ColorButton } from '../components/Button'

import ShuffleGrid from '../components/ShuffleGrid'
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
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <h1>Blog</h1>
                    </Grid>
                    <ShuffleGrid />
                    <Grid item xs={12} sm={6}>
                        <nav className="list-nav">
                            {postList.map(
                                (
                                    {
                                        node: {
                                            frontmatter: { category, topics },
                                            fields: { slug },
                                        },
                                    },
                                    i
                                ) => {
                                    let topic =
                                        topics[i] !== undefined &&
                                        topics[i].toLowerCase()

                                    return (
                                        <ColorButton
                                            key={slug}
                                            className="list-anchor"
                                            to={`topics/${topic}`}
                                        >
                                            {topic}
                                        </ColorButton>
                                    )
                                }
                            )}
                        </nav>
                    </Grid>
                </Grid>

                {/*<ShuffleGrid postList={postList}/>*/}
                <Grid container spacing={3}>
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
                                    topics,
                                },
                                timeToRead,
                                fields: { slug },
                            },
                        }) => (
                            <Grid key={slug} item xs={12} md={6} lg={4}>
                                <div className="photo-item">
                                    <PostItem
                                        slug={`/blog/${slug}`}
                                        background={background}
                                        category={category}
                                        date={date}
                                        timeToRead={timeToRead}
                                        title={title}
                                        description={description}
                                        image={image}
                                    />
                                </div>
                            </Grid>
                        )
                    )}
                </Grid>
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
            topics
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
