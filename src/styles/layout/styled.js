import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

// Layout Components

export const Main = styled.div`
  flex: 1;
  z-index: 1;
  position: relative;
  opacity: 1;
  background-color: ${({ theme }) => theme.panelHeader};
  transition: opacity 0.2s ease-in;

  .drawer-open & {
    opacity: 0.15;
  }
  .squeeze-menu & {
    opacity: 1;
  }
  ${customMedia.greaterThan('large')`
    margin-left: 11.3125rem;
  `}
`

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Container = styled.div`
  margin: 60px auto 0 auto;
  &.sidebar--left,
  &.sidebar--right {
    display: flex;
  }
`
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;

  &.section--inner {
    padding: 25px 30px 60px;
    margin-left: 0;
  }
  &.section--offset-light {
    background-color: ${({ theme }) => theme.panelOffset};
  }
  &.section--offset-dark {
    background-color: ${({ theme }) => theme.hoverNav};
  }
  &.bt-1 {
    border-top: 1px solid ${({ theme }) => theme.panelIcon};
  }
  .t-center {
    text-align: center;
  }
  .w-100 {
    width: 100%;
  }
  ${customMedia.greaterThan('large')`
    
  `};
`

export const Content = styled.section`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 4.5rem;
  padding-top: 60px;

  ${customMedia.greaterThan('medium')`
    width: 75%;
    flex-basis: 75%;

    .sidebar--left & {
      order: 1;
    }
    .sidebar--right & {
      order: 0;
    }    
  `}
`

export const MainNavToggle = styled.div`
  position: relative;
  font-size: 11px;
  z-index: 10;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform-origin: 50% 50%;
    transform: scale(0);
    background-color: ${({ theme }) => theme.gray50};
    transition: transform 0.2s ease-out;
  }
  &:hover {
    &:after {
      transform: scale(1);
      transition: transform 0.2s ease-out;
    }
    & .hamburger:before,
    & .hamburger:after,
    & .hamburger__center {
      background-color: ${({ theme }) => theme.accentSecondary};
    }
  }
  .squeeze-menu & {
    display: none;
  }
  ${customMedia.greaterThan('large')`
      .mobile & {
        display: none;
      }
  `};
`
export const Hamburger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  .drawer-open & {
    margin-bottom: 0;
  }

  &:before,
  &:after,
  & .hamburger__center {
    content: '';
    position: absolute;
    z-index: 1;
    background-color: ${({ theme }) => theme.textHeadline};
    height: 3px;
    border: none;
    /* transform: translateX(-50%); */
    transition: rotate 0.1s ease-in, background-color 0.2s ease-out;   
  }
  &:before {
    top: 30%;
    width: 25px;
    transform-origin: 50% 50%;
    transform: translateX(0) rotate(180deg);

    .drawer-open & {
      opacity: 0;
    }
  }
  & .hamburger__center {
    top: 46%;
    width: 25px;
    transform-origin: 50% 50%;
    transform: translateX(0) rotate(180deg);
    transition: width 0.1s ease-in, transform 0.1s ease-in;

    .drawer-open & {
      width: 28px;
      top: 48%;
      transform: rotate(-45deg) translateX(0);
      left: 22%;
      background-color: ${({ theme }) => theme.accentSecondary};
    }
  }
  &:after {
    top: 62%;
    transform: translateX(-50%);
    width: 25px;
    transform-origin: 50% 50%;
    transform: translateX(0) rotate(-180deg);
    transition: width 0.2s ease-in;

    .drawer-open & {
      top: 48%;
      width: 28px;
      transform: rotate(45deg) translateX(0);
      background-color: ${({ theme }) => theme.accentSecondary};
    }
  }
`
export const SocialNavToggle = styled.div`
  position: absolute;
  z-index: 2;
  right: 0.5rem;
  top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 24px;

  transition: transform 0.15s ease-out;

  svg {
    path {
      fill: ${({ theme }) => theme.gray800};
      transition: stroke 0.2s ease-in;
    }
  }
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    background-color: ${({ theme }) => theme.gray50};
    width: 90%;
    height: 90%;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.1s ease-in, fill 0.2s ease-out;
  }
  &:hover {
    &:after {
      transform: scale(1);
    }
    svg {
      stroke: ${({ theme }) => theme.gray800};
      transition: transform 0.1s ease-inherit;

      path {
        fill: ${({ theme }) => theme.accentSecondary};
      }
    }
  }
  &:active {
    svg {
      transition: transform 0.1s ease-out;
    }
  }
  .squeeze-menu & {
    background-color: ${({ theme }) => theme.accentSecondary};
    transition: opacity 0.2s ease-out, background-color 0.2s ease-out;
    border-radius: 100%;
    svg {
      transform: rotate(90deg);
      transition: transform 0.1s ease-in;
      path {
        fill: var(--dark);
      }
    }
    &:after {
      background-color: transparent;
    }
    &:hover {
      background-color: ${({ theme }) => theme.accentSecondary};
      &:after {
        background-color: transparent;
      }
    }
  }
  ${customMedia.greaterThan('large')`
      .mobile & {
        display: none;
      }
  `};
`
