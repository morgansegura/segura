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

export const BlogContainer = styled.article`
  position: relative;
  padding: 120px 40px;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  ${customMedia.greaterThan('huge')`
    max-width: 1240px;
  `}
`

export const BlogContent = styled.main`
  ${customMedia.greaterThan('medium')`
    flex: 1 1 auto;
    flex-basis: 66.666%;
    margin-left: 280px;
  `}
`
export const BlogFixedSidebar = styled.div`
  display: none;

  ${customMedia.greaterThan('medium')`
    display: block;
    min-width: 280px;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: auto;
    overflow-y: auto;
    position: fixed;
    height: 100%;
    left: 0;
    top: 60px;    
  `}
`
export const BlogSidebar = styled.aside`
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
    letter-spacing: normal;
    text-decoration: inherit;
    text-transform: inherit;
    color: #212121;
    padding-top: 40px;
    padding-bottom: 12px;
    padding-left: 24px;
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.5;
  }

  ${customMedia.greaterThan('medium')`
    width: 280px; 
  `}
`
export const BlogHeader = styled.section`
  padding-top: 100px;
  margin-bottom: 48px;
  max-width: 66.666%;
  flex-basis: 66.666%;
`
export const BlogHeaderMeta = styled.div`
  padding: 1rem 0;
  border: 1px solid #ccc;
`
export const BlogTitle = styled.h1`
  font-size: 3.125rem;
  font-weight: 400;
`
export const BlogParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  font-family: $base-font;
  letter-spacing: 0.03125em;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const BlogDescription = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.bgCardDate};
  padding: 1.25rem 1rem 1rem;
  border: solid ${({ theme }) => theme.accentOnDark};
  border-width: 1px 1px 1px 3px;

  h2 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -0.5rem;
    left: -3px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.025rem;
    background-color: ${({ theme }) => theme.accentOnDark};
    color: ${({ theme }) => theme.textOnDark} !important;
    padding: 0.65rem 1rem 0.45rem 1rem;
    border-radius: 0 0 10px 0;
  }
  p {
    font-weight: 300;
    letter-spacing: -0.003em;
    font-family: var(--serif-font);
    margin-top: 1rem;
    font-size: 18px;
    line-height: 36px;
  }
`

export const BlogImageWrapper = styled.div`
  overflow: hidden;
  margin-top: 2rem;

  h3 {
    color: offset;
  }
`

export const BlogImage = styled(Img)``

export const List = styled.ul``
export const ListItem = styled.li`
  padding: ;
`

export const BlogPost = styled.div`
  h1 {
    font-size: 40px;
    line-height: 60px;
    padding-bottom: 1rem;
  }
  h2 {
    font-size: 21px;
    font-weight: 600;
    line-height: 1.18;
    letter-spacing: -0.022em;
    margin-top: 1.23em;
    margin-bottom: -0.31em;
  }
  h3 {
    font-size: 30px;
    line-height: 45px;
  }
  h4 {
    font-size: 25px;
    line-height: 40px;
  }
  h5 {
    font-size: 20px;
    line-height: 35px;
  }
  h6 {
    font-size: 18px;
    line-height: 27px;
  }
  p {
    font-weight: 300;
    letter-spacing: -0.003em;
    font-family: var(--serif-font);
    margin-bottom: -0.46em;
    margin-top: 1.23em;
    font-size: 18px;
    line-height: 36px;
  }
  img,
  pre {
    margin-top: 40px;
  }
  ul {
    padding: 1.5rem 0;
    li {
      &:before {
        content: '•';
        padding-right: 0.5rem;
        color: blue;
      }
    }
  }
`

export const BlogDate = styled.div`
  font-size: 12px;
  line-height: 14px;
  padding: 3px 6px;
  border-radius: 4px;
  color: ${({ theme }) => theme.textCardDate};
  background-color: ${({ theme }) => theme.bgCardDate};
`

export const BlogFlex = styled.div`
  position: relative;
  display: flex;

  &.flex-end {
    justify-content: flex-end;
  }
`
export const BlogAuthor = styled(Link)`
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
export const BlogAuthorImg = styled(Img)`
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

export const BlogSocialBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;

  svg {
    font-size: 25px;
    margin-right: 0.25rem;
  }
`

export const BlogSocial = styled.div``

export const BlogFooter = styled.footer``
