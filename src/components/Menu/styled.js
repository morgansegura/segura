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
  top: 50%;
  display: flex;
  /* align-items: flex-end;
  justify-content: flex-start; */
  z-index: 2;
  font-size: 95px;
  font-family: var(--headline-font);
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme }) => theme.opaqueOnLight};
  background-color: ${({ theme }) => theme.opaqueOnLight};
  transform: rotate(-90deg);
  display: none;

  ${customMedia.greaterThan('large')`

	`};
`

export const MainNavDrawer = styled.div`
  position: fixed;
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
  border-left: 80px solid ${({ theme }) => theme.opaqueOnLight};
  box-shadow: 0 0 40px ${({ theme }) => theme.bgDrawerShadow};
  display: flex;
  flex-direction: column;

  .drawer-open & {
    left: 0;
    transition: left 0.4s ease-out;
  }
  .squeeze-menu & {
    display: none;
  }

  ${customMedia.greaterThan('large')`
    width: 45%;
	  padding-top: 200px;
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

  &:before {
    content: '';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    left: -1.5rem;
    top: 45%;
    transform: translateY(-55%);
    height: 10px;
    width: 10px;
    background-color: ${({ theme }) => theme.opaqueOnLight};
  }
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
