import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})
export const ThemeSelector = styled.div`
  position: relative;
  ${customMedia.greaterThan('large')`

  `}
`
export const FontToolbar = styled.div` 

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.textOffset};

  .normal, .medium, .large {
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.25rem 1.25rem;
    border: solid ${({ theme }) => theme.textBody};

  }
  .normal {
    border-width: 1px;
    border-radius: 6px 0 0 6px;
  }
  .medium {
    border-width: 1px 0;
  }
  .large {
    border-width: 1px;
    border-radius: 0 6px 6px 0;
  }
`
export const Options = styled.div` 
  position: absolute;
  z-index: -1; 
  opacity: 0;
  top: 1.25rem;
  right: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 4px 0 4px 4px;
  box-shadow: 0 0 0 2px rgba(0,0,0,0.1);
  background: ${({ theme }) => theme.panelOffset}; 
  transition: opacity 0.3s ease-out;

  .color-drawer--open & {
    opacity: 1;
    z-index: 1;
  } 

  .options-item {
  }
  .theme-color {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      /* display: none; */
      cursor: pointer;
      margin-left: 0.5rem;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.accentPrimary};
      box-shadow: 0 0 0 3px rgba(0,0,0,0);
      transition: box-shadow 0.3s ease-out;

      &:hover {
        box-shadow: 0 0 0 4px rgba(0,0,0,0.1);
      }     
    }
    .light-theme, .dark-theme, .alt1-theme, .alt1-theme, .alt2-theme {
      /* background-color: ${({ theme }) => theme.panelBody}; */
    }
    .light-theme {
      background-color: white;      
    }
    .dark-theme {
      background-color: #222;
    }
    .alt1-theme {
      background-color: var(--accent4);
    }
    .alt2-theme {
      background-color: #073642;
    }
  }

  ${customMedia.greaterThan('large')`

  `}
`
export const ToggleContainer = styled.div`
  position: relative;
  z-index: 11;
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
    transform: rotate(0);    
    transition: transform 0.15s ease-out, fill 0.2s ease-out;
  }

  &.color-drawer--open {
    svg {
      transform: rotate(90deg);
    }
  }     

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: ${({ theme }) => theme.hoverNav};
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
