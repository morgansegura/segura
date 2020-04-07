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
    background: var(--body-bg);
    font-weight: 400;
    color: var(--gray);
    -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    font-family: Roboto, Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
    line-height: 160%;

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
    h5,
    .h5,
    h6,
    .h6,
    .headline,
    .subline,
     .section-title {
        font-family: var(--headline-font);
        font-weight: 600;
        letter-spacing: 0px;
    }
    .text__on-dark {
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
        .subline,
        p,
        .paragraph {
            color: var(--gray-extra-light);
        }
    }
    .text__on-light {
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
        .subline,
        p,
        .paragraph {
            color: var(--gray-dark);
        }
    }  
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }

  a {
    color: var(--primaryColor)
  }
  .href {    
    position: relative;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    margin-top: 1rem;

    ${customMedia.greaterThan('medium')`
      margin-top: 2rem;
    `}

    .icon-left {
      padding-right: 0.25rem;
    }
    .icon-right {
      padding-left: 0.25rem;
    }

    &:hover {
      color: var(--primary-light-color);
      text-decoration: none;

    &.underline {
      &:before {
          background-color: var(--primary-light-color);
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
        background-color: var(--primary-color);
      }      
    }

  }
  
  .bg-dark {
    background-color: var(--gray-dark);
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



  /* Light Dark */
  .light-theme {

    .social-block {
        display: flex;
        justify-content: flex-start;
        a {
            color: var(--secondary-color);
            &:hover {
                color: var(--secondary-light-color);
            }
        }  
    }

  }

  :root { 
    --gray-extra-light: #ebebec; 
    --gray-light: #b1b1b6;
    --gray-medium: #94959c;
    --gray: #333647;
    --gray-dark: #252735;

    --primary-color: #42a5f5;
    --primary-light-color: #80d6ff;
    --primary-dark-color: #0077c2;
    --secondary-color: #ff1744;
    --secondary-light-color: #ff616f;
    --secondary-dark-color: #c4001d;
    --tertiary-color: #ffc400;

    --body-bg: var(--gray); 

    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);

    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    
    --link-color: var(--primary-color);
    --link-color-hover: var(--tertiary-color);

    --text-color: var(--gray);
    --text-light:var(--gray-light);
    --text-dark: var(--gray-dark);

    --width-container: 1352px;
    --base-font: Roboto, Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
    --headline-font: "Montserrat", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --base-font: Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;

    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;

  }
`
export default GlobalStyles
