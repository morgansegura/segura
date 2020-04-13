import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const HeaderWrapper = styled.div`
    position: relative;
    width: 100%;
    &.site {
        padding: 50px 20px 0;

        ${media.greaterThan('medium')`
            padding: 100px 80px 0;
        `}
    }
    &.blog {
        padding: 20px 20px 0;
        margin-bottom: 20px;

        ${media.greaterThan('medium')`
            padding: 40px 80px 0;
        `}
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
    max-width: var(--width-container);

    ${media.greaterThan('small')`
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
    `}
`

export const LogoLink = styled(Link)`
    position: absolute;
    display: flex;
    overflow: hidden;
    align-items: center;
    display: none;

    ${media.greaterThan('small')`
        display: block;
    `}

    .logo {
        height: 50px;
        width: 50px;
    }
    .cls-2 {
        fill: var(--primary-color);
    }
`

export const NavMenu = styled.div`
    position: relative;
    /* top: 60px; */

    ${media.greaterThan('small')`
        margin-left: auto;
        width: auto;
        top: 0;
    `}
`
export const SecondaryNavMenu = styled.div`
    position: relative;
    padding: 0.125rem 20px;

    ${media.greaterThan('small')`
        margin-left: auto;
        width: auto;
        top: 0;
    `}
`
