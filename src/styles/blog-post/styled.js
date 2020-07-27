import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const BioImageContainer = styled.div`
  min-height: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${customMedia.greaterThan('large')`
    flex: 0 0 50%;
    max-width: 50%;
  `};
`
export const BlogWrapper = styled.div`
  width: 100%;
  transition: width 0.2s ease-in;


   ${customMedia.greaterThan('large')`
      &.toolbar--open {
        width: calc(100% - 300px)
      }
  `}; 

`
export const BioImage = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${customMedia.greaterThan('large')`
       
  `};
`
export const BioContent = styled.div`
  position: relative;
  padding: 30px 30px 50px;
  flex: 0 0 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.panelOffset};
  height: 100%;
  min-height: 100px;
  transition: relative 0.3s ease-out;

  button {
    flex: 1 0 auto;
  }
  .category {
    position: relative;
    opacity: 1;   
  }  
  h2 {
    position: relative;
    height: 100%;
    font-family: var(--headline-font);
    font-size: 36px;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.textHeadline};
    transition: height 0.1s ease-out;

    ${customMedia.greaterThan('large')`
      font-size: 48px;    
  `};
  }
  span {
    color: ${({ theme }) => theme.textOffset1};
    font-weight: 300;
  }
  p {
    position: relative;
    opacity: 1;
    height: 100%;
    font-size: 14px;
    margin: 0 0 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.85em;
    transition: height 0.3s ease-out;

  }

  ${customMedia.greaterThan('large')`
    padding: 70px 8%;
    flex: 0 0 50%;
    max-width: 50%;
     
  `};
`

export const ContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .card--hidden & {
    position: absolute;
    width: calc(100% - 4rem);
    z-index: 2;
  } 
  ${customMedia.greaterThan('large')`

  `}
`
export const BlogHeader = styled.header`
  
  padding: 2rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.125rem;
  }
  h2 {
    font-size: 1.25rem;
  }


  ${customMedia.greaterThan('large')`

  `}
`
export const BlogMeta = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 3px;

  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorDisplay = styled.div`
  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorAvatar = styled(Img)`
  width: 80px;
  border-radius: 100%;
  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorMeta = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.panelOffset};
  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorBio = styled.div`

  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorExcerpt = styled.div`

  ${customMedia.greaterThan('large')`

  `}
`
export const TagsList = styled.div`
  position: relative;
  height: 100%;
  transition: height 0.1s ease-out;

  ${customMedia.greaterThan('large')`

  `}
`
export const Social = styled.div`

  ${customMedia.greaterThan('large')`

  `}
`

export const BlogBody = styled.div`
  max-width: 100%;
  overflow: hidden;
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: ${({ theme }) => theme.headingOne};
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
    font-family: var(--serif-font);
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: 1.25rem;
  }

  a {
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
export const BlogFooter = styled.footer`

  ${customMedia.greaterThan('medium')`
    
  `}
`
export const ToolbarBlock = styled.div`
  position: relative;
  border: solid ${({ theme }) => theme.textHeadline};
  border-width: 1px;
  border-radius: 3px;
  padding: 0.25rem 0.35rem;
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;

`
export const ToTopButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;  
  font-size: 20px;
  padding-bottom: 10px;
  display: none;
  opacity: 0.5;
  color: ${({ theme }) => theme.textHeadline};
  transform: opacity 0.3s ease-out;
  
  
  &:hover {
    opacity: 1;
  }

  &.show {
    display: flex;
  }
`
export const ToolbarButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;  
  font-size: 20px;
  opacity: 0.5;
  color: ${({ theme }) => theme.textHeadline};
  transform: opacity 0.3s ease-out;
  
  &:hover {
    opacity: 1;
  }  
`
export const CloseToolbar = styled.button`
  position: absolute;
  border-radius: 3px;
  padding: 0.25rem 0.5rem;
  /* width: 30px;
  height: 30px; */
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  bottom: 1.25rem;
  font-size: 0.75rem;
  right: 1rem;
  border: none;
  opacity: 0.3;
  color: ${({ theme }) => theme.textHeadline};
  border: 1px solid ${({ theme }) => theme.textHeadline};
  transition: opacity 0.3s ease-out, scale 0.3s ease-out;

  &:hover {
    opacity: 1;
    translate: scale(1.1);
  }

  ${customMedia.greaterThan('large')`
    right: 1.25rem;
  `}  
`
export const AsideToolbar = styled.aside`
  position: fixed;
  z-index: 1;
  right: -100%;
  top: 0;
  height: 100vh;
  padding: 6rem 1.5rem;
  max-width: 300px;
  background-color: ${({ theme }) => theme.panelBody};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.3);
  transition: right 0.2s ease-out;

  .toolbar--open & {
    right: 0;
    /* transition: right 0.3s ease-in; */
  }

  ${customMedia.greaterThan('large')`
    box-shadow: 0 0 20px 10px rgba(0,0,0,0);
  `}
`
export const ToolbarSection = styled.div`
    display: flex;
    flex-direction: column;

    a {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.accentSecondary};
      font-weight: 500;
      text-decoration: none;
      padding-left: 0.5rem;

      .anchor-title {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.accentSecondary};
      }
      .anchor-body {
        color: ${({ theme }) => theme.textBody};
      }
      &:hover {
        .anchor-title {
          text-decoration: underline;
        }        
      }
    }

    .title {
      font-size: 0.875rem;
      font-weight: normal;
      font-family: var(--headline-font);
      color: ${({ theme }) => theme.textBody};
      padding-bottom: 0.25rem;

    }

    margin-bottom: 1rem;

    ${customMedia.greaterThan('large')`

    `}
`
