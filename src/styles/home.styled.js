import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const IndexContainer = styled.section`
  max-width: var(--width-container);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  ${customMedia.greaterThan('medium')`
    padding-left: 40px;
    padding-right: 40px;
  `}
`

export const IndexHeader = styled.header`
  margin-top: 40px;
`

export const IndexTitle = styled.h1`
  font-size: 40px;
`

export const IndexDescription = styled.p`
  font-size: 18px;
`

export const IndexImageWrapper = styled.div`
  h3 {
  }
`

export const IndexImage = styled(Img)``

export const IndexContent = styled.div`
  /* h1 {
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
  } */
`

export const IndexDate = styled.div``

export const IndexAuthor = styled.div``

export const IndexSocialBlock = styled.div``

export const IndexSocial = styled.div``

export const IndexFooter = styled.footer`
  position: relative;
`
export const IndexButtonWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  &.buttons {
    position: absolute;
    &--top {
      top: 0;
    }
    &--bottom {
      bottom: 0;
    }
  }
`
