import React, { useState, Fragment } from 'react'
import _ from "lodash";
/* Components */
import Tags from '../Tags'
/* Utils */
import { truncateString } from '../../utils'
/* Styled Components */
import * as S from './styled'

const PostCard = props => {
  // useState Hook
  const [toggleImage, setToggleImage] = useState(false)
  const post = props.node
  const authors = props.authors
  return (
    <S.PostCard
      className={`post-card ${props.count % 3 === 0 && `post-card--large`} ${
        props.postClass
      } ${post.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    >
      <S.PostCardLink>
        <S.PostCardContent className="post-card-link">
          <S.PostCardHeader>
            <S.PostCardFlex className="flex-end">
              {!!authors && authors.map(({ node: author }) => (
              <S.PostCardAuthor to={`/author/${_.kebabCase(author.title)}`}>
              { author.title == post.frontmatter.author ? (
                <Fragment>
                  <S.PostCardAuthorImg fluid={author.avatar.childImageSharp.fluid}
                  alt={`${author.title}`} /> 
                  <p>{author.title}</p>
                </Fragment>
              ) : ''}
              </S.PostCardAuthor> 
              ))}
              <S.PostCardDate>{post.frontmatter.date}</S.PostCardDate>
              {post.frontmatter.thumbnail && (
                <S.PostCardImageButton
                  onClick={() => setToggleImage(!toggleImage)}
                >
                  View image
                </S.PostCardImageButton>
              )}
            </S.PostCardFlex>

            <S.PostCardTitle to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </S.PostCardTitle>
          </S.PostCardHeader>
          {post.frontmatter.thumbnail && (
            <S.PostCardImageWrapper
              to={post.fields.slug}
              className={`${toggleImage ? `show-image` : ``}`}
            >
              <S.PostCardImage
                fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
                alt={post.frontmatter.title}
              />
            </S.PostCardImageWrapper>
          )}
          <S.PostCardBody to={post.fields.slug}>
            <p>{truncateString(post.excerpt, 250, ' ...')}</p>
          </S.PostCardBody>

          <S.PostCardFooterWrapper>
            <S.PostCardFooter>
              <Tags tags={post.frontmatter.tags} />
            </S.PostCardFooter>
          </S.PostCardFooterWrapper>
        </S.PostCardContent>
      </S.PostCardLink>
    </S.PostCard>
  )
}

export default PostCard
