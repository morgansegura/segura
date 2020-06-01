import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

// import shapesLeft from '../../public/assets/images/shapes-left.svg'
// import shapesRight from '../../public/assets/images/shapes-right.svg'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Container = styled.div``

export const Header = styled.header`
  padding-top: 90px;
  padding-bottom: 40px;

  h2 {
    width: 100%;
    position: relative;
    padding: 0.5rem 0 0.5rem 90px;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #8b8b8b;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 50px;
      height: 2px;
      margin-top: -1px;
      background: ${({ theme }) => theme.accentColor};
    }
    &:after {
      content: '';
      position: absolute;
      top: -15px;
      left: -20px;
      right: 0;
      bottom: -15px;
      width: 105%;
      background: ${({ theme }) => theme.opaqueLight041};

      ${customMedia.greaterThan('large')`
        top: -15px;
        left: -40px;
        bottom: -15px;
        width: 30%;
    `};
    }
  }
`

export const Title = styled.h1`
  font-size: 40px;
`

export const Description = styled.p`
  font-size: 18px;
`

export const ImageWrapper = styled.div`
  h3 {
  }
`

export const Image = styled(Img)``

export const Content = styled.div`
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

export const Date = styled.div``

export const Author = styled.div``

export const SocialBlock = styled.div``

export const Social = styled.div``

export const Footer = styled.footer`
  position: relative;
  padding-bottom: 90px;
`
export const ButtonWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  &.buttons {
    &--top {
      top: 0;
      position: absolute;
    }
    &--bottom {
      bottom: 0;
      position: absolute;
    }
  }
`
export const ContentHero = styled.div`
  margin-bottom: 40px;

  h3 {
    font-size: 40px;
    font-weight: 600;
    font-family: var(--headline-font);
    color: ${({ theme }) => theme.opaqueLight91};

    span {
      color: ${({ theme }) => theme.accentColor};
    }
  }
`
export const ContentLeft = styled.div`
  position: relative;
  height: 100%;
  text-align: left;

  &.bg-image {
  }
  &.bg-image {
    &:after {
      position: absolute;
      width: 100%;
      height: 100%;
      left: -40px;
    }
  }
`
export const ContentRight = styled.div`
  text-align: right;
`

export const Background = styled.div`
  background-size: 100%;

  &.quarter-height,
  .quarter-height {
    height: 25vh;
  }
  &.half-height,
  .half-height {
    height: 50vh;
  }
  &.three-quarter-height,
  .three-quarter-height {
    height: 75vh;
  }
  &.full-height,
  .full-height {
    height: 100vh;
  }
  &.bg-shapes {
    display: flex;
    position: relative;
    z-index: 1;

    &:before,
    &:after {
      content: '';
      z-index: -1;
      position: absolute;
      background-repeat: no-repeat;
    }

    &:before {
      left: 0;
      top: 0;
      background-attachment: fixed;
      transform: translate(-20%, -35%);
    }
    &:after {
      left: 0;
      bottom: 0;
      background-attachment: fixed;
    }
  }
  ${customMedia.greaterThan('large')`
    width: calc(100% - var(--size));
    margin-left: var(--size);
  `};
`

export const MasonryLayout = styled.div`
  display: flex;
  flex-flow: column wrap;

  &:before,
  &:after {
    content: '';
    flex-basis: 100%;
    width: 0;
    order: 2;
  }
`
export const MasonryLayoutItem = styled.div`
  &:nth-child(3n + 1) {
    order: 1;
    border: 1px solid yellow;
  }
  &:nth-child(3n + 2) {
    order: 2;
  }
  &:nth-child(3n) {
    order: 3;
  }
`
