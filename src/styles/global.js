import { createGlobalStyle } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    xsmall: '250px',
    small: '450px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
    huge: '1400px',
})

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {}
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.bgBody};
    font-weight: 500;
    color: ${({ theme }) => theme.text};

    -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
    font-size: 100%;
    line-height: 1.25rem;
    font-family: var(--base-font);

    ${customMedia.greaterThan('medium')`
        font-size: 14px;
        line-height: 24px;
    `}
  }
  * {
    outline: none !important;
  }
    h1,
    .h1,
    h2,
    .h2,
    h3,
    .h3,
    h4,
    .h4,
    h5,.h5,
    h6,.h6,
    .headline {
      font-family: var(--headline-font);
      font-weight: 500;
      color: ${({ theme }) => theme.headline};
  }
 
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }

  a {
    color: ${({ theme }) => theme.primaryColor};
    transition: color .2s ease-out;
    &:hover {
      color: ${({ theme }) => theme.primaryLightColor};
    }
    &:active {
      color: ${({ theme }) => theme.primaryDarkColor};
    }
  }
  .href {    
    position: relative;
    color: ${({ theme }) => theme.primaryColor};
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-top: 20px;

    .icon-left {
      padding-right: 0.25rem;
    }
    .icon-right {
      padding-left: 0.25rem;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryLightColor};
      text-decoration: none;

    &.underline {
      &:before {
          background-color: ${({ theme }) => theme.primaryLightColor};
        } 
      }     
    }

    &--large {
      font-size: 24px;
      line-height: 1.7;      
    }

    &.underline {
      position: relative;

      &:before {
        content: "";
        width: 90%;
        height: 3px;
        position: absolute;
        border-radius: 6px;
        bottom: -3px;
        left: -3px;
        height: 3px;
        background-color: ${({ theme }) => theme.primaryColor};
      }      
    }

  }
  .section {
    padding: 50px 20px;

    ${customMedia.greaterThan('small')`
      padding: 100px 80px;
    `}

    &.border-bottom {
        border-bottom: 1px solid ${({ theme }) => theme.outlines};
    }    
  }
  .bg-gradient {

    border-bottom: 1px solid ${({ theme }) => theme.bgBodyLight};
  }
  .bg-dark {
    background-color: ${({ theme }) => theme.bgBodyDark};
  }
  .bg-color {
    background-color: ${({ theme }) => theme.primaryColor};
  }

  .buffer {

    &-x {
      margin-left: 30px;
      margin-right: 30px;
      
      ${customMedia.greaterThan('medium')`
          margin-left: 40px;
          margin-right: 40px;
      `}        
    }
    &-y {
      margin-top: 30px !important;
      margin-bottom: 30px !important;

      ${customMedia.greaterThan('medium')`
        margin-top: 40px !important;
        margin-bottom: 40px !important;
      `}        
    }
    &-top {
      margin-top: 30px !important;
      ${customMedia.greaterThan('medium')`
          margin-bottom: 30px !important
      `}        
    }
    &-right {
      margin-right: 30px;
      ${customMedia.greaterThan('medium')`
          margin-right: 40px;
      `}        
    }
    &-bottom {
      margin-bottom: 30px;
      ${customMedia.greaterThan('medium')`
          margin-bottom: 40px;
      `}  
    }
    &-left {
      margin-left: 30px;
      ${customMedia.greaterThan('medium')`
          margin-left: 40px;
      `}  
    }
  }

    .tab-bottom {
      padding-bottom: 0.5rem;
      border-bottom: 5px solid ${({ theme }) => theme.outlines};
      margin-bottom: 50px;

      ${customMedia.greaterThan('medium')`      
          margin-bottom: 80px;
      `}  
    }


  /* Services */

  .square-card {
    display: flex;
    height: 100%;
    flex: 1;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgBodyLight};
    padding: 10px 0 10px 15px;
    transition: background-color 0.3s ease-out;
    
    ${customMedia.greaterThan('large')`
        padding: 1.25rem 0 1.25rem 1.5rem;
    `}    

    &:hover {
      h4 {
        color: white !important;
      }
      background-color: ${({ theme }) => theme.primaryColor};  
    }
    &:active {
      color: white !important;
      background-color: ${({ theme }) => theme.primaryDarkColor};  
    }
    &--inner {
      flex: 1;
    } 
  }
    [data-reach-tab][data-selected] {
      color: white;
      background-color: ${({ theme }) => theme.primaryColor};
    }     
  .bg-highlight {
    background-color: ${({ theme }) => theme.primaryColor};
  }
  .push-down {
    position: relative;
    top: 4px;
  }
  .no-underline {
    text-decoration: none;
  }

  :root { 
    --base-extra-light: #fafafa;
    --base-light: #eeeeee;
    --base-medium-light: #e0e0e0;
    --base-medium: #919299;    
    --base: #333647;
    --base-medium-dark: #3D4054;
    --base-dark: #252733;

    --primary-color: #42a5f5;
    --primary-light-color: #64b5f6;
    --primary-dark-color: #1e88e5;
    --secondary-color: #9b59b6;
    --secondary-light-color: #80d6ff;
    --secondary-dark-color: #0077c2;
    -cta-color: #ff1744;

    --width-container: 1352px;
    --headline-font: "Hind", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --base-font: "rasmus andersson", "Noto Sans", Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;

    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;

  }
`
export default GlobalStyles
