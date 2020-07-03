import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Heading = styled.div`
  &.heading {
    &.supertitle {
      position: relative;
      font-size: 0.75rem;
      font-weight: 500;
      display: inline-block;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.gray900};

      &-box {
        background-color: ${({ theme }) => theme.gray300};
        border-radius: 20px;
        padding: 0.35rem 0.5rem 0.25rem 0.5rem;
      }
      &-underline {
        border-bottom: 1px solid ${({ theme }) => theme.gray300};
        padding-bottom: 0.5rem;
      }
      &-outline {
        border: 2px solid ${({ theme }) => theme.gray400};
        border-radius: 20px;
        padding: 0.35rem 0.5rem 0.25rem 0.5rem;
      }
    }
    /* Label Block */
    &.label-box {
      position: relative;
      margin-left: -40px;
      margin-top: 20px;
      margin-bottom: 20px;
      display: inline-block;
      font-weight: 600;
      padding: 1rem 3rem 1rem 6rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.75);

      &:before,
      &:after {
        content: '';
        position: absolute;
      }
      &:before {
        width: 40px;
        height: 2px;
        top: 50%;
        left: 1.5rem;
        background-color: rgba(0, 0, 0, 0.75);
        transform: translateY(-50%);
      }
      &:after {
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.gray300};
        color: white;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
    }
  }
`

export const Headline = styled.div`
  &.h1 {
    font-family: var(--headline-font);
  }
  &.h2 {
    font-family: var(--headline-font);
  }
  &.h1 {
    font-size: 3.125rem;
    line-height: 1.125;
    font-weight: 500;
    margin-bottom: 1.125rem;
    color: ${({ theme }) => theme.gray900};
  }
  &.h2 {
    font-size: 2.25rem;
    line-height: 1.25;
    font-weight: 300;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.gray600};
  }
  &.h3 {
    font-size: 3.125rem;
    color: ${({ theme }) => theme.gray800};
  }
  &.h4 {
    font-size: 3.125rem;
    color: ${({ theme }) => theme.gray800};
  }
  &.h5 {
    font-size: 3.125rem;
    color: ${({ theme }) => theme.gray800};
  }
  &.h6 {
    font-size: 3.125rem;
    color: ${({ theme }) => theme.gray800};
  }
`

export const Break = styled.div`
  padding-top: 20px;
`
export const HorizontalRule = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);

  &.full-width {
    margin-left: -40px;
    margin-right: -40px;
  }
`

export const Paragraph = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.gray800};
  padding-bottom: 20px;

  &::last-of-type {
    padding-bottom: 0;
  }
`
export const Caption = styled.h1``

export const BlockQuote = styled.div``

export const Italic = styled.i``
