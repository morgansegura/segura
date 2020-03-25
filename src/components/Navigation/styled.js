import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'
import { Link } from 'gatsby'

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const NavigationLink = styled(LocalizedLink)`
    font-size: 1.5rem;
    color: var(--text-dark);
    text-decoration: none;
    position: relative;
    padding: 0 var(--space-sm);
    margin-bottom: var(--space-sm);
    text-align: center;
    margin-left: var(--space-sm);
    margin-bottom: 0;

    &:after {
        content: '';
        display: inline-block;
        width: 0;
        height: 1px;
        background: var(--primary-color);
        position: absolute;
        left: 0;
        bottom: -15px;
        opacity: 0;
        transition: 0.3s ease-in-out;
    }

    &:hover,
    &.active {
        font-weight: normal;
        &:after {
            opacity: 1;
            bottom: -15px;
            width: 100%;
        }
    }
`

export const NavigationButton = styled(Link)`
    background: var(--primary-color);
    font-size: 1.5rem;
    font-weight: 400;
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    /* padding: var(--space-sm) var(--space); */
    padding: 0.25rem 1rem 0 1rem;
    line-height: inherit;
    text-decoration: none;
    text-align: center;
    margin-left: var(--space-sm);
`
