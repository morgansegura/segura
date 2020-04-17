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
        background: red;
        width: 100%;
        /* border: 1px solid ${({ theme }) => theme.outlines}; */

        a {
            font-size: 14px;
            font-weight: 400;
            text-decoration: none;

            ${customMedia.greaterThan('large')`
                font-size: 1rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                padding-left: 0.5rem;
            `};
        }
    }
`
