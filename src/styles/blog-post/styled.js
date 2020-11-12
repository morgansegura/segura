import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const ContentBody = styled.section`
  max-width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgBlock1};

  /* ${customMedia.greaterThan('large')`
    padding: 2rem;
  `}
   */
  h1, h2, h3, h4, h5, h6 { 
    display: flex;
    align-items: center;
    font-weight: 600;
    color: ${({ theme }) => theme.textHeadlineHero};

    a {
      display: none;
    }
  }
  h1, h2 {
    line-height: 1.1;
  }
  h1, h2 {
    font-family: var(--headline-font);
  }
  h3, h4, h5, h6 {
    line-height: 1.2;
  }
  p, li, caption {
    line-height: 1.8;
  }
  h3, h4, h5, h6, p, li, caption {
    font-family: var(--sans-font);
  }
  h2, h3, h4, h5, h6 {
    margin-bottom: 0.75rem;
  }
  ul, ol, p {
    margin-bottom: 1.25rem;
    color: ${({ theme }) => theme.textHero};
    font-size: ${({ theme }) => theme.textBase};
  }
  h2 {
    font-size: ${({ theme }) => theme.text4XL};
  }
  h3 {
    font-size: ${({ theme }) => theme.text3XL};
  }
  h4 {
    font-size: ${({ theme }) => theme.text2XL};
  }
  h5 {
    font-size: ${({ theme }) => theme.textXL};
  }
  h6 {
    font-size: ${({ theme }) => theme.textXL};
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.bgButton};

    svg {
      fill: ${({ theme }) => theme.bgButtonHover};
    }
  }
  ul, ol {
    margin-left: 2rem;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  /* Code */
  .gatsby-highlight {
    display: flex;
    max-width: 100%;
    margin-bottom: 1.25rem;
  }
  code[class*=language-],
  pre[class*=language-] {
      color: ${({ theme }) => theme.codeFontColor};
      background: 0 0;
      text-shadow: 0 1px rgba(0, 0, 0, .3);
      font-family: ${({ theme }) => theme.codeFontFamily};
      font-size: ${({ theme }) => theme.paragraph};
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;
      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;
      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none
  }

  pre[class*=language-] {
      padding: 1em;
      margin: .5em 0;
      overflow: auto;
      border-radius: .3em
  }

  :not(pre)>code[class*=language-],
  code[class*=language-],
  pre[class*=language-] {
      width: 100%;
      background:  ${({ theme }) => theme.codeBackground};
  }


  :not(pre)>code[class*=language-] {
      padding: .1em;
      border-radius: .3em;
      white-space: normal
  }

  .token.cdata,
  .token.comment,
  .token.doctype,
  .token.prolog {
      color: ${({ theme }) => theme.codeTokenCData};
  }

  .token.punctuation {
      color: ${({ theme }) => theme.codeTokenPunctuation};
  }

  .token.namespace {
      opacity: .7
  }

  .token.constant,
  .token.deleted,
  .token.property,
  .token.symbol,
  .token.tag {
      color: ${({ theme }) => theme.codeTokenConstant};
  }

  .token.boolean,
  .token.number {
      color: ${({ theme }) => theme.codeTokenBoolean};
  }

  .token.attr-name,
  .token.builtin,
  .token.char,
  .token.inserted,
  .token.selector,
  .token.string {
      color: ${({ theme }) => theme.codeTokenAttrName};
  }

  .language-css .token.string,
  .style .token.string,
  .token.entity,
  .token.operator,
  .token.url,
  .token.variable {
      color: ${({ theme }) => theme.codeTokenLanguage};
  }

  .token.atrule,
  .token.attr-value,
  .token.class-name,
  .token.function {
      color: ${({ theme }) => theme.codeTokenAtRule};
  }

  .token.keyword {
      color: ${({ theme }) => theme.codeTokenKeyword};
  }

  .token.important,
  .token.regex {
      color: ${({ theme }) => theme.codeTokenRegex};
  }

  .token.bold,
  .token.important {
      font-weight: 700
  }

  .token.italic {
      font-style: italic
  }

  .token.entity {
      cursor: help
  }
  /* Code */

`
export const Toolkit = styled.div`
  background-color: ${({ theme }) => theme.bgBlock2};
  color: ${({ theme }) => theme.textBlock2};

  .link {
    color: ${({ theme }) => theme.bgButton};

    &:hover {
      color: ${({ theme }) => theme.bgButtonHOver};
      text-decoration: underline;
    }
  }

  .font-sizes .button {
    cursor: pointer;
    background-color: ${({ theme }) => theme.bgButton};
    color: ${({ theme }) => theme.textButton};
    transition: all 0.3s ease-out;

    &:hover {
      background-color: ${({ theme }) => theme.bgButtonHover};
      color: ${({ theme }) => theme.textButtonHOver};
    }

    &.active {
      cursor: text;
      background-color: ${({ theme }) => theme.bgButtonDisabled};
      &:hover {
        background-color: ${({ theme }) => theme.bgButtonDisabled};
      }
    }
  }
`
export const ToTop = styled.div`

  ${customMedia.greaterThan('medium')`
    
  `}
`
export const Footer = styled.footer`

  ${customMedia.greaterThan('medium')`
    
  `}
`

