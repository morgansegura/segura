import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const PostCard = styled.article`
  margin-top: 1rem;
`

export const PostCardLink = styled.div`
  text-decoration: none;
  display: block;
  position: relative;
  z-index: 1;

  ${customMedia.greaterThan('small')`       
        &:hover {
            div.post-card-link {
                box-shadow: 0 25px 25px rgba(0, 0, 0, 0.16);
                transform: translate(0, -10px);
                transition-delay: 0s !important;
            }
        }
    `}
`
export const PostCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bgCard};
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
`
export const PostCardHeader = styled.header`
  position: relative;
  z-index: 2;
  padding: 1.25rem 1rem 0;
`
export const PostCardTitle = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  h2 {
    font-family: var(--headline-font);
    font-size: 24px;
    line-height: 30px;
    padding-top: 1.5rem;
    padding-right: 75px;
    color: ${({ theme }) => theme.textCardHeadline};
  }
`
export const PostCardDate = styled.div`
  font-size: 12px;
  line-height: 14px;
  padding: 3px 6px;
  border-radius: 4px;
  color: ${({ theme }) => theme.textCardDate};
  background-color: ${({ theme }) => theme.bgCardDate};
`
export const PostCardImageButton = styled.div`
  position: relative;
  cursor: pointer;
  z-index: 2;
  font-size: 12px;
  line-height: 14px;
  padding: 3px 6px;
  border-radius: 4px;
  margin-left: 0.5rem;
  color: var(--light);
  background-color: ${({ theme }) => theme.actionOnLight2};
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.actionOnLight};
  }
  &:active {
    background-color: ${({ theme }) => theme.actionOnLight2};
  }
`
export const PostCardBody = styled(Link)`
  text-decoration: none;
  p {
    font-size: 14px;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-family: var(--base-font);
    font-weight: 400;
    line-height: 30px;
    flex: 1;
    color: ${({ theme }) => theme.textCardBody};
  }
`
export const PostCardImageWrapper = styled(Link)`
  position: relative;
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  padding: 1.25rem 0 1rem;
  display: none;
  height: 0;
  transition: height 0.2s ease-out;

  &.show-image {
    display: block;
    height: 200px;
  }
`
export const PostCardImage = styled(Img)`
  width: 100%;
  max-height: 200px;
  display: block;
`
export const PostCardButtonBlock = styled.div`
  display: flex;
  align-items: center;
`
export const PostCardTags = styled.span``

export const PostCardFooterWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  padding: 15px;
  border-top: 1px solid ${({ theme }) => theme.bgCardOutline};
`
export const PostCardFooter = styled.footer`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.68px;
  text-transform: uppercase;
  width: 100%;
`
export const PostCardFlex = styled.div`
  position: relative;
  display: flex;

  &.flex-end {
    justify-content: flex-end;
  }
`
export const PostCardAuthor = styled(Link)`
  position: absolute;
  text-decoration: none;
  left: 0;
  height: 30px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textOnLight};
  p {
    position: relative;
    top: -3px;
    margin-left: 0.5rem;
    font-size: 14px;
  }
`
export const PostCardAuthorImg = styled(Img)`
  height: 32px;
  width: 32px;
  border-radius: 100px;
  background-color: white;
  margin-bottom: 12px;
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: inline-block;
  line-height: 66px;
  text-align: center;
`
