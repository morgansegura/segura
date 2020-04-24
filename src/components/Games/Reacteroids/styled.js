import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    xsmall: '250px',
    small: '450px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
    huge: '1400px',
})

export const GameWrapper = styled.div`
           .title-section {
               display: flex;
               flex-direction: column;
               align-items: center;
           }
           .social-block {
               display: flex;
               align-items: center;
               justify-content: space-evenly;
               padding-top: 1.5rem;

               svg {
                   margin-right: 0.5rem;
                   margin-left: 0.5rem;
                   width: 25px;
                   height: 25px;
               }
           }
           .section-headline {
               display: flex;
               flex-direction: column;
               align-items: center;
               text-align: center;
               letter-spacing: 1px;
               font-weight: 600;
               font-family: var(--headline-font);
               color: white;
               margin-bottom: 1rem;

               ${customMedia.lessThan('medium')`
            font-size: 60px;
            line-height: 50px;
        `}
               ${customMedia.greaterThan('small')`
            font-size: 80px;
            line-height: 65px;
        `}
           }

           .section-subline {
               font-size: 1.75rem;
               font-weight: 500;
               line-height: 1.4;
               padding-bottom: 1.5rem;

               &--small {
                   font-size: 1rem;
                   padding-bottom: 0;

                   ${customMedia.greaterThan('small')`
                font-size: 1.2rem;
            `}
                   ${customMedia.greaterThan('xlarge')`
                font-size: 1.5rem;
            `}
               }
           }
           .score-wrapper {
               padding: 1rem;
               border: 1px solid white;
           }
           canvas {
               z-index: -1;
               display: block;
               background-color: #252733;
               position: absolute;
               top: 0;
               bottom: 0;
               left: 0;
               right: 0;
               width: 100%;
               height: 100%;
           }
           .current-score {
               left: 20px;
           }
           .top-score {
               right: 20px;
           }
           .score {
               display: block;
               position: absolute;
               top: 15px;
               z-index: 1;
               font-size: 1rem;
               color: white;
           }
           .controls {
               display: block;
               position: absolute;
               bottom: 15px;
               left: 50%;
               transform: translate(-50%, 0);
               z-index: 1;
               font-size: 13px;
               /* font-family: var(--headline-font); */
               text-align: center;
               line-height: 1.6;
               color: rgba(255, 255, 255, 0.3);
               transition: color 0.3s ease-out;

               &:hover {
                   color: white;
               }
           }
           .endgame {
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
               padding: 16px;
               z-index: 1;
               text-align: center;
               color: white;
           }
           button {
               position: relative;
               z-index: 3;
               border: 1px solid ${({ theme }) => theme.primaryColor};
               border-radius: 4px;
               background-color: ${({ theme }) => theme.primaryColor};
               box-shadow: none;
               outline: none;
               color: white;
               font-size: 20px;
               padding: 10px 20px;
               margin: 10px;
               margin-top: 1rem;
               font-family: var(--headline-font);
               cursor: pointer;
               transition: all 0.3s ease-out;
           }
           button:hover {
               background-color: ${({ theme }) => theme.primaryLightColor};
               /* color: ${({ theme }) => theme.primaryColor}; */
           }
           @keyframes move-twink-back {
               from {
                   background-position: 0 0;
               }
               to {
                   background-position: -10000px 5000px;
               }
           }
           @-webkit-keyframes move-twink-back {
               from {
                   background-position: 0 0;
               }
               to {
                   background-position: -10000px 5000px;
               }
           }
           @-moz-keyframes move-twink-back {
               from {
                   background-position: 0 0;
               }
               to {
                   background-position: -10000px 5000px;
               }
           }
           @-ms-keyframes move-twink-back {
               from {
                   background-position: 0 0;
               }
               to {
                   background-position: -10000px 5000px;
               }
           }

           .stars,
           .twinkling,
           .clouds {
               z-index: 1;
               position: absolute;
               top: 0;
               left: 0;
               right: 0;
               bottom: 0;
               width: 100%;
               height: 100%;
               display: block;
               opacity: 0.5;
           }
           .stars {
               background: transparent
                   url('http://www.script-tutorials.com/demos/360/images/stars.png')
                   repeat top center;
               z-index: 0;
           }
           /* .twinkling {
        background: #252733
            url('http://www.script-tutorials.com/demos/360/images/twinkling.png')
            repeat top center;
        z-index: 1;
        -moz-animation: move-twink-back 200s linear infinite;
        -ms-animation: move-twink-back 200s linear infinite;
        -o-animation: move-twink-back 200s linear infinite;
        -webkit-animation: move-twink-back 200s linear infinite;
        animation: move-twink-back 200s linear infinite;
    } */
       `
