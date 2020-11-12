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
`
export const Options = styled.div` 
  position: absolute;
  width: 175px;
  z-index: -1;
  top: 25px;
  right: -40px;
  border-radius: 4px 0 0 4px;
  box-shadow: -3px 2px 2px 2px rgba(0,0,0,0.1);
  color: ${({ theme }) => theme.textDrawerNavItem};
  background: ${({ theme }) => theme.bgDrawerNavItem};
  transform: translateX(100%); 
  transition: transform 0.3s ease-in-out;

  .color-drawer--open & {
    z-index: 1;
    transform: translateX(0); 
    transition: transform 0.3s ease-in-out;
  } 
  .options-item {
    font-size: 0.75rem;
  }
  .theme-color {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    div {
      display: flex;
      align-items: center;      
      width: 100%;
      padding: 0.5rem 1.5rem;
      background-color: transparent;
      border-bottom: 1px solid ${({ theme }) => theme.borderDrawerNavItem};
      transition: background-color .3s ease-out;  
         
      &:hover {
        color: ${({ theme }) => theme.textDrawerNavItemHover};
        background-color: ${({ theme }) => theme.bgDrawerNavItemHover};
      }
    }
    span {
      position: relative;
      display: flex;
      cursor: pointer;
      margin-right: 0.75rem;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.iconHeader};
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
      background-color: var(--gray-700);
    }
    .alt1-theme {
      background-color: var(--orange-500);
    }
    .alt2-theme {
      background-color: var(--aqua-500);
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
  margin-right: -1rem;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: opacity 0.1s ease-in, color 0.1s ease-in;
  
  svg {
    fill: ${({ theme }) => theme.iconHeader};
    transform: rotate(0);    
    transition: transform 0.15s ease-out, fill 0.2s ease-out;
  } 
  &.color-drawer--open {
    &:after {
      background-color: ${({ theme }) => theme.iconHeaderBGHover};
      transform: scale(1);
    }  
    svg {
      transform: rotate(90deg);
    }
  }     
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    background-color: ${({ theme }) => theme.iconHeaderBGHover};
    width: 45px;
    height: 45px;
    border-radius: 100%;
    transform-origin: 50% 50%;
    transform: scale(0);
    transition: transform 0.2s ease-in;
  }
  &:hover {
    opacity: 1;
    svg {
      fill: ${({ theme }) => theme.iconHeaderHover};
    }
    &:after {
      transform: scale(1);
    }
  }
  .squeeze-menu & {
    display: none;
  }
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
