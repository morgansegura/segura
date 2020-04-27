import { Link } from 'gatsby';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
    small: '480px',
    medium: '768px',
    large: '1024px',
    huge: '1400px',
});
export const Main = styled.div``;
export const Wrapper = styled.div`
    position: relative;
    left: 0;
    transition: left 0.3s ease-in;
    &.drawer-open {
        left: -230px;
        transition: left 0.3s ease-out;
    }
`;
export const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
    max-width: var(--width-container);
`;
export const NavDrawerWrapper = styled.div`
    position: fixed;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.2);
    top: 0;
    right: 0;
    height: 100vh;
    width: 230px;
    padding-left: 3vw;
`;
export const NavDrawer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 6vh;
`;
export const DrawerToggle = styled.div`
    position: absolute;
    right: 3vw;
    font-size: 22px;
    cursor: pointer;
    transition: opacity 0.3sec eas-out;

    ${customMedia.greaterThan('medium')`
		right: 6vw;
	`}

    svg {
        fill: ${({ theme }) => theme.headline};
    }
    &:hover {
        opacity: 0.8;
    }
`;
