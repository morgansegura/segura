import { createGlobalStyle } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})
const GlobalStyles = createGlobalStyle`

  @import url('https://use.typekit.net/oji6pho.css');

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
  html, body {
    background-color: ${({ theme }) => theme.gray50};
  }
  body {    
    font-weight: 500;
    color: ${({ theme }) => theme.textOnLight};
    text-size-adjust: 100%;
    font-size: 100%;
    font-family: var(--base-font);
  }

  * {
    outline: none !important;
  }
  img {
    display: block;
  	max-width: 100%;
  	height: auto;
  }
  b {
    font-weight: 700;
  }
  strong {
    font-weight: 800;
  }
  br {
    height: 20px;
  }
  a {
    color: ${({ theme }) => theme.action};
    transition: color .2s ease-out;
    &:hover {
      color: ${({ theme }) => theme.actionLight};
    }
    &:active {
      color: ${({ theme }) => theme.actionDark};
    }
  }
  .relative {
    position: relative;
  }
  .accent1 {
    &--bg {
      background-color: var(--accent1) !important;
    }
    &--border {
      border-color: var(--accent1) !important;
    }
    &--border-bottom {
      border-bottom-color: var(--accent1) !important;
    }
    &--border-top {
      border-top-color: var(--accent1) !important;
    }
    &--left {
      border-left-color: var(--accent1) !important;
    }
    &--color {
      color: var(--accent1) !important;
    }
    &--fill {
      fill: var(--accent1) !important;
    }
    &--stroke {
      stroke: var(--accent1) !important;
    }
  }
  .accent2 {
    &--bg {
      background-color: var(--accent2) !important;
    }
    &--border {
      border-color: var(--accent2) !important;
    }
    &--border-bottom {
      border-bottom-color: var(--accent2) !important;
    }
    &--border-top {
      border-top-color: var(--accent2) !important;
    }
    &--border-left {
      border-left-color: var(--accent2) !important;
    }
    &--color {
      color: var(--accent2) !important;
    }
    &--stroke {
      stroke: var(--accent2) !important;
    }
    &--fill {
      fill: var(--accent2) !important;
    }
  }
  .accent3 {
    &--bg {
      background-color: var(--accent3) !important;
    }
    &--border {
      border-color: var(--accent3) !important;
    }
    &--border-bottom {
      border-bottom-color: var(--accent3) !important;
    }
    &--border-top {
      border-top-color: var(--accent3) !important;
    }
    &--left {
      border-left-color: var(--accent3) !important;
    }
    &--color {
      color: var(--accent3) !important;
    }
    &--fill {
      fill: var(--accent3) !important;
    }
    &--stroke {
      stroke: var(--accent3) !important;
    }
  }
  
  :root { 
    --size: 45px;
    --white: #fff;
    --black: #000;

    --gray-50: #FAFAFA;
    --gray-100: #F5F5F5;
    --gray-200: #EEEEEE;
    --gray-300: #E0E0E0;
    --gray-400: #BDBDBD;    
    --gray-500: #9E9E9E;    
    --gray-600: #757575;    
    --gray-700: #616161;    
    --gray-800: #424242;    
    --gray-900: #212121;    

    --blue-gray-50: #ECEFF1;
    --blue-gray-100: #CFD8DC;
    --blue-gray-200: #B0BEC5;
    --blue-gray-300: #90A4AE;
    --blue-gray-400: #78909C;    
    --blue-gray-500: #607D8B;    
    --blue-gray-600: #546E7A;    
    --blue-gray-700: #455A64;    
    --blue-gray-800: #37474F;    
    --blue-gray-900: #263238;

    --yellow: #ffb200;
    
    --accent1: #e602e6;
    --accent2: #0399dc;
    --accent3: #16c79b;

    --width-container: 1400px;

    --headline-font: "usual", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --alt-font: 'aglet-slab', cursive;

    --base-font: "frank-new", Roboto, "rasmus andersson", "Noto Sans", Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;

  ${customMedia.greaterThan('large')`
    --size: 80px;
  `};    
  }
`
// Magenta https://www.color-hex.com/color-palette/31535

export default GlobalStyles
