import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.div`
    margin-top: 3rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`

export const FooterContainer = styled.div`
    width: 100%;
    max-width: 1352px;
    margin: 0 auto;
    padding: 1rem 20px;
    ${media.greaterThan('large')`
    /* padding: calc(var(--space)*1.3) var(--space-sm); */
  `}

    p {
        color: #454545;
    }
`
