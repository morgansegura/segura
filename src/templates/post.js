import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import Section from '../components/Section'

import * as S from '../components/Post/styled'
import { MdArrowForward, MdDateRange, MdTimelapse } from 'react-icons/md'
import {
    FaGithubAlt,
    FaTwitter,
    FaFacebookSquare,
    FaLinkedinIn,
    FaRegBookmark,
} from 'react-icons/fa'

const Post = props => {
    const post = props.data.markdownRemark
    const { title, description, date, author } = post.frontmatter

    return (
        <div style={{ width: '100%' }}>
            <SEO
                title={title}
                description={description}
                image={post.frontmatter.image}
            />
            <Section className="section">
                <S.Content>
                    <TitlePage text={title} />
                    <S.AuthorCard className="author-card">
                        <img
                            className="author-card__icon"
                            src={author.avatar}
                            alt="Author Morgan Segura"
                        />
                        <div className="author-card__meta">
                            <p className="author">{author.id}</p>
                            <p>
                                <span className="date">{date} &sdot; </span>
                                {'  '}
                                <span className="time-to-read">
                                    {props.data.timeToRead}min read
                                </span>
                            </p>
                        </div>
                    </S.AuthorCard>
                    <S.SocialBlock>
                        {author.github && (
                            <a href="#" title="Follow me on Github">
                                <FaGithubAlt />
                            </a>
                        )}
                        {author.twitter && (
                            <a href="#" title="Follow me on Twitter">
                                <FaTwitter />
                            </a>
                        )}
                        {author.linkedin && (
                            <a href="#" title="Connect with me on Linkedin">
                                <FaLinkedinIn />
                            </a>
                        )}
                        {author.facebook && (
                            <a href="#" title="Connect with me on Linkedin">
                                <FaFacebookSquare />
                            </a>
                        )}
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
                    avatar
                }

                description
                category
                background
                image
                date(formatString: "MM D, Y")
                topics
            }
            timeToRead
            fields {
                authorId
                slug
            }
            html
        }
    }
`

export default Post
