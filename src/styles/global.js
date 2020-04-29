import { createGlobalStyle } from 'styled-components';

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
    text-size-adjust: 100%;
    font-size: 100%;
    font-family: var(--base-font);
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
  }
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }

  a {
    color: ${({ theme }) => theme.ctaColor};
    transition: color .2s ease-out;
    &:hover {
      color: ${({ theme }) => theme.ctaLightColor};
    }
    &:active {
      color: ${({ theme }) => theme.ctaDarkColor};
    }
  }

  :root { 
    --base-extra-light: #fafafa;
    --base-light: #eeeeee;
    --base-medium-light: #e0e0e0;
    --base-medium: #919299;    
    --base: #333647;
    --base-medium-dark: #3D4054;
    --base-dark: #252733;

    --accent-color: #42a5f5;
    --accent-light-color: #64b5f6;
    --accent-dark-color: #1e88e5;
    --cta-color: #9b59b6;
    --cta-light-color: #80d6ff;
    --cta-dark-color: #0077c2;
  

    --width-container: 1400px;
    --headline-font: "Hind", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --base-font: "rasmus andersson", "Noto Sans", Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
  }
`;
export default GlobalStyles;
