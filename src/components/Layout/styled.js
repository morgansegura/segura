import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Main = styled.div`
  flex: 1;
  z-index: 1;
  position: relative;
  opacity: 1;
  background-color: ${({ theme }) => theme.bgBody};
  transition: opacity 0.2s ease-in;

  .drawer-open & {
    opacity: 0.15;
  }
  ${customMedia.greaterThan('large')`

  `}
`
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--width-container);
`

export const MainNavToggle = styled.div`
  position: relative;
  font-size: 11px;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  /* background: magenta; */

  svg path {
    stroke: white;
  }

  span {
    position: relative;
    color: ${({ theme }) => theme.textOnLight};
    display: block;
    font-weight: 300;
    top: -2px;
    opacity: 1;
    transition: color 0.3s ease-out, display 0.1s ease-out;

    .drawer-open & {
      display: none;
    }
  }
  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.bgMenuHover};
    width: 80%;
    height: 80%;
    border-radius: 100%;
    transform-origin: 50% 50%;
    transform: scale(0);
    transition: transform 0.2s ease-out;
  }
  &:hover {
    span {
      color: ${({ theme }) => theme.textOnLight};
    }
    &:after {
      transform: scale(1);
    }
  }
  .squeeze-menu & {
    display: none;
  }
  ${customMedia.greaterThan('large')`
    
	`};
`
export const Hamburger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  width: var(--size);
  height: var(--size);

  .drawer-open & {
    justify-content: center;
    margin-bottom: 0;
  }

  &:before,
  &:after,
  & .hamburger__center {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 50% 50%;
    /* background-color: ${({ theme }) => theme.textOnLight}; */
    background-color: magenta;
    height: 3px;
    border-radius: 4px;
    transition: transform 0.1s ease-in;
  }
  &:before {
    transform: translateY(-5px) translateX(-50%);
    width: 20px;

    .drawer-open & {
      width: 25px;
      transform: rotate(45deg);
      left: auto;
    }
  }
  & .hamburger__center {
    transform: translateY(3px) translateX(-50%);
    width: 20px;
    transition: width 0.1s ease-in;

    .drawer-open & {
      opacity: 0;
    }
  }
  &:after {
    transform: translateY(11px) translateX(-50%);
    width: 20px;
    transition: width 0.2s ease-in;

    .drawer-open & {
      width: 25px;
      transform: rotate(-45deg);
      left: auto;
    }
  }
`
export const SocialNavToggle = styled.div`
  position: absolute;
  right: 0;
  top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  width: 50px;
  height: 50px;
  cursor: pointer;
  font-size: 26px;
  transition: transform 0.15s ease-out;

  svg {
    path {
      stroke: ${({ theme }) => theme.textOnLight};
    }
  }
  &:after {
    content: '';
    position: absolute;
    /* z-index: -1; */
    background-color: ${({ theme }) => theme.bgMenuHover};
    width: 80%;
    height: 80%;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }
  &:hover {
    &:after {
      transform: scale(1);
    }
  }

  ${customMedia.greaterThan('large')`
    width: var(--size);
    height: var(--size);
    top: inherit;
    bottom: 0;
    background-color: ${({ theme }) => theme.accentOnLight};
    svg {
      path {
        stroke: ${({ theme }) => theme.bgHeader};
      }
    }    
    &:hover {
      font-size: 26px;
    }
    &:active {
      font-size: 22px;
    }  
    &:after {
      width: 60%;
      height: 60%;      
    }  
	`};
`
export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.textOnLight1};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgFooter};
    border-top: 1px solid ${({ theme }) => theme.outlineOnLight};
  }
  ${customMedia.greaterThan('large')`
    margin-left: var(--size);
    width: calc(100% - var(--size));
  `}
`

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  text-transform: uppercase;
  font-family: var(--headline-font);
  height: var(--size);

  span {
    position: relative;
    top: 4px;
    font-family: var(--headline-font);
    font-weight: 300;
    letter-spacing: 1px;
  }

  ${customMedia.greaterThan('large')`
    justify-content: flex-end;
    padding-left: 40px;
    padding-right: 40px;
  `}
`
