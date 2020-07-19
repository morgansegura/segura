/* Defaults && Utils */
import React from 'react'
import { Link } from 'gatsby'

/* Components */
import Tags from '../Tags'

/* Styled Components */
import * as S from './styled'

const PostCard = props => {

  const post = props.node
  const authors = props.authors
  return (

    <S.BlogCard>
      <S.MediaBlock>
        {/*!!post.frontmatter.category &&
          <S.Category>
            <Link to="/">{post.frontmatter.category}</Link>
          </S.Category>
        */}
        <Link to={post.fields.slug}>
          {/*post.frontmatter.thumbnail && (
            <S.PostImage
              fluid={post.frontmatter.thumbnail.childImageSharp.fluid}
              alt={post.frontmatter.title}
            />
          )*/}
          <div className="mask"></div>
        </Link>
      </S.MediaBlock>
      <S.PostInfo>
        <S.PostDate>{post.frontmatter.date}</S.PostDate>
        <Link to={post.fields.slug}>
          <S.PostItemTitle>{post.frontmatter.title}</S.PostItemTitle>
        </Link>
      </S.PostInfo>
    </S.BlogCard>

  )
}

export default PostCard
