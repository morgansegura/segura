import {Link} from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    small: '480px',
    medium: '768px',
    large: '1024px',
    huge: '1600px',
})
export const HeaderWrapper = styled.header`
  transition: height 0.15s ease-in-out;
  width: 100%;
  height: 4rem;
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: auto;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.bgHeader};
    opacity: 0.85;
    border-bottom: 1px solid ${({theme}) => theme.borderHeader};
    transition: opacity 0.4s ease-out;
  }
  &.scrolled-header {
      height: 4rem;
  }  
  ${customMedia.greaterThan('large')`
    width: calc(100% - 12rem);
    height: 6rem;
    margin-left: 12rem;
    border-left: 17px solid transparent;     
      &.scrolled-header:before {
        opacity: 0.85;
      }    
  `};  
  ${customMedia.greaterThan('huge')`
    margin-left: 0;
    border-left: 0 solid transparent;   
    border-bottom: 1px solid ${({theme}) => theme.borderContent};
    width: 100%;
  `};   
`
export const Logo = styled(Link)`
    width: 3rem; 
    height: 3rem;
    .cls-1, .cls-2 {    
        fill: ${({theme}) => theme.logo};
        transition: fill 0.3s ease-out;
    }
    &:hover {
        .cls-1, .cls-2 {    
            fill: ${({theme}) => theme.logoHover};
        }
    }
`
