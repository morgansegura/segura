import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostCard from '../components/PostCard';

class BlogPageTemplate extends React.Component {
    render() {
        const props = this.props;
        const tag = this.props.pageContext.tag;
        const posts = this.props.data.allMarkdownRemark.edges;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    // title={`#${tag}`}
                    title={`Blog`}
                    keywords={[
                        `${tag}`,
                        `blog`,
                        `gatsby`,
                        `javascript`,
                        `react`,
                    ]}
                />
                <header className='tag-page-head'>
                    <h1 className='page-head-title'>
                        #{tag}({props.data.allMarkdownRemark.totalCount})
                    </h1>
                </header>
                <div className='post-feed'>
                    {posts.map(({ node }) => {
                        return (
                            <PostCard
                                key={node.fields.slug}
                                node={node}
                                postClass={`post`}
                            />
                        );
                    })}
                </div>
            </Layout>
        );
    }
}

export default BlogPageTemplate;

export const pageQuery = graphql`
    query PostPage {
        site {
            siteMetadata {
                title
                author
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                        tags
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 1360) {
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
