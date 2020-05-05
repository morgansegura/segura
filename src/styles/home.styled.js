import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

import shapesLeft from '../../public/assets/images/shapes-left.svg'
import shapesRight from '../../public/assets/images/shapes-right.svg'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Container = styled.div`
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

export const Header = styled.header`
  margin-top: 40px;
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

export const Background = styled.div`
  background-size: 100%;
  align-items: center;
  justify-content: center;

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
      background-image: url(${shapesLeft});
    }
    &:after {
      left: 0;
      bottom: 0;
      background-attachment: fixed;
      background-image: url(${shapesRight});
    }
  }
  h2 {
    position: relative;
    z-index: 2;
    font-size: 80px;
  }
`