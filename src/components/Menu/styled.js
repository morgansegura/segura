import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const MainNavDrawer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bgBodyDark};
  padding-bottom: 60px;
  padding-left: 60px;
  ${customMedia.greaterThan('medium')`
    top: 0;
    left: 90px;
  `};
`
export const MainNav = styled.nav``
export const MainNavLink = styled(Link)``

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
  
  ${customMedia.greaterThan('medium')`
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
