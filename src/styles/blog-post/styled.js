import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})


    // ${customMedia.greaterThan('large')`
    //
    // `};
// ${({ theme }) => theme.panelOffset};


export const Body = styled.div`
  max-width: 100%;
  overflow: hidden;
  
  h1, h2, h3, h4, h5, h6 {    
    a {
      color: ${({ theme }) => theme.headingOne};
    }
  }
  h1 {
    font-size: ${({ theme }) => theme.text3XL};
  }
  h2 {
    font-size: ${({ theme }) => theme.headingTwo};
  }
  h3 {
    font-size: ${({ theme }) => theme.headingThree};
  }
  h4 {
    font-size: ${({ theme }) => theme.headingFour};
  }
  h5 {
    font-size: ${({ theme }) => theme.headingFive};
  }
  h6 {
    font-size: ${({ theme }) => theme.headingSix};
  }
  p {
    font-size: ${({ theme }) => theme.paragraph};
    font-family: var(--base-font);
    font-weight: 400;
    line-height: 1.8;
    letter-spacing: 0.0125rem;
    margin-bottom: 1.25rem;
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.accentSecondary};

    svg {
      fill: ${({ theme }) => theme.accentSecondary};
    }
  }

  /* Code */
  .gatsby-highlight {
    display: flex;
    max-width: 100%;
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

  ${customMedia.greaterThan('large')`
    padding: 2rem;
  `}
`
export const Footer = styled.footer`

  ${customMedia.greaterThan('medium')`
    
  `}
`

