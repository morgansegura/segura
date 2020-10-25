import {Link} from 'gatsby'
import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  transition: height 0.15s ease-in-out;
  
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
    background-color: ${({theme}) => theme.panelHeader};
    border-bottom: 1px solid ${({theme}) => theme.borderNav};
    transition: opacity 0.4s ease-out;
  }  
  &.scrolled-header:before {
    opacity: 0.85;
  }
`
export const Logo = styled(Link)`
    width: 3rem; 
    height: 3rem;
    .cls-1, .cls-2 {    
        fill: ${({theme}) => theme.accentSecondary};
    }
`
