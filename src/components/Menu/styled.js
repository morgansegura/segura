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
  left: 0;
  bottom: 140px;
  display: flex;
  z-index: 2;
  font-size: 95px;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  transform: rotate(-90deg);
`
export const MenuLogo = styled.p`
  position: relative;
  z-index: 2;
  font-size: 40px;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  padding: 1.125rem 0;
  margin-left: -35px;
  margin-bottom: 1.25rem;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 13%;
    height: 100%;
    width: 100%;
    background: rgba(255, 255, 255, 0.25);
  }
`

export const MainNavDrawer = styled.div`
  position: fixed;
  z-index: 2;
  display: flex;
  width: 100%;
  height: calc(100% - 60px);
  top: 60px;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 60px;
  padding-left: 60px;

  ${customMedia.greaterThan('large')`
		top: 0;
		height: 100%;
		left: 90px;
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
  padding-left: 90px;
  background-color: ${({ theme }) => theme.bgBodyDark};
  display: flex;
  flex-direction: column;
  transition: left 0.3s ease-out;

  .drawer-open & {
    left: 0;
    transition: left 0.3s ease-in;
  }

  ${customMedia.greaterThan('large')`
	padding-top: 90px;
  `};
`
export const MainNavLink = styled(Link)`
  color: ${({ theme }) => theme.headline};
  text-decoration: none;
  font-size: 1rem;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem 0;
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
    left: 90px;
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
