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
		height: 100vh;
    z-index: 1;
    padding: 0;
	`};
`
export const MainNav = styled.nav`
  position: absolute;
  overflow-x: hidden;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  max-width: 320px;
  background-color: ${({ theme }) => theme.panelHeader};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);

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
    width: 165px;
    left: 0;
    position: relative;
    padding-left: 0;
  `};
`
export const MainNavHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderNav};

  h2 {
    font-size: 1.5rem;
    line-height: 1;
    font-family: var(--base-font);
    font-weight: 500;
    text-align: center;
    padding-top: 1.25rem;
    color: ${({ theme }) => theme.textHeadline};
  }
`
export const MainNavLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderNav};

  text-decoration: none;
  font-size: 0.85rem;
  font-family: var(--base-font);
  font-weight: 400;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.textHeadline};
  /* text-transform: uppercase; */
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  transition: background-color 0.3 ease-out;

  &:before,
  &:after {
    content: '';
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  &:before {
    background-color: transparent;
  }
  &:after {
    z-index: 2;
    background-color: transparent;
    width: 3px;
    left: unset;
    transition: background-color 0.2s ease-out;
  }
  &[aria-current='page'] {
    background-color: ${({ theme }) => theme.hoverNav};
    &:hover {
      &:after {
        background-color: ${({ theme }) => theme.accentPrimary};
      }
    }
    &:after {
      background-color: ${({ theme }) => theme.accentPrimary};
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.hoverNav};
    &:after {
      background-color: ${({ theme }) => theme.borderNav};
    }
  }
`
