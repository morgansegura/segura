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
  position: relative; 
  height: 100%;

  ${customMedia.greaterThan('large')`
    border-left: 1rem solid transparent;
    &:before {
      content: '';
      position: absolute;
      width: 1px;
      left: 0;
      top: 0;
      bottom: 0;
      border-right: 1px solid ${({ theme }) => theme.borderContent};
    }  
  `};
  ${customMedia.greaterThan('huge')`
    position: absolute;
    left: calc(50% + 6rem);
    margin-left: auto;
    margin-right: auto;
    transform: translateX(-50%);
    min-width: 1280px;
    max-width: 1600px;
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
    background-color: ${({ theme }) => theme.iconHeaderBGHover};
    width: 45px;
    height: 45px;
    border-radius: 100%;
    transform-origin: 50% 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }
  .drawer-open & {
    &:after {
      background-color: ${({ theme }) => theme.iconHeaderBGHover};
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
      background-color: ${({ theme }) => theme.iconHeader};
    }
  }
  .squeeze-menu & {
    display: none;
  }
  ${customMedia.greaterThan('large')`
        display: none;
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
    background-color: ${({ theme }) => theme.iconHeader};
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
    transition: background-color 0.3s ease-out;

    .drawer-open & {
      opacity: 0;
    }
  }
  & .hamburger__center {
    top: 46%;
    width: 25px;
    transform-origin: 50% 50%;
    transform: translateX(0) rotate(180deg);
    transition: width 0.3s ease-in, transform 0.1s ease-in, background-color 0.3s ease-out;

    .drawer-open & {
      width: 28px;
      top: 48%;
      transform: rotate(-45deg) translateX(0);
      left: 22%;
      background-color: ${({ theme }) => theme.iconHeaderHover};
    }
  }
  &:after {
    top: 62%;
    transform: translateX(-50%);
    width: 25px;
    transform-origin: 50% 50%;
    transform: translateX(0) rotate(-180deg);
    transition: width 0.2s ease-in, background-color 0.3s ease-out;

    .drawer-open & {
      top: 48%;
      width: 28px;
      transform: rotate(45deg) translateX(0);
      background-color: ${({ theme }) => theme.iconHeaderHover};
    }
  }
  &:hover {
    &.hamburger:before,
    &.hamburger:after,
    & .hamburger__center {
      background-color: ${({ theme }) => theme.iconHeaderHover};
    }
  }  
`
export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.bgFooter};
  color: ${({ theme }) => theme.textFooter};
  transition: height 0.15s ease-in-out;
  width: 100%;  

  a, .social-icon {
    color: ${({ theme }) => theme.iconFooter};
    transition: all 0.3s ease-out;
    &:hover {
      color: ${({ theme }) => theme.iconFooterHover};
    }
  }
`
