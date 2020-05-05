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
    width: calc(100%-90px);
    margin-left: 90px;
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
  font-size: 12px;
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
    top: -3px;
  }

  ${customMedia.greaterThan('large')`
    width: 90px;
    height: 90px;
    top: 90px;
    right: inherit;
    bottom: 90px;
	`};
`
export const Hamburger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.125rem;
  width: 32px;
  height: 32px;

  .drawer-open & {
    justify-content: center;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 45%;
    left: inherit;
    background-color: ${({ theme }) => theme.ctaColor};
    height: 4px;
    border-radius: 4px;
    transform-origin: 50% 50%;
    transition: width 0.1s ease-in, transform 0.1s ease-in;
  }
  &:before {
    transform: translateY(-5px);
    width: 32px;

    .drawer-open & {
      width: 22px;
      transform: rotate(45deg);
    }
  }
  &:after {
    transform: translateY(5px);
    width: 22px;
    .drawer-open & {
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
  background-color: ${({ theme }) => theme.ctaColor};
  font-size: 20px;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.ctaLightColor};
  }
  &:active {
    background-color: ${({ theme }) => theme.ctaDarkColor};
  }

  svg {
    path {
      stroke: white;
    }
  }

  ${customMedia.greaterThan('large')`
    width: 90px;
    height: 90px;
    top: inherit;
    bottom: 0;
	`};
`
export const FooterWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.outlines};
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 14px;
  padding: 1rem 20px 0.75rem;
  color: ${({ theme }) => theme.subheadline};

  background-color: ${({ theme }) => theme.bgBody};

  ${customMedia.greaterThan('large')`
        justify-content: flex-end;
        padding-left: 40px;
        padding-right: 40px;
    `}
  p {
    position: relative;
    top: -3px;
    color: ${({ theme }) => theme.headline};
    opacity: 0.65;
    font-weight: 300;
    padding-right: 0.5rem;
  }
`
