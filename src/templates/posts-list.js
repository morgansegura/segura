import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import PostItem from '../components/PostItem'
import Section from '../components/Section'
import Sidebar from '../components/Sidebar'
import Grid from '@material-ui/core/Grid'
import { ColorButton } from '../components/Button'

import SEO from '../components/seo'
import TopicList from '../components/topicList'

import { removeDuplicates } from '../utils/util-functions'

import Pagination from '../components/Pagination'
import { SiteHeader } from '../components/Header'

const Blog = props => {
    const { data } = props
    const postList = data.allMarkdownRemark.edges

    const emptyQuery = ''
    const [state, setState] = useState({
        filteredData: [],
        query: emptyQuery,
    })

    const handleInputChange = event => {
        const query = event.target.value
        const { data } = props
        const posts = data.allMarkdownRemark.edges || []
        const filteredData = posts.filter(post => {
            const {
                description,
                title,
                topics,
                category,
            } = post.node.frontmatter
            return (
                category.toLowerCase().includes(query.toLowerCase()) ||
                description.toLowerCase().includes(query.toLowerCase()) ||
                title.toLowerCase().includes(query.toLowerCase()) ||
                (topics &&
                    topics
                        .join('')
                        .toLowerCase()
                        .includes(query.toLowerCase()))
            )
        })
        setState({
            query,
            filteredData,
        })
    }
    const handleTopicFilter = event => {
        const query = event.currentTarget.value
        const { data } = props

        const posts = data.allMarkdownRemark.edges || []

        const filteredData = posts.filter(post => {
            const { category } = post.node.frontmatter
            return (
                category.toLowerCase().includes(query.toLowerCase()) ||
                query.toLowerCase().includes('all')
            )
        })

        setState({
            query,
            filteredData,
        })
    }
    const { filteredData, query } = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults ? filteredData : postList

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
                    <Grid item xs={12} sm={4}>
                        <h1>Blog</h1>
                        <input
                            className="search-blog"
                            type="text"
                            aria-label="Search"
                            placeholder="Type to filter posts..."
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                                height: '100%',
                                flexDirection: 'column',
                            }}
                        >
                            <TopicList
                                className="list-anchor"
                                onClick={handleTopicFilter}
                            />
                        </div>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    {posts.map(
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
