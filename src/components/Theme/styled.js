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
  color: ${({ theme }) => theme.textHeadline};
  transition: opacity 0.1s ease-in, color 0.1s ease-in;
  svg {
    transform: ${({ themeStyle }) =>
    themeStyle === 'light' ? 'rotate(180deg)' : 'rotate()'};
    transition: transform 0.15s ease-out, fill 0.2s ease-out;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: ${({ theme }) => theme.gray50};
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.textHeadline};

    svg {
      fill: ${({ theme }) => theme.accentSecondary};
    }
    &:after {
      transform: scale(1);
    }
  }
  .squeeze-menu & {
    display: none;
  }
  ${customMedia.greaterThan('large')`

  `}
`
