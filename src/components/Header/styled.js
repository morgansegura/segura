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
    background: ${({ theme }) => theme.Header};
    opacity: 0.6;
  }
  ${customMedia.greaterThan('large')`
    top: 0;
    left: 0;
    width: var(--size);
    height: 100%;
  `}
`
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  ${customMedia.greaterThan('large')`
    flex-direction: column;
    align-items: space-between;
	`}
`

export const LogoLink = styled(Link)`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  ${customMedia.greaterThan('large')`
    height: var(--size);
    width: var(--size);
  `}

  .logo {
    height: 30px;
    width: 30px;
    ${customMedia.greaterThan('large')`
      height: 40px;
      width: 40px;
    `}
  }
  /* SVG class */
  .cls-2 {
    fill: ${({ theme }) => theme.Logo};
  }
`
