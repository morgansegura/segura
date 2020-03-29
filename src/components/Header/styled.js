import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 1001;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.1),
        0 2px 6px 2px rgba(60, 64, 67, 0.05);
    ${media.greaterThan('large')`

    `}
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    flex-direction: row;
    height: 56px;
    padding: 0 20px;
    margin-left: auto;
    margin-right: auto;
    max-width: 1352px;

    ${media.greaterThan('small')`
        height: 56px;    
        padding: 0 20px;
    `}
`

export const LogoLink = styled(LocalizedLink)`
    position: absolute;
    display: flex;
    overflow: hidden;
    align-items: center;
    width: 30px;

    ${media.greaterThan('small')`
        width: 100px;
    `}

    .logo {
        height: 30px;
        width: 100px;
        background-image: url('./segura-logo.svg');
        background-size: 100px 30px;
        background-position: left center;
        background-repeat: no-repeat;
    }
`

export const NavMenu = styled.div`
    margin-left: auto;
    width: auto;
`

export const NavLanguages = styled.div`
    margin-left: var(--space);
`
