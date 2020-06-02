import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const MenuLabel = styled.p`
  position: absolute;
  left: -3rem;
  bottom: 140px;
  display: flex;
  z-index: 2;
  font-size: 95px;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.opaqueOnLight};
  transform: rotate(-90deg);

  ${customMedia.greaterThan('large')`
    left: -1rem;
	`};
`
export const MenuLogo = styled.p`
  position: relative;
  z-index: 2;
  font-size: 30px;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  padding: 1.125rem 0;
  color: ${({ theme }) => theme.textOnLight};
  margin-bottom: 1.25rem;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: -1.5rem;
    padding-left: 1.5rem;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.opaqueOnLight};
  }
`

export const MainNavDrawer = styled.div`
  position: fixed;
  /* z-index: -1; */
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
  top: 60px;
  flex-direction: column;
  justify-content: center;
  padding: 35px 30px 35px 160px;

  .drawer-open & {
    z-index: 2;
  }

  ${customMedia.greaterThan('large')`
		top: 0;
		height: 100%;
		left: var(--size);
	`};
`
export const MainNav = styled.nav`
  position: absolute;
  overflow-x: hidden;
  top: 0;
  left: -100%;
  width: 65%;
  height: 100%;
  padding-top: 45px;
  padding-left: var(--size);
  background-color: ${({ theme }) => theme.bgDrawer};
  box-shadow: 0 0 40px ${({ theme }) => theme.bgDrawerShadow};
  display: flex;
  flex-direction: column;

  .drawer-open & {
    left: 0;
    transition: left 0.4s ease-out;
  }

  ${customMedia.greaterThan('large')`
    width: 45%;
	  padding-top: var(--size);
  `};
`
export const MainNavLink = styled(Link)`
  position: relative;
  color: ${({ theme }) => theme.opaqueOnLight2};
  text-decoration: none;
  font-size: 14px;
  font-family: var(--headline-font);
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: auto;
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: color 0.3 ease-out;

  &:after {
    content: '';
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    height: 10px;
    background-color: ${({ theme }) => theme.opaqueOnLight};
  }

  .drawer-open & {
  }

  &:hover {
    color: ${({ theme }) => theme.actionOnLight};

    &:after {
      content: '';
      position: absolute;
      left: -10px;
      top: 0;
      height: 100%;
      background-color: ${({ theme }) => theme.opaqueOnLight2};
    }
  }
`

export const SocialNavDrawer = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* background-color: ${({ theme }) => theme.bgBodyDark}; */
	background: pink;
	padding-bottom: 60px;
	padding-left: 60px;
	display: none;
  
  ${customMedia.greaterThan('large')`
    top: 0;
    left: var(--size);
  `};
`
export const SocialNav = styled.nav`
  a {
    padding: 1rem 0;
    text-transform: uppercase;
    font-size: 14px;
    font-family: var(--headline-font);
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.headline};
  }
`
