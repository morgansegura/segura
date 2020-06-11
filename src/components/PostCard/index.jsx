/* Defaults && Utils */
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
    <S.PostCardWrapper
      className={`post-card ${props.count % 3 === 0 && `post-card--large`} ${
        props.postClass
      } ${post.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    >
      <S.PostCardContainer>
        <S.PostCardContent className="post-card-link">
          {/* Card Header */}
          <S.PostCardHeader>
            <S.PostCardFlex className="flex-end">

              {/* Card Date */}
              <S.PostCardDate>{post.frontmatter.date}</S.PostCardDate>
            </S.PostCardFlex>

            {/* Card Title */}
            <S.PostCardTitle to={post.fields.slug}>
              <h2>{post.frontmatter.title}</h2>
            </S.PostCardTitle>
          </S.PostCardHeader> {/* [end] Card Header */}

          {/* Card Thumbnail */}
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

          {/* Card Body */}
          <S.PostCardBody to={post.fields.slug}>
            <p>{truncateString(post.excerpt, 250, ' ...')}</p>
              {/* Card Author */}
              {!!authors && authors.map(({ node: author }) => (
              <Fragment>
                { author.title == post.frontmatter.author ? (
                <S.PostCardAuthor to={`/author/${_.kebabCase(author.title)}`}>
                  <p>{author.title}</p>
                  <S.PostCardAuthorImg fluid={author.avatar.childImageSharp.fluid}
                  alt={`${author.title}`} /> 
                </S.PostCardAuthor> 
                ) : ''}
              </Fragment>
              ))}            
          </S.PostCardBody>

          <S.PostCardFooterWrapper>
            <S.PostCardFooter>
              {/* Card Tags */}
              {!!post.frontmatter.tags && (
                <Tags tags={post.frontmatter.tags} />
              )}
              {/* Card Image Toggle */}
              {!!post.frontmatter.thumbnail && (
                <S.PostCardImageButton
                  onClick={() => setToggleImage(!toggleImage)}
                >
                  {!toggleImage ? 'View image' : 'Hide image'}
                </S.PostCardImageButton>
              )}
{/* [end] Card Header */}
            </S.PostCardFooter> {/* [end] Footer */}
          </S.PostCardFooterWrapper> {/* [end] Footer Wrapper */}

        </S.PostCardContent> {/* [end] Content */}
      </S.PostCardContainer> {/* [end] Card Container */}
    {/* [end]  Card Wrapper */}
    </S.PostCardWrapper> 
  )
}

export default PostCard
