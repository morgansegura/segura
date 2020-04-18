import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.div``

export const FooterContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    font-size: 14px;
    padding: 2rem 20px;

    background-color: ${({ theme }) => theme.bgBodyDark};

    ${media.greaterThan('medium')`
        padding-left: 80px;
        padding-right: 80px;
    `}

    p {
        max-width: 1352px;
        color: ${({ theme }) => theme.textLight};
    }
`
