import styled from 'styled-components';

export const Main = styled.div``;
export const Wrapper = styled.div`
    position: relative;
    left: 0;
    transition: left 0.1s ease-out;

    &.drawer-open {
        left: -260px;
        transition: left 0.2s ease-out;
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
    width: 260px;
    padding-left: 40px;
`;
export const NavDrawer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 80px;
`;
export const DrawerToggle = styled.div`
    font-size: 22px;
    cursor: pointer;
    transition: opacity 0.3sec eas-out;

    svg {
        fill: ${({ theme }) => theme.headline};
    }
    &:hover {
        opacity: 0.8;
    }
`;
