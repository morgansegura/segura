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
  z-index: 11;
  width: 100%;
  height: 60px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.bgHeader};
    border-bottom: 1px solid ${({ theme }) => theme.outlineOnLight};
    /* opacity: 0.95; */
  }
  ${customMedia.greaterThan('large')`
    top: 0;
    left: 0;
    width: var(--size);
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.outlineOnLight};
    border-bottom: none;
  `}
`
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  ${customMedia.greaterThan('large')`
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-right: 0;
	`}
`

export const LogoLink = styled(Link)`
  position: absolute;
  left: 0;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 60px;

  ${customMedia.greaterThan('large')`
    position: relative;
    height: var(--size);
    width: var(--size);
  `}

  .logo {
    height: 40px;
    width: 40px;
  }
  /* SVG class */
  .cls-2 {
    fill: ${({ theme }) => theme.Logo};
  }
`
