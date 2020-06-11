import { createGlobalStyle } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
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
    color: ${({ theme }) => theme.textOnLight};
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

.container {
  position: relative;
  width: 100%;
  max-width: var(--width-container);
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  ${customMedia.greaterThan('large')`
      margin-left: var(--size);
      width: calc(100% - var(--size));
      padding-left: 40px;
      padding-right: 40px;
  `};
}

  a {
    color: ${({ theme }) => theme.actionOnLight};
    transition: color .2s ease-out;
    &:hover {
      color: ${({ theme }) => theme.actionOnLight1};
    }
    &:active {
      color: ${({ theme }) => theme.actionOnLight2};
    }
  }
  .relative {
    position: relative;
  }
  :root { 
    --size: 45px;
    --white: #fff;
    --light: #f9f9f9;
    --light-1: #f2f2f2;
    --light-2: #eeeeee;
    --light-3: #f9f9f9;

    --gray: #d1d1d1;
    --gray-1: #cccccc;
    --gray-2: #999999;
    --gray-3: #8b8b8b;
    --gray-4: #666666;    
 
    --blue-gray: #878c9f;
    --blue-gray-1: #63768d;
    --blue-gray-2: #323a45;
   
    --dark: #35353a;
    --dark-1: #2d2d32;
    --dark-2: #2a2a2e;
    --dark-3: #292929;
    --dark-4: #252425;
    --dark-5: #171717;
    --dark-6: #161720;

    --yellow: #ffb200;

    --accent-color: #5cdb95;
    --accent-light-color: #8ee4af;
    --accent-dark-color: #379683;

    --action-color: #2196F3;
    --action-light-color: #90CAF9;
    --action-dark-color: #1976D2;

    --width-container: 1400px;
    --headline-font: "Hind", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --serif-font: "Merriweather", serif;
    --base-font: "rasmus andersson", "Noto Sans", Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;

  ${customMedia.greaterThan('large')`
    --size: 80px;
  `};    
  }
`
export default GlobalStyles
