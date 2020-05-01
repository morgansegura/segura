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
  position: relative;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.outlinesDark};

  &.header--show {
  }
  &.header--hide {
    /* display: none; */
  }
`

export const HeaderContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem 20px;

  ${customMedia.greaterThan('medium')`
        padding: 0.75rem 40px;
	`}
`

export const HeaderRight = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoLink = styled(Link)`
  position: relative;
  left: -3px;
  display: flex;
  overflow: hidden;
  align-items: center;

  .logo {
    height: 30px;
    width: 30px;

    ${customMedia.greaterThan('medium')`
            height: 40px;
            width: 40px;
        `}
  }
  /* SVG class */
  .cls-2 {
    fill: ${({ theme }) => theme.headline};
  }
`
