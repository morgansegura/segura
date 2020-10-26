import {Link} from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    small: '480px',
    medium: '768px',
    large: '1024px',
    huge: '1400px',
})
export const HeaderWrapper = styled.header`
  transition: height 0.15s ease-in-out;
  width: 100%;
  &.scrolled-header {
      height: 4rem;
  }
  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: auto;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.bgHeader};
    border-bottom: 1px solid ${({theme}) => theme.borderHeader};
    transition: opacity 0.4s ease-out;
  }  
  &.scrolled-header:before {
    opacity: 0.85;
  }
  ${customMedia.greaterThan('large')`
    width: calc(100% - 12rem);
    margin-left: 12rem;
    border-left: 1rem solid transparent;
  `};  
  ${customMedia.greaterThan('huge')`
    border-bottom: 1px solid ${({theme}) => theme.borderContent};
    width: 100%;
    margin-left: auto
  `};   
`
export const Logo = styled(Link)`
    width: 3rem; 
    height: 3rem;
    transition: box-shadow 0.3s eas-out;
    .cls-1, .cls-2 {    
        fill: ${({theme}) => theme.logo};
    }
    &:hover {
        box-shadow: 0 0 3px 3px ${({theme}) => theme.transHover};
    }
`
