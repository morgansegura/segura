import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/seo';

/* Styled Components */
import * as S from '../styles/blog-post.styled.js';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description || post.excerpt}
                />
                <S.BlogContainer>
                    <S.BlogHeader>
                        <S.BlogTitle>{post.frontmatter.title}</S.BlogTitle>
                        <S.BlogDate>Date</S.BlogDate>
                        <S.BlogAuthor>Author</S.BlogAuthor>
                        <S.BlogSocialBlock>
                            <S.BlogSocial>Icon, Icon, Icon</S.BlogSocial>
                        </S.BlogSocialBlock>
                    </S.BlogHeader>

                    {post.frontmatter.description && (
                        <S.BlogDescription>
                            {post.frontmatter.description}
                        </S.BlogDescription>
                    )}

                    {post.frontmatter.thumbnail && (
                        <S.BlogImageWrapper>
                            <S.BlogImage
                                className='kg-image'
                                fluid={
                                    post.frontmatter.thumbnail.childImageSharp
                                        .fluid
                                }
                                alt={post.frontmatter.title}
                            />
                        </S.BlogImageWrapper>
                    )}

                    <S.BlogContent
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />

                    <S.BlogFooter>
                        {/* There are two options for how we display the byline/author-info.
        If the post has more than one author, we load a specific template
        from includes/byline-multiple.hbs, otherwise, we just use the
        default byline. */}
                    </S.BlogFooter>
                </S.BlogContainer>
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
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
`;
