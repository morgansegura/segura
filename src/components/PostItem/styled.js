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
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
        0 1px 3px 1px rgba(60, 64, 67, 0.15);
    overflow: hidden;
    justify-content: space-between;
    /* .homepage & {
    flex-direction: row;
  } */
`

// export const PostItemImg = styled.img`
//   display: block;
// `

export const PostItemImgWrapper = styled.div`
    width: 100%;
    max-height: 140px;
    overflow: hidden;
    position: relative;
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
export const PostItemFooter = styled.div`
    display: flex;
    border-top: 1px solid #eceff1;
    width: 100%;
    padding: 0.5rem var(--space-sm);
    position: relative;
    justify-content: space-between;
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
    /* font-size: 2rem;
    font-weight: 700;
    line-height: 140%; */
    color: #454545;
`

export const PostItemDescription = styled.p`
    /* margin-top: var(--space-sm); */
`
