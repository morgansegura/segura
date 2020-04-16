import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    xsmall: '250px',
    small: '450px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
    huge: '1400px',
})

import { Link } from 'gatsby'

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    ${customMedia.greaterThan('small')`
        /* right: 0; */
    `}
`

export const NavigationLink = styled(Link)`
    font-weight: 500;
    color: ${({ theme }) => theme.links};
    text-decoration: none;
    position: relative;
    padding: 0 0.75rem;
    text-align: center;
    margin-bottom: 0;
    line-height: 1.75;
    font-size: 0.875rem;

    ${customMedia.greaterThan('small')`
        font-size: 1rem;
    `}

    &.active {
        color: ${({ theme }) => theme.primaryColor};
        &:after {
            content: '';
            display: inline;
            height: 2px;
            background-color: ${({ theme }) => theme.primaryColor};
            position: absolute;
            opacity: 1;
            left: 50%;
            transform: translateX(-50%);
            bottom: -13px;
            width: calc(100% - 1rem);
            transition: width 0.3s ease-out;
            ${customMedia.greaterThan('medium')`
                background-color: transparent;
            `}
        }
    }
    &:hover {
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
    ${customMedia.greaterThan('small')`
        padding: 0.25rem 1rem;
        margin-left: var(--space-sm);        
    `}

    &:hover {
        background: var(--primary-dark-color);
    }
`
