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
  position: relative;
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
  ${customMedia.greaterThan('large')`
    
  `};
`
export const SectionInner = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
  background-color: transparent;
  padding: 6rem 30px 60px;
  margin-left: 0;    
  background-color: ${({ theme }) => theme.panelHeader};
  transform: translate3d(0,0,0);

  ${customMedia.greaterThan('large')`
      padding: 50px 70px 70px;
  `};
`
export const SectionTitleBlock = styled.div`
  margin-bottom: 40px;

  ${customMedia.greaterThan('large')`

  `};
`
export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.textHeadline};
  font-size: 30px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0px;
  margin: 0 0 8px;
  line-height: 1.5em;

  &:after {
    display: block;
    content: '';
    width: 100%;
    margin-top: 5px;
    height: 2px;
    background-color: ${({ theme }) => theme.borderHeading};
    opacity: 1;
  }

  ${customMedia.greaterThan('large')`

  `};
`
export const SectionDescription = styled.h5`
  display: block;
  margin: 0;
  color: #bbb;
  font-size: 14px;
  font-weight: 300;
  text-align: right;

  ${customMedia.greaterThan('large')`

  `};
`

export const SectionContent = styled.section`

  ${customMedia.greaterThan('medium')`
   
  `}
`
export const TitleBlock = styled.div`
  h3 {
    display: inline-block;
    margin: 0 0 20px;
    padding-bottom: 3px;    
    font-size: 21px;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin-top: -1px;
      background-color: ${({ theme }) => theme.accentPrimary};
    }
  }
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
  z-index: -1;
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
    background-color: ${({ theme }) => theme.hoverNav};
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
  color: ${({ theme }) => theme.textHeadline};
  transition: transform 0.15s ease-out;

  svg {
    fill: ${({ theme }) => theme.textHeadline};
    path {
      transition: stroke 0.2s ease-in;
    }
  }
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    background-color: ${({ theme }) => theme.hoverNav};
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
      fill: ${({ theme }) => theme.accentSecondary};
      transition: transform 0.1s ease-inherit;

      path {
        
      }
    }
  }
  &:active {
    svg {
      transition: transform 0.1s ease-out;
    }
  }
  .squeeze-menu & {
    opacity: .8;
    color: ${({ theme }) => theme.textHeadline};
    background-color: ${({ theme }) => theme.accentSecondary};
    transition: opacity 0.2s ease-out, box-shadow 0.2s ease-out, rotate 0.2s ease-out;
    border-radius: 100%;
    svg {
      stroke: ${({ theme }) => theme.panelBody};
      transform: rotate(90deg);
      transition: transform 0.1s ease-in;
      path {
        fill: ${({ theme }) => theme.panelBody};
      }
    }
    &:after {
      background-color: transparent;
    }
    &:hover {
      opacity: 1;
      color: ${({ theme }) => theme.textHeadline};
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
