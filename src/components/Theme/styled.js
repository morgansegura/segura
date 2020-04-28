import styled from 'styled-components';

export const ToggleContainer = styled.div`
    position: relative;
    top: -1px;
    display: flex;
    font-size: 22px;
    margin-right: 1rem;
    cursor: pointer;
    color: ${({ theme }) => theme.headline};
    transition: opacity 0.3s ease-out;

    svg {
        transform: ${({ themeStyle }) =>
            themeStyle === 'light' ? 'rotate(180deg)' : 'rotate()'};
        transition: transform 0.2s ease-out;
    }
    &:hover {
        opacity: 0.8;
    }
`;
