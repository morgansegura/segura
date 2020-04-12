import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import LocalizedLink from '../LocalizedLink'

export const PostItemLink = styled(LocalizedLink)`
    text-decoration: none;
    display: block;
    margin-bottom: var(--space);
    ${media.greaterThan('small')`
    margin-bottom: 0;
  `}
`

export const PostItemWrapper = styled.section`
    display: inline-block;
    position: relative;
    width: 355px;
    background-color: ${({ theme }) => theme.sectionMediumDark};
    vertical-align: top;
    text-align: left;
    height: 490px;
    margin: 20px;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
    white-space: normal;
    transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
    background-color: ${({ theme }) => theme.subline};
`

// export const PostItemImg = styled.img`
//   display: block;
// `

export const PostItemImgWrapper = styled.div`
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    position: relative;
    clear: both;
    float: left;
    overflow: auto;
    width: 100%;
    padding: 20px;
`
export const PostItemImg = styled(Img)`
    width: 100%;
`

export const PostItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--space-sm) var(--space-sm) var(--space-sm);
    position: relative;
`
export const PostItemFooterWrapper = styled.div`
    height: 46px;
    line-height: 46px;
    border-top: 1px solid ${({ theme }) => theme.subline};
    display: flex;
    width: 100%;
    max-width: 100%;
    justify-content: flex-start;
    align-items: flex-end;
`
export const PostItemFooter = styled.div`
    font-family: var(--base-font);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.68px;
    text-transform: uppercase;
    position: absolute;
    padding-left: 20px;
    padding-right: 20px;
    bottom: 0px;
    margin: 0 auto;
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

export const PostItemDate = styled.time`
    /* margin-bottom: var(--space-sm); */
`

export const PostItemTitle = styled.h5`
    font-family: var(--base-font);
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    margin-top: 12px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.headline};
`

export const PostItemDescription = styled.p`
    display: block;
    font-size: 15px;
    font-family: var(--base-font);
    font-weight: 400;
    text-align: left;
    line-height: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text};
`
