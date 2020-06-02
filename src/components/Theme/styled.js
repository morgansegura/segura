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
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  /* color: ${({ theme }) => theme.textOnLight}; */
  color: ${({ theme }) => theme.actionOnLight};
  transition: opacity 0.1s ease-in;
  /* background: cyan; */

  svg {
    transform: ${({ themeStyle }) =>
      themeStyle === 'light' ? 'rotate(180deg)' : 'rotate()'};
    transition: transform 0.15s ease-out;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: ${({ theme }) => theme.bgMenuHover};
    width: 80%;
    height: 80%;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }
  &:hover {
    opacity: 1;

    &:after {
      transform: scale(1);
    }
  }

  ${customMedia.greaterThan('large')`

  `}
`
