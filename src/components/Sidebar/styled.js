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

export const Sidebar = styled.aside`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-bottom: 30px;

    ${customMedia.greaterThan('large')`
        flex-direction: column;
        height: 100%;
        justify-content: flex-start;
    `};

    .list-nav {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 1rem;
        border: 1px solid ${({ theme }) => theme.outlines};

        ${customMedia.greaterThan('large')`
            margin-top: 30px;
            max-width: 200px;
            padding-top: 1rem;
            padding-bottom: 1rem;
            padding-left: 1rem;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        `};

        a {
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            padding-left: 1rem;

            ${customMedia.greaterThan('large')`
                font-size: 1rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 0.5rem;
            `};
        }
    }
`
