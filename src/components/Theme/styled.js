import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
    small: '480px',
    medium: '768px',
    large: '1024px',
    huge: '1400px',
});

export const ToggleContainer = styled.button`
    position: absolute;
    background: transparent;
    display: flex;
    border: none;
    z-index: 4;
    font-size: 22px;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.headline};
    right: 7vw;
    transition: opacity 0.3s ease-out;

    svg {
        transform: ${({ themeStyle }) =>
            themeStyle === 'light' ? 'rotate(180deg)' : 'rotate()'};
        transition: transform 0.2s ease-out;
    }
    &:hover {
        opacity: 0.8;
    }
    ${customMedia.greaterThan('medium')`
        right: 8vw;
    `}
`;
