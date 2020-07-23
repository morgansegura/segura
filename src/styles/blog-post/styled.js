import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const BioImageContainer = styled.div`
  opacity: 1;
  min-height: 100%;
  flex: 0 0 100%;
  max-width: 100%;
  height: 100%;
  transition: opacity 0.1s ease-out;

  .card--hidden & {
    opacity: 0;
    height: 0;
    z-index: -1;
  } 
  ${customMedia.greaterThan('large')`
    flex: 0 0 50%;
    max-width: 50%;
  `};
`
export const BioImage = styled(Img)`
  position: relative;
  z-index: 1;
  height: 100%;
  max-height: 300px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${customMedia.greaterThan('large')`
    max-height: 100%;
  `};
`
export const BioContent = styled.div`
  position: relative;
  padding: 30px 30px 50px;
  flex: 0 0 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.panelOffset};
  height: 100%;
  min-height: 100px;
  transition: relative 0.3s ease-out;

  .card--hidden & {
    height: 145px;
  } 
  button {
    flex: 1 0 auto;
  }
  .category {
    position: relative;
    opacity: 1;
    .card--hidden & {
      opacity: 0;
      height: 0;
      z-index: -1;
    }     
  }  
  h2 {
    position: relative;
    height: 100%;
    font-family: var(--headline-font);
    font-size: 36px;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.textHeadline};
    transition: height 0.1s ease-out;

    .card--hidden & {
      opacity: 0;
      height: 0;
      z-index: -1;
    } 

    ${customMedia.greaterThan('large')`
      font-size: 48px;    
  `};
  }
  span {
    color: ${({ theme }) => theme.textOffset1};
    font-weight: 300;
  }
  p {
    position: relative;
    opacity: 1;
    height: 100%;
    font-size: 14px;
    margin: 0 0 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.85em;
    transition: height 0.3s ease-out;

    .card--hidden & {
      opacity: 0;
      height: 0;
      z-index: -1;
    }   
  }

  ${customMedia.greaterThan('large')`
    padding: 70px 8%;
    flex: 0 0 50%;
    max-width: 50%;
     
  `};
`

export const ContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .card--hidden & {
    position: absolute;
    width: calc(100% - 4rem);
    z-index: 2;
  } 
  ${customMedia.greaterThan('large')`

  `}
`
export const BlogHeader = styled.header`
  
  padding: 2rem;
  h1 {
    font-size: 2rem;
    margin-bottom: 1.125rem;
  }
  h2 {
    font-size: 1.25rem;
  }


  ${customMedia.greaterThan('large')`

  `}
`
export const BlogMeta = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 3px;

  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorDisplay = styled.div`
  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorAvatar = styled(Img)`
  width: 80px;
  border-radius: 100%;
  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorMeta = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.panelOffset};
  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorBio = styled.div`

  ${customMedia.greaterThan('large')`

  `}
`
export const AuthorExcerpt = styled.div`

  ${customMedia.greaterThan('large')`

  `}
`
export const TagsList = styled.div`
  position: relative;
  height: 100%;
  transition: height 0.1s ease-out;

  .card--hidden & {
      opacity: 0;
      height: 0;
      z-index: -1;
  } 

  ${customMedia.greaterThan('large')`

  `}
`
export const Social = styled.div`

  ${customMedia.greaterThan('large')`

  `}
`

export const BlogBody = styled.div`
  
  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
  }
  h1 {
    font-size: ${({ theme }) => theme.headingOne};
  }
  h2 {
    font-size: ${({ theme }) => theme.headingTwo};
  }
  h3 {
    font-size: ${({ theme }) => theme.headingThree};
  }
  h4 {
    font-size: ${({ theme }) => theme.headingFour};
  }
  h5 {
    font-size: ${({ theme }) => theme.headingFive};
  }
  h6 {
    font-size: ${({ theme }) => theme.headingSix};
  }
  p {
    font-size: ${({ theme }) => theme.paragraph};
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: 1.25rem;
  }

  a {
    color: ${({ theme }) => theme.accentSecondary};

    svg {
      fill: ${({ theme }) => theme.accentSecondary};
    }
  }

  ${customMedia.greaterThan('large')`
    padding: 2rem;
  `}
`
export const BlogFooter = styled.footer`

  ${customMedia.greaterThan('medium')`
    
  `}
`
export const ToolbarBlock = styled.div`
  background-color: ${({ theme }) => theme.accentSecondary};
  border-radius: 30px;
  padding: 1rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
`
export const ToolbarButton = styled.div`
  cursor: pointer;
  font-size: 20px;

`
export const AsideToolbar = styled.aside`
  position: fixed;
  right: -100%;
  top: 0;
  padding: 5rem 1rem 1rem;
  max-width: 30%;
  height: 100vh;  
  background-color: ${({ theme }) => theme.panelOffset};
  border-left: 1rem solid ${({ theme }) => theme.panelBody};
  transition: right 0.3s ease-out;

  .toolbar--open & {
    right: 0;
    transition: right 0.3s ease-in;
  }

  ${customMedia.greaterThan('large')`

  `}
`
export const ToolbarSection = styled.aside`

    ${customMedia.greaterThan('large')`

    `}
`
