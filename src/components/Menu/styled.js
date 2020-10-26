import { Link } from 'gatsby'
import styled from 'styled-components'

export const MainNavDrawer = styled.div`
    background-color: ${({ theme }) => theme.bgDrawer};
    border-right: 1px solid ${({ theme }) => theme.borderDrawer};
`
export const Logo = styled(Link)`
    width: 3rem; 
    height: 3rem;
    .cls-1, .cls-2 {    
        fill: ${({theme}) => theme.logo};
    }
`
export const MenuItem = styled(Link)`
    padding: 0.65rem 1rem;
    background-color: ${({ theme }) => theme.bgDrawerNavItem};
    color: ${({ theme }) => theme.textDrawerNavItem};
    border-bottom: 1px solid ${({ theme }) => theme.borderDrawerNavItem};
    transition: all 0.3 ease-out;
    &:hover {
        background-color: ${({ theme }) => theme.bgDrawerNavItemHover};
        border-bottom-color: ${({ theme }) => theme.borderDrawerNavItem};
        color: ${({theme}) => theme.textDrawerNavItemHover};
    }
`

