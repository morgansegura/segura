import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 11;
  right: 0;
  width: 100%;
  height: 60px;
  transition: width 0.2s ease-in;

  &:before {
    content: '';
    position: absolute;
    top: auto;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.opaqueLight};
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    transition: background-color 1s ease-out;
  }

  .squeeze-menu & {
    width: 65px;
    height: 60px;
    transition: width 0.2s ease-out;
    &:before {
      width: 50px;
      height: 50px;
      right: 0.5rem;
      border-radius: 100%;
      border-bottom-color: transparent;
      background-color: transparent;
    }
  }
`
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 58px;

  .squeeze-menu & {
    padding-right: 0;
  }
`

export const LogoLink = styled(Link)`
  position: absolute;
  left: 1.5rem;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.2s ease-out;

  &:hover {
    transform: scale(1.1);
  }
  .logo {
    width: 35px;
  }
  .icon {
    display: none;
  }
  /* SVG class */
  svg {
    position: absolute;
    path {
      fill: ${({ theme }) => theme.gray800};
    }
  }
  .squeeze-menu & {
    display: none;
  }
`
