import styled from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.section`
    background: #fff;
    border-radius: 8px;
    width: 100%;
    /* border: 1px solid #eceff1; */
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
    overflow: hidden;
    margin-bottom: 48px;
    position: relative;
    z-index: 2;

    &.form-card-width {
        background: rgba(255,255,255,.95);
        max-width: 400px;
    }
`
export const CardContent = styled.div`
    padding: 32px 20px 50px;

    ${media.greaterThan('large')`
        padding: 80px 112px;
    `}
`
export const CardSubPartial = styled.div`
    h5 {
        margin: 0 0 8px;
    }
    p {
        margin: 0 0 12px;
    }
`
export const CardFooter = styled.footer`
    background: #eceff1;
    padding: 20px;

    ${media.greaterThan('large')`
        padding: 32px 112px 24px;
    `}
`
