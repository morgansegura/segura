import {createGlobalStyle} from 'styled-components'
import {generateMedia} from 'styled-media-query'

const customMedia = generateMedia({
    small: '480px',
    medium: '768px',
    large: '1024px',
    huge: '1400px',
})
const GlobalStyles = createGlobalStyle`

  /* @import url('https://use.typekit.net/oji6pho.css'); */

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
    background-color: ${({theme}) => theme.bgBody};
  }
  body {    
    font-weight: 600;
    color: ${({theme}) => theme.textBody};
    text-size-adjust: 100%;
    font-size: 100%;
    font-family: var(--sans-font);
    font-size: 1rem;
    font-weight: 400;
    font-style: normal;
    line-height: 1.85em;    
  }

  body::-webkit-scrollbar {
    position: absolute;
    width: 0.5rem;
    margin-left: -8px;
  }
  
  body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.scrollBar};
    outline: 1px solid slategrey;
    cursor: pointer;
    transition: all 0.3s ease-out;
    
    &:hover {
        background-color: ${({theme}) => theme.scrollBarHover};
    }    
    &:active {
        background-color: ${({theme}) => theme.bgButton};
    }
  }

  :root { 
    /* Light && Dark Theme */
    --gray-50: #FAFAFA;    
    --gray-100: #F5F5F5;    
    --gray-200: #EEEEEE;    
    --gray-300: #E0E0E0;    
    --gray-400: #BDBDBD;    
    --gray-500: #9E9E9E;    
    --gray-600: #444;    
    --gray-700: #333;    
    --gray-800: #212121;    
    --gray-900: #111;  
    --steel-gray-100: #f7fafc;    
    --steel-gray-200: #edf2f7;    
    --steel-gray-300: #e2e8f0;    
    --steel-gray-400: #cbd5e0;    
    --steel-gray-500: #a0aec0;    
    --steel-gray-600: #718096;    
    --steel-gray-700: #4a5568;    
    --steel-gray-800: #2d3748;    
    --steel-gray-900: #1a202c;  
    
    /* Aqua Theme */
    --aqua-100: #7FC0CF;    
    --aqua-200: #4AA2B6;    
    --aqua-300: #288CA4;    
    --aqua-400: #04819E;    
    --aqua-500: #03637A;    
    --aqua-600: #024E60;    
    --aqua-700: #0A5A6C;    
    --aqua-800: #02495A;    
    --aqua-900: #013642;     
    
    /* Auburn Theme */
    --orange-100: #fffaf0;    
    --orange-200: #feebc8;    
    --orange-300: #fbd38d;    
    --orange-400: #f6ad55;    
    --orange-500: #ed8936;    
    --orange-600: #dd6b20;    
    --orange-700: #c05621;    
    --orange-800: #9c4221;    
    --orange-900: #7b341e;    

    /* Accents */
    --orange: #ff714a;
    --peach: #ca8165;
    --aqua: ##53c9af;
    --cyan: cyan;
    --magenta: magenta;
    --purple: #805ad5;
    
    /* Remove Below */
    --yellow: #ffb200;
    --accent1: #e602e6;
    --accent2: cyan;
    --accent3: #16c79b;
    --accent4: #ff714a;

    --headline-font: 'Cairo', sans-serif;
    --sans-font: 'Open Sans', sans-serif;
  }
`
// Magenta https://www.color-hex.com/color-palette/31535

export default GlobalStyles
