import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const HeaderWrapper = styled.div`
    &.site {
        position: relative;
        width: 100%;
        padding: 50px 20px 0;

        ${media.greaterThan('medium')`
            padding: 100px 80px 0;
        `}
    }
    &.blog {
        padding: 0 20px;
        margin-bottom: 40px;
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

export const LogoLink = styled(LocalizedLink)`
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
