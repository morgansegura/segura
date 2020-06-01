import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const BlogContainer = styled.article`
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
`

export const BlogHeader = styled.header`
  margin-top: 40px;
`

export const BlogTitle = styled.h1`
  font-size: 40px;
`

export const BlogDescription = styled.p`
  font-size: 18px;
`

export const BlogImageWrapper = styled.div`
  h3 {
    color: offset;
  }
`

export const BlogImage = styled(Img)``

export const BlogContent = styled.div`
  h1 {
    font-size: 40px;
    line-height: 60px;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 21px;
    font-weight: 600;
    line-height: 1.18;
    letter-spacing: -0.022em;
    margin-top: 1.23em;
    margin-bottom: -0.31em;
  }
  h3 {
    font-size: 30px;
    line-height: 45px;
  }
  h4 {
    font-size: 25px;
    line-height: 40px;
  }
  h5 {
    font-size: 20px;
    line-height: 35px;
  }
  h6 {
    font-size: 18px;
    line-height: 27px;
  }
  p {
    font-weight: 300;
    letter-spacing: -0.003em;
    font-family: var(--serif-font);
    margin-bottom: -0.46em;
    margin-top: 1.23em;
    font-size: 16px;
    line-height: 32px;

    ${customMedia.greaterThan('medium')`
        font-size: 18px;
        line-height: 36px;
    `}
  }
  img,
  pre {
    margin-top: 40px;
  }
  ul {
    padding: 1.5rem 0;
    li {
      &:before {
        content: '•';
        padding-right: 0.5rem;
        color: blue;
      }
    }
  }
`

export const BlogDate = styled.div``

export const BlogAuthor = styled.div``

export const BlogSocialBlock = styled.div``

export const BlogSocial = styled.div``

export const BlogFooter = styled.footer``
