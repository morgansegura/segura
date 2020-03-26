import styled from 'styled-components'
import media from 'styled-media-query'

export const Card = styled.section`
    background: #fff;
    border-radius: 8px;
    border: 1px solid #eceff1;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
    margin: 0 auto 20px;
    overflow: hidden;
`
export const CardContent = styled.div`
    padding: 32px 20px 50px;

    ${media.greaterThan('medium')`
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
