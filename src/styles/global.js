import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

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
    color: #757575;
    -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
    font-size: 12px;
    line-height: 18px;
    font-weight: 400;
    font-family: Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
    line-height: 160%;

    ${media.greaterThan('medium')`
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
        font-family: var(--google-font);
        font-weight: 500;
        margin-top: 0;
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
            color: #fff;
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
        h5,
        .h5,
        h6,
        .h6,
        .headline,
        .subline,
        .section-title {
            color: #424242;
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

  :root { 
    --gray-extra-light: #eaeaea; 
    --gray-light: #747d8d;  
    --gray: #475060;
    --gray-dark: #2e333e;

    --primary-color: #673ab7;
    --primary-light-color: #9a67ea;
    --primary-dark-color: #320b86;
    --secondary-color: #fdd835;
    --secondary-light-color: #ffff6b;
    --secondary-dark-color: #c6a700;
    --thirdy-color: #179be5;

    --body-bg: #fafafa; 

    --bg-light: var(--gray-extra-light);
    --bg-dark: var(--gray-dark);

    --border-light: var(--gray-light);
    --border-dark: var(--gray-dark);
    
    --link-color: var(--primary-color);
    --link-color-hover: var(--thirdy-color);

    --text-color: var(--gray);
    --text-light:var(--gray-light);
    --text-dark: var(--gray-dark);

    --width-container: 1040px;
    --google-font: "Google Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --base-font: Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;

    --space: 2rem;
    --space-sm: 1rem;
    --space-lg: 3rem;

  }
`
export default GlobalStyles
