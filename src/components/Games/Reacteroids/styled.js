import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

import stars from './images/stars.png'

const customMedia = generateMedia({
  xsmall: '250px',
  small: '450px',
  medium: '768px',
  large: '1024px',
  xlarge: '1200px',
  huge: '1400px',
})

export const GameWrapper = styled.div`
  position: relative;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 100vh;

  &.fixed-layout {
    position: fixed;
    /* width: calc(100% - var(--size)); */
  }

  @keyframes bounceUp {
    0% {
      transform: translate3d(0px, 0px, 0px);
      opacity: 0;
    }
    50% {
      transform: translate3d(0px, -50px, 0px);
      opacity: 0.7;
    }
    80% {
      transform: translate3d(0px, 20px, 0px);
      opacity: 1;
    }
    100% {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
  }
`
export const GameOptions = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  z-index: 1;
  text-align: center;
  color: white;
`
export const DevInfo = styled.div``
export const DevHeading = styled.h1`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;
  text-align: center;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  font-size: 55px;
  line-height: 45px;

  ${customMedia.greaterThan('medium')`
    font-size: 80px;
    line-height: 70px;
  `}
`
export const DevSubheading = styled.h2`
  position: relative;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
  padding-bottom: 1.5rem;
  color: var(--base-medium);

  ${customMedia.greaterThan('medium')`
      font-size: 2.5rem;
  `}
`
export const AnimateText = styled.span``

export const Bracket = styled.span`
  position: absolute;
  top: -8px;
  width: 15px;
  height: 75%;
  border: solid rgba(255, 178, 0, 0.85);

  &:first-child {
    left: -1.125rem;
    border-width: 4px 0 4px 4px;
  }
  &:last-child {
    right: -1.125rem;
    border-width: 4px 4px 4px 0;
  }
`

export const ScoreWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 178, 0, 0.85);

  p {
    padding-bottom: 0.5rem;
    &:first-child {
      color: rgba(255, 178, 0, 1);
    }
  }
`
export const ScoreLabel = styled.p`
  display: block;
  position: absolute;
  top: 0;
  z-index: 1;
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 178, 0, 0.85);
  padding: 0.75rem;
  border: solid rgba(255, 178, 0, 0.5);

  span {
    color: white;
  }

  &.current-score {
    left: 0;
    top: 60px;
    border-radius: 0 0 15px 0;
    border-width: 0 1px 1px 0;
  }
  &.top-score {
    right: 0;
    top: 60px;
    border-radius: 0 0 0 15px;
    border-width: 0 0 1px 1px;
  }
  ${customMedia.greaterThan('large')`
    &.top-score {
      top: 0;
    }  
    &.current-score {
      left: var(--size);
      top: 0;
    }
  `}
`
export const GameCanvas = styled.canvas`
  z-index: -1;
  background-color: #161720;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

/* Controls & Buttons */
export const ResetButton = styled.span`
  cursor: pointer;
  background-color: #555;
  color: #ccc;
  font-size: 12px;
  line-height: 1;
  padding: 5px 8px;
  border-radius: 4px;
  transition: all 0.3s ease-out;

  &:hover {
    color: #fff;
    background-color: #999;
  }
`
export const GameControls = styled.span`
  position: relative;
  z-index: 3;
  display: inline;
  z-index: 3;
  font-size: 13px;
  text-align: center;
  line-height: 1.6;
  padding: 0.25rem 0.5rem;
  color: rgba(255, 178, 0, 0.5);
  cursor: default;
  transition: color 0.3s ease-out;

  &:hover {
    color: rgba(255, 178, 0, 0.85);
  }

  span {
    display: inline-block;
    min-width: 20px;
    padding: 0 3px;
    margin: 5px 1px;
    border-radius: 3px;
    border: 1px solid rgba(255, 178, 0, 0.5);
  }
`
export const PlayButton = styled.span`
  position: relative;
  z-index: 3;
  border-radius: 4px;
  background-color: rgba(255, 178, 0, 0.85);
  box-shadow: none;
  outline: none;
  color: white;
  font-weight: 400;
  font-size: 16px;
  padding: 10px 20px;
  margin: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: rgba(255, 178, 0, 0.98);
    opacity: 1;
  }
`
export const BGContainer = styled.div`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;

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
`
export const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-attachment: fixed;
  background: url(${stars}) repeat top center;
  z-index: 3;
`

// .social-block {
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   padding-top: 1.5rem;

//   svg {
//     margin-right: 0.5rem;
//     margin-left: 0.5rem;
//     width: 25px;
//     height: 25px;
//   }
// }
