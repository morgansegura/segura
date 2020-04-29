import React from 'react';
import { graphql } from 'gatsby';
/* Components */
import Layout from '../components/Layout';
import SEO from '../components/seo';
import PostCard from '../components/PostCard';
/* Material UI */
import Grid from '@material-ui/core/Grid';
/* Styled Components */
import * as S from '../styles/blog.styled.js';

class BlogPageTemplate extends React.Component {
    render() {
        const props = this.props;
        const tag = this.props.pageContext.tag;
        const posts = this.props.data.allMarkdownRemark.edges;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={`Blog`}
                    keywords={[
                        `${tag}`,
                        `blog`,
                        `gatsby`,
                        `javascript`,
                        `react`,
                    ]}
                />
                <S.BlogContainer>
                    <S.BlogHeader>
                        <h1>
                            #Blog{' '}
                            <span>
                                ({props.data.allMarkdownRemark.totalCount})
                            </span>
                        </h1>
                    </S.BlogHeader>
                    <S.BlogPostFeed>
                        <Grid container spacing={3}>
                            {posts.map(({ node }) => {
                                return (
                                    <Grid item xs={12} lg={4}>
                                        <PostCard
                                            key={node.fields.slug}
                                            node={node}
                                            postClass={`post`}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </S.BlogPostFeed>
                </S.BlogContainer>
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
                        date(formatString: "MMM DD, YYYY")
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
