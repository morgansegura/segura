import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: ${({ theme }) => theme.accentColor};
  transition: color 0.3s ease-out;

  svg {
    transform: ${({ themeStyle }) =>
      themeStyle === 'light' ? 'rotate(180deg)' : 'rotate()'};
    transition: transform 0.2s ease-out;
  }
  span {
    color: red;
  }
  &:hover {
    color: ${({ theme }) => theme.HamburgerTextHover};
  }

  ${customMedia.greaterThan('large')`
    height: var(--size);
    width: var(--size);
  `}
`
