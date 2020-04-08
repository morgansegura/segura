import { createGlobalStyle } from 'styled-components'
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  xsmall: "250px",
  small: "450px",
  medium: "768px",
  large: "1024px",
  xlarge: "1200px",
  huge: "1400px"
});

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
    background: ${({ theme }) => theme.body};
    font-weight: 400;
    color: var(--gray);
    -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
    font-size: 14px;
    line-height: 1.25rem;
    font-family: var(--base-font);

    ${customMedia.greaterThan('medium')`
        font-size: 14px;
        line-height: 24px;
    `}
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
    .headline,
    .section-title,
    .subline {
      font-family: var(--headline-font);
      font-weight: 600;
      letter-spacing: 0px;
      color: ${({ theme }) => theme.text};
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
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-top: 1rem;

    ${customMedia.greaterThan('medium')`
      margin-top: 1rem;
    `}

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
      letter-spacing: 1px;
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
  
  .bg-dark {
    background-color: ${({ theme }) => theme.sectionDarker};
  }
  .buffer-y {
    padding-top: 50px;
    padding-bottom: 50px;
    ${customMedia.greaterThan('medium')`
      padding-top: 100px;
      padding-bottom: 100px;
    `}    
  }
  .buffer-top {
    padding-top: 100px;
  }
  .buffer-bottom {
    padding-bottom: 100px;
  }

  /* Services */
  .square-card {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #424659;
    padding: 40px 40px 10px;
    transition: background-color 0.3s ease-out;
    
    ${customMedia.greaterThan('large')`
        
    `}    

    &:hover {
      background-color: ${({ theme }) => theme.primaryColor};  
    }

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
    --gray-extra-light: #ebebec; 
    --gray-light: #b1b1b6;
    --gray-medium: #94959c;
    --gray-medium-dark: #424659;
    --gray: #333647;
    --gray-dark: #252735;

    --primary-color: #ff1744;
    --primary-light-color: #ff616f;
    --primary-dark-color: #c4001d;
    --secondary-color: #42a5f5;
    --secondary-light-color: #80d6ff;
    --secondary-dark-color: #0077c2;
    --tertiary-color: #ffc400;

    --body-bg: var(--gray); 

    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);

    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    
    --link-color: ${({ theme }) => theme.primaryColor};
    --link-color-hover: var(--tertiary-color);

    --text-color: var(--gray);
    --text-light:var(--gray-light);
    --text-dark: var(--gray-dark);

    --width-container: 1352px;
    --headline-font: "Montserrat", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --base-font: "Roboto", Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;

    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;

  }
`
export default GlobalStyles
