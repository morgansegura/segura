import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

import stars from './images/stars.png'
import clouds from './images/clouds.png'
import twinkling from './images/twinkling.png'

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
    color: var(--base-medium);

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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    border: 1px solid rgba(255, 178, 0, 0.65);
    p {
      padding-bottom: 0.5rem;
      &:first-child {
        color: rgba(255, 178, 0, 1);
      }
    }
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
  .reset {
    cursor: pointer;
    background-color: #444;
    color: #999;
    font-size: 12px;
    line-height: 1;
    padding: 3px 6px;
    border-radius: 4px;
    transition: all 0.3s ease-out;

    &:hover {
      color: #ccc;
      background-color: #555;
    }
  }
  .score {
    display: block;
    position: absolute;
    top: 0;
    z-index: 1;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 178, 0, 0.65);
    padding: 0.75rem;
    border: solid rgba(255, 178, 0, 0.35);
    span {
      color: white;
    }
  }
  .current-score {
    left: 0;
    border-radius: 0 0 15px 0;
    border-width: 0 1px 1px 0;
  }
  .top-score {
    right: 0;
    border-radius: 0 0 0 15px;
    border-width: 0 0 1px 1px;
  }
  .controls {
    display: block;
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 3;
    font-size: 13px;
    text-align: center;
    line-height: 1.6;
    padding: 0.25rem 0.5rem;
    color: rgba(255, 178, 0, 0.35);
    border: 1px solid rgba(255, 178, 0, 0.15);
    cursor: default;
    transition: color 0.3s ease-out;

    &:hover {
      color: rgba(255, 178, 0, 0.65);
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
    border-radius: 4px;
    background-color: rgba(255, 178, 0, 0.65);
    box-shadow: none;
    outline: none;
    color: white;
    font-weight: 400;
    font-size: 16px;
    padding: 5px 20px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  button:hover {
    background-color: rgba(255, 178, 0, 0.98);
    opacity: 1;
  }

  @keyframes move-twink-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -10000px 5000px;
    }
  }

  @keyframes move-clouds-back {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 10000px 0;
    }
  }

  .image-container {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
  .stars,
  .twinkling,
  .clouds {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: block;
  }

  .stars {
    background: url(${stars}) repeat top center;
    z-index: 0;
  }

  .twinkling {
    background: transparent url(${twinkling}) repeat top center;
    z-index: 1;
    opacity: 0.05;
    animation: move-twink-back 200s linear infinite;
  }

  .clouds {
    background: transparent url(${clouds}) repeat top center;
    z-index: 2;
    opacity: 0.05;
    animation: move-clouds-back 200s linear infinite;
  }
`
