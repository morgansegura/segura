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

export const HeaderWrapper = styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    &.site {
        padding: 0.75rem 60px 0.75rem 20px;
        border-bottom: 1px solid ${({ theme }) => theme.outlines};

        ${customMedia.greaterThan('medium')`
            padding: 30px 120px 30px 80px;
        `}
    }
    &.blog {
        padding: 0.75rem 60px 0.75rem 20px;
        border-bottom: 1px solid ${({ theme }) => theme.outlines};

        ${customMedia.greaterThan('medium')`
            padding: 30px 120px 30px 80px;
        `}
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;

    margin-left: auto;
    margin-right: auto;
    max-width: var(--width-container);
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
`

export const LogoLink = styled(Link)`
    position: absolute;
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
`

export const NavMenu = styled.div`
    position: relative;
    margin-left: auto;
    width: auto;
    top: 0;
`
export const SecondaryNavMenu = styled.div`
    position: relative;
    padding: 0.125rem 20px;

    ${customMedia.greaterThan('small')`
        margin-left: auto;
        width: auto;
        top: 0;
    `}
`
