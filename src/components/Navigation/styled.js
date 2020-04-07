import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'
import { Link } from 'gatsby'

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
    width: 100%;

    ${media.greaterThan('small')`
        /* right: 0; */
    `}
`

export const NavigationLink = styled(LocalizedLink)`
    font-size: 14px;
    font-weight: 600;
    color: var(--gray-medium);
    font-family: var(--headline-font);
    text-decoration: none;
    position: relative;
    padding: 0 0.75rem;
    text-align: center;
    margin-bottom: 0;
    line-height: 1.75;

    ${media.greaterThan('small')`
        font-size: 1rem;
    `}
    &.active {
        color: var(--gray-extra-light);
    }
    &:hover,
    &.active {

        &:after {
            /* opacity: 1;
            bottom: -15px;
            width: 100%; */
        }
    }
`

export const NavigationButton = styled(Link)`
    background: var(--primary-color);
    font-size: 14px;
    font-weight: 400;
    border-radius: 4px;
    display: inline;
    color: #fff;
    font-family: var(--headline-font);
    padding: 0.25rem 0.5rem;
    line-height: 1.75;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.3s ease-out;
    margin-left: 0.75rem;
    ${media.greaterThan('small')`
        padding: 0.25rem 1rem;
        margin-left: var(--space-sm);        
    `}

    &:hover {
        background: var(--primary-dark-color);
    }
`
