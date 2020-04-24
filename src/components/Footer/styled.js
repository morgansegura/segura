import styled from 'styled-components'
import media from 'styled-media-query'

export const FooterWrapper = styled.div``

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    margin: 0 auto;
    font-size: 14px;
    padding: 2rem 20px;
    color: ${({ theme }) => theme.subheadline};

    background-color: ${({ theme }) => theme.bgBodyDark};

    ${media.greaterThan('medium')`
        padding-left: 80px;
        padding-right: 80px;
    `}
    .social-block {
        /* padding-top: 0.25rem; */
        a {
            color: ${({ theme }) => theme.headline};
            opacity: 0.65;
            transition: color 0.3s ease-out;

            &:hover {
                opacity: 1;
            }
        }
        svg {
            margin-left: 0.5rem;
            width: 17px;
            height: 17px;
        }
    }
    p {
        max-width: 1352px;
        font-family: var(--headline-font);
        color: ${({ theme }) => theme.headline};
        opacity: 0.65;
    }
`
