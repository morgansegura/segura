import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1600px',
})

// Layout Components
export const Content = styled.div`
  ${customMedia.greaterThan('large')`
    border-left: 1rem solid transparent;
  `};
  ${customMedia.greaterThan('huge')`
    position: absolute;  
    left: calc(50% + 6rem);
    margin-left: auto;
    margin-right: auto;
    transform: translateX(-50%);
    min-width: 1280px;
    max-width: 1600px;
    border-left: 1px solid ${({ theme }) => theme.borderContent};
    border-right: 1px solid ${({ theme }) => theme.borderContent};
  `};
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
    z-index: -1;
    background-color: ${({ theme }) => theme.transHover};
    width: 45px;
    height: 45px;
    border-radius: 100%;
    transform-origin: 50% 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }
  .drawer-open & {
    &:after {
      background-color: ${({ theme }) => theme.transHover};
      transform: scale(1);
    }
  }  
  &:hover {
    &:after {
      transform: scale(1);
      transition: transform 0.2s ease-out;
    }
    & .hamburger:before,
    & .hamburger:after,
    & .hamburger__center {
      background-color: ${({ theme }) => theme.logo};
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
    background-color: ${({ theme }) => theme.logo};
    height: 3px;
    border-radius: 10px;
    border: none;
    transition: rotate 0.3s ease-in, background-color 0.2s ease-out;   
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
    transition: width 0.3s ease-in, transform 0.1s ease-in;

    .drawer-open & {
      width: 28px;
      top: 48%;
      transform: rotate(-45deg) translateX(0);
      left: 22%;
      background-color: ${({ theme }) => theme.logo};
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
      background-color: ${({ theme }) => theme.logo};
    }
  }
`
export const Footer = styled.footer`
 background-color: ${({ theme }) => theme.bgCardBlock2};
`
