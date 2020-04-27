import { Link } from 'gatsby';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
    small: '480px',
    medium: '768px',
    large: '1024px',
    huge: '1400px',
});

export const HeaderWrapper = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.outlines};
`;

export const HeaderContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--width-container);

    padding: 0.75rem 3vw;

    ${customMedia.greaterThan('medium')`
		padding: 1.125rem 6vw;
	`}
`;

export const LogoLink = styled(Link)`
    display: flex;
    overflow: hidden;
    align-items: center;

    .logo {
        height: 30px;
        width: 30px;

        ${customMedia.greaterThan('medium')`
            height: 50px;
            width: 50px;
        `}
    }
    .cls-2 {
        fill: ${({ theme }) => theme.headline};
    }
`;

export const NavMenu = styled.div`
    position: relative;
    margin-left: auto;
    width: auto;
    top: 0;
`;
export const SecondaryNavMenu = styled.div`
    position: relative;
    padding: 0.125rem 20px;

    ${customMedia.greaterThan('small')`
        margin-left: auto;
        width: auto;
        top: 0;
    `}
`;
