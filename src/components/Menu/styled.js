import { Link } from 'gatsby'
import styled from 'styled-components'

export const MainNavDrawer = styled.div`
    background-color: ${({ theme }) => theme.panelOffset};
`
export const Logo = styled(Link)`
    width: 3rem; 
    height: 3rem;
    .cls-1, .cls-2 {    
        fill: ${({theme}) => theme.accentSecondary};
    }
`
export const MenuItem = styled(Link)`
    padding: 0.65rem 1rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0,0,0,.125);
    transition: all 0.3 ease-out;
    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
        color: ${({theme}) => theme.accentSecondary};
    }
`

