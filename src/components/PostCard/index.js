import React from 'react'
/* Components */
import Tags from '../Tags'
/* Utils */
import { truncateString } from '../../utils'
/* Styled Components */
import * as S from './styled'

const PostCard = props => (
  <S.PostCard
    className={`post-card ${props.count % 3 === 0 && `post-card--large`} ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
  >
    <S.PostCardLink to={props.node.fields.slug}>
      <S.PostCardContent className="post-card-link">
        <S.PostCardHeader>
          <S.PostCardTitle>{props.node.frontmatter.title}</S.PostCardTitle>
          <S.PostCardDate>{props.node.frontmatter.date}</S.PostCardDate>
        </S.PostCardHeader>
        <S.PostCardBody>
          {truncateString(props.node.excerpt, 250, ' ...')}
        </S.PostCardBody>

        {props.node.frontmatter.thumbnail && (
          <S.PostCardImageWrapper>
            <S.PostCardImage
              fluid={props.node.frontmatter.thumbnail.childImageSharp.fluid}
              alt={props.node.frontmatter.title}
            />
          </S.PostCardImageWrapper>
        )}
        <S.PostCardFooterWrapper>
          <S.PostCardFooter>
            <Tags tags={props.node.frontmatter.tags} />
          </S.PostCardFooter>
        </S.PostCardFooterWrapper>
      </S.PostCardContent>
    </S.PostCardLink>
  </S.PostCard>
)

export default PostCard
