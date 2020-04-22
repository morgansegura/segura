import React from 'react'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import Section from '../components/Section'

import * as S from '../components/Post/styled'
import { MdArrowForward, MdDateRange, MdTimelapse } from 'react-icons/md'
import {
    FaGithubAlt,
    FaTwitter,
    FaLinkedinIn,
    FaRegBookmark,
} from 'react-icons/fa'

const Post = props => {
    const post = props.data.markdownRemark
    const { title, description, date } = post.frontmatter

    return (
        <div style={{ width: '100%' }}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                image={post.frontmatter.image}
            />
            <Section className="section">
                <S.Content>
                    <TitlePage text={post.frontmatter.title} />
                    <S.AuthorCard className="author-card">
                        <div className="author-card__icon" />
                        <div className="author-card__meta">
                            <p className="author">
                                authorId
                                {console.log(post.frontmatter.author)}
                            </p>
                            <p>
                                <span className="date">{date} &sdot; </span>
                                {'  '}
                                <span className="time-to-read">
                                    Time to read
                                </span>
                            </p>
                        </div>
                    </S.AuthorCard>
                    <S.SocialBlock>
                        <a href="#" title="Follow me on Github">
                            <FaGithubAlt />
                        </a>
                        <a href="#" title="Follow me on Twitter">
                            <FaTwitter />
                        </a>
                        <a href="#" title="Connect with me on Linkedin">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" title="Connect with me on Linkedin">
                            <FaRegBookmark />
                        </a>
                    </S.SocialBlock>
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </S.Content>
            </Section>
        </div>
    )
}

export const query = graphql`
    query Post($locale: String!, $title: String!) {
        markdownRemark(
            frontmatter: { title: { eq: $title } }
            fields: { locale: { eq: $locale } }
        ) {
            frontmatter {
                title
                author {
                    id
                    bio
                    twitter
                }
                description
                category
                background
                image
                date(formatString: "M D, Y")
                topics
            }
            fields {
                authorId
                slug
            }
            html
        }
    }
`

export default Post
