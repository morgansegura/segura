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
  .squeeze-menu & {
    opacity: 1;
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
  /* left: 50px; */
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
    background-color: ${({ theme }) => theme.bgMenuHover};
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
      background-color: magenta;
    }
  }
  .drawer-open & {
    & .hamburger:before,
    & .hamburger:after,
    & .hamburger__center {
      background-color: magenta;
    }
    & .hamburger:before,
    & .hamburger:after,
    & .hamburger__center {
      /* transition: transform 0.1s ease-in; */
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
  width: 50px;
  height: 50px;

  .drawer-open & {
    justify-content: center;
    margin-bottom: 0;
  }

  &:before,
  &:after,
  & .hamburger__center {
    content: '';
    position: absolute;
    z-index: 1;
    left: 50%;
    transform-origin: 50% 50%;
    background-color: ${({ theme }) => theme.textOnLight};
    height: 3px;
    border: none;
    transform: translateX(-50%);
    transition: rotate 0.1s ease-in;
  }
  &:before {
    top: 32%;
    width: 25px;
    .drawer-open & {
      opacity: 0;
    }
  }
  & .hamburger__center {
    top: 47%;
    width: 25px;
    transition: width 0.1s ease-in;

    .drawer-open & {
      width: 28px;
      top: 50%;
      transform: rotate(45deg) translateY(-50%) translateX(0);
      left: 22%;
    }
  }
  &:after {
    top: 63%;
    transform: translateX(-50%);
    width: 25px;
    transition: width 0.2s ease-in;

    .drawer-open & {
      top: 50%;
      width: 28px;
      transform: rotate(-45deg) translateY(-50%) translateX(0);
      left: 24%;
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
      stroke: ${({ theme }) => theme.textOnLight};
      transition: stroke 0.2s ease-in;
    }
  }
  &:after {
    content: '';
    z-index: 1;
    position: absolute;
    background-color: ${({ theme }) => theme.bgMenuHover};
    width: 90%;
    height: 90%;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }
  &:hover {
    &:after {
      transform: scale(1);      
    }
    svg {
      path {
        stroke: cyan;
      }
    }    
  }
  &:active {
    svg {
      transform: scale(1.1);
      transition: transform 0.1s ease-out;    
    }  
  }
  .squeeze-menu & {
    background-color: cyan;
    transition: opacity 0.2s ease-out;
    border-radius: 100%;
    svg {
      transform: scale(1);
      path {
        stroke: var(--dark);
      }
    }
    &:after {
      background-color: transparent; 
    }   
    &:hover {
      opacity: .8;
      &:after {
       background-color: transparent; 
      }      
    }
  }

  /* ${customMedia.greaterThan('large')`
    position: relative;
    top: inherit;
    bottom: 0;

    &:hover {

    }
    &:active {

    }  
    &:after {

    }  
	`}; */
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
