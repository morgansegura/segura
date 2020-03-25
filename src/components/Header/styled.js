import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 1001;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.95);
    border-bottom: 1px solid #efefef;
    ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--width-container);
    margin: 0 auto;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.25rem 1rem 1.25rem 0;
    position: relative;
    flex-direction: row;
`

export const LogoLink = styled(LocalizedLink)`
    position: absolute;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
    padding: 0 1rem 0 1rem;
    width: 85px;
    margin-left: 0;
`

export const NavMenu = styled.div`
    margin-left: auto;
    width: auto;
`

export const NavLanguages = styled.div`
    margin-left: var(--space);
`
