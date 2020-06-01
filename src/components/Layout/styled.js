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
  background-color: ${({ theme }) => theme.Body};
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
  font-size: 11px;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 60px;
  width: 60px;
  height: 60px;
  background-color: transparent;
  transition: background-color 0.3s ease-out;

  &:hover {
    /* background-color: ${({ theme }) => theme.ctaLightColor}; */
  }
  &:active {
    /* background-color: ${({ theme }) => theme.ctaDarkColor}; */
  }

  svg path {
    stroke: white;
  }

  span {
    position: relative;
    top: -2px;
  }

  ${customMedia.greaterThan('large')`
    width: var(--size);
    height: var(--size);
    top: var(--size);
    right: inherit;
    bottom: var(--size);
	`};
`
export const Hamburger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.125rem;
  width: 30px;
  height: 30px;

  .drawer-open & {
    justify-content: center;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 45%;
    left: inherit;
    background-color: ${({ theme }) => theme.accentColor};
    height: 3px;
    border-radius: 4px;
    transform-origin: 50% 50%;
    transition: width 0.1s ease-in, transform 0.1s ease-in;
  }
  &:before {
    transform: translateY(-5px);
    width: 30px;

    .drawer-open & {
      width: 23px;
      transform: rotate(45deg);
    }
  }
  &:after {
    transform: translateY(5px);
    width: 20px;
    .drawer-open & {
      width: 23px;
      transform: rotate(-45deg);
    }
  }
`

export const SocialNavToggle = styled.div`
  /* position: absolute; */
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 1;
  width: 60px;
  height: 60px;
  justify-content: center;
  cursor: pointer;
  background-color: ${({ theme }) => theme.accentColor};
  font-size: 20px;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.accentLightColor};
  }
  &:active {
    background-color: ${({ theme }) => theme.accentDarkColor};
  }

  svg {
    path {
      stroke: white;
    }
  }

  ${customMedia.greaterThan('large')`
    width: var(--size);
    height: var(--size);
    top: inherit;
    bottom: 0;
	`};
`
export const FooterWrapper = styled.div`
  position: relative;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: ${({ theme }) => theme.Footer};
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
  color: ${({ theme }) => theme.opaqueLight41};

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
