import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import useTranslations from '../useTranslations'

import * as S from './styled'

const PostItem = ({
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
    image,
}) => {
    const { toRead } = useTranslations()

    const { listImages } = useStaticQuery(
        graphql`
            query {
                listImages: allFile {
                    edges {
                        node {
                            childImageSharp {
                                fluid(maxWidth: 600, maxHeight: 350) {
                                    src
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const postImgCover = listImages.edges.find(img => {
        return img.node.childImageSharp.fluid.src.includes('cover')
    })

    const imgName = image ? image.split('/')[3] : false

    const postImg = imgName
        ? listImages.edges.find(img => {
              return img.node.childImageSharp.fluid.src.includes(imgName)
          })
        : false

    return (
        <S.PostItemLink to={slug}>
            <S.PostItemWrapper>
                {/*
                <S.PostItemCircle
                    style={{
                        backgroundImage: `url(${authorImage})`,
                    }}
                ></S.PostItemCircle>
                */}
                <S.PostItemInfo>
                    <S.PostItemTitle>{title}</S.PostItemTitle>
                    <S.PostItemDescription>{description}</S.PostItemDescription>
                </S.PostItemInfo>
                {postImg && (
                    <S.PostItemImgWrapper>
                        <S.PostItemTag background={background}>
                            {category}
                        </S.PostItemTag>
                        <S.PostItemImg
                            fluid={postImg.node.childImageSharp.fluid}
                            alt={title}
                        />
                    </S.PostItemImgWrapper>
                )}
                {!postImg && (
                    <S.PostItemImgWrapper>
                        <S.PostItemTag background={background}>
                            {console.log(category)}
                            {category}
                        </S.PostItemTag>
                        <S.PostItemImg
                            fluid={postImgCover.node.childImageSharp.fluid}
                            alt={title}
                        />
                    </S.PostItemImgWrapper>
                )}
                <S.PostItemFooter>
                    <S.PostItemFooterWrapper>
                        <S.PostItemDate>
                            {date} • {timeToRead} min {toRead}
                        </S.PostItemDate>
                    </S.PostItemFooterWrapper>
                </S.PostItemFooter>
            </S.PostItemWrapper>
        </S.PostItemLink>
    )
}

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default PostItem
