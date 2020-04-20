import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ColorButton } from './Button'

import { mergeArrays, removeDuplicates } from '../utils/util-functions'

function TopicList({ ...otherProps }) {
    const topicQuery = useStaticQuery(
        graphql`
            query {
                allMarkdownRemark {
                    edges {
                        node {
                            frontmatter {
                                category
                                topics
                            }
                        }
                    }
                }
            }
        `
    )
    const topicObj = topicQuery.allMarkdownRemark.edges
    let filteredArray = []
    let tags = {}
    topicObj.map(
        ({
            node: {
                frontmatter: { category, topics },
            },
        }) => {
            if (category !== null) {
                // category.filter((topic, i) => {
                filteredArray.push(category)
                filteredArray = removeDuplicates(filteredArray)
                // filteredArray = mergeArrays(filteredArray)
                // return filteredArray
                // })
            }
            // console.log(filteredArray)
        }
    )

    return (
        <nav className="list-nav">
            <ColorButton value="all" {...otherProps}>
                Show All
            </ColorButton>
            {filteredArray.map((tag, i) => (
                <ColorButton key={i} value={tag} {...otherProps}>
                    {tag}
                </ColorButton>
            ))}
        </nav>
    )
}

TopicList.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.object),
    category: PropTypes.arrayOf(PropTypes.object),
}

export default TopicList
