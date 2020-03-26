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
    font-size: 14px;
    color: var(--text-dark);
    text-decoration: none;
    position: relative;
    padding: 0 0.75rem;
    text-align: center;
    margin-bottom: 0;
    line-height: 1.75;

    &:after {
        /* content: '';
        display: inline-block;
        width: 0;
        height: 3px;
        border-radius: 20px;
        background: var(--secondary-color);
        position: absolute;
        left: 0;
        bottom: -15px;
        opacity: 0;
        transition: 0.3s ease-in-out; */
    }

    &:hover,
    &.active {
        font-weight: normal;
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
    color: #fff;
    display: inline-block;
    font-family: var(--google-font);
    padding: 0.25rem 1rem;
    line-height: 1.75;
    text-decoration: none;
    text-align: center;
    margin-left: var(--space-sm);
    transition: background-color 0.3s ease-out;

    &:hover {
        background: var(--primary-dark-color);
    }
`
