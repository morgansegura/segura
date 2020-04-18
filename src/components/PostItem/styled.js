import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const PostItemLink = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    ${media.greaterThan('small')`
        margin-bottom: 0;        

        &:hover {
            section {
                box-shadow: 0 25px 25px rgba(0, 0, 0, 0.16);
                transform: translate(0, -20px);
                transition-delay: 0s !important;
            }
        }
    `}
`

export const PostItemWrapper = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    background-color: ${({ theme }) => theme.cards};
    vertical-align: top;
    width: 100%;
    text-align: left;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
    white-space: normal;
    transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    height: 100%;
    padding: 15px;

    ${media.lessThan('large')`

    `}
    ${media.greaterThan('medium')`
        /* max-width: 455px; */
    `}
`

// export const PostItemImg = styled.img`
//   display: block;
// `

export const PostItemImgWrapper = styled.div`
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    position: relative;
    overflow: auto;
    width: 100%;
    padding: 15px 0;
`

export const PostItemDate = styled.time`
    /* margin-bottom: var(--space-sm); */
`

export const PostItemTitle = styled.h5`
    font-family: var(--base-font);
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    padding-top: 10px;
    color: ${({ theme }) => theme.headline};
`

export const PostItemDescription = styled.p`
    display: block;
    font-size: 14px;
    padding-top: 10px;
    font-family: var(--base-font);
    font-weight: 400;
    text-align: left;
    line-height: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text};
`

export const PostItemImg = styled(Img)`
    width: 100%;
`

export const PostItemInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    width: 100%;
`
export const PostItemFooterWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
`
export const PostItemFooter = styled.div`
    font-family: var(--base-font);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.68px;
    text-transform: uppercase;
    width: 100%;
`
export const PostItemCircle = styled.div`
    height: 48px;
    width: 48px;
    border-radius: 100px;
    background-color: white;
    margin-bottom: 12px;
    background-size: 48px 48px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: inline-block;
    line-height: 66px;
    text-align: center;
`

export const PostItemTag = styled.span`
    display: inline-block;
    align-items: center;
    background: ${props => (props.background ? props.background : 'red')};
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    line-height: 1.35;
    font-weight: 500;
    font-family: var(--headline-font);
    text-transform: uppercase;
    padding: 0.25rem 0.75rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 2;
`
