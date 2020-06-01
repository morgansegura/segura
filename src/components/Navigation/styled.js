import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const HeaderNavWrapper = styled.div`
  position: relative;
  display: flex;
  bottom: 0;
  height: var(--size);
  left: var(--size);
  right: 0;
  z-index: 5;
  width: calc(100% - var(--size));
`
export const HeaderNav = styled.nav`
  position: absolute;
  width: 100%;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  background-color: ${({ theme }) => theme.HeaderNav};

  .drawer-open & {
    opacity: 0.15;
  }

  ${customMedia.greaterThan('large')`

  `}
`
export const HeaderNavListItem = styled.div`
  margin-right: 10px;
  ${customMedia.greaterThan('large')`

  `}
`
export const HeaderNavItem = styled(Link)`
  color: ${({ theme }) => theme.opaqueLight91};
  width: 100%;
  padding: 0 10px 0 30px;
  padding: 40px 10px 40px 25px;
  position: relative;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  text-decoration: none;
  font-family: var(--headline-font);
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 15px;
    height: 2px;
    margin-top: -1px;
  }

  &:before {
    background: ${({ theme }) => theme.opaqueLight41};
    z-index: 1;
  }
  &:after {
    width: 0;
    z-index: 2;
    -webkit-transition: all 300ms linear;
    transition: all 300ms linear;
  }
`
