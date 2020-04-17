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

export const ToggleContainer = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    z-index: 4;
    font-size: 22px;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.headline};
    top: 14px;
    right: 20px;

    svg {
        transform: ${({ themeStyle }) =>
            themeStyle === 'light' ? 'rotate(180deg)' : 'rotate()'};
        transition: transform 0.2s ease-out;
    }

    ${customMedia.greaterThan('medium')`
        top: 32px;
        right: 80px;
    `}
`
