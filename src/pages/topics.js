import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'

const TopicsPage = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    <div>
        <Helmet title={title} />
        <div>
            <h1>Topics Page</h1>
            <ul>
                {group.map(topic => (
                    <li key={topic.fieldValue}>
                        <Link to={`/blog/${kebabCase(topic.fieldValue)}/`}>
                            {topic.fieldValue} ({topic.totalCount})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)
TopicsPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    fieldValue: PropTypes.string.isRequired,
                    totalCount: PropTypes.number.isRequired,
                }).isRequired
            ),
        }),
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                title: PropTypes.string.isRequired,
            }),
        }),
    }),
}
export default TopicsPage

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___topics) {
                fieldValue
                totalCount
            }
        }
    }
`
