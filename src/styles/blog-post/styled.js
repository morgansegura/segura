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
  min-height: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${customMedia.greaterThan('large')`
    flex: 0 0 50%;
    max-width: 50%;
  `};
`
export const BioImage = styled(Img)`
  position: relative;
  height: 100%;
  min-height: 300px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  ${customMedia.greaterThan('large')`
       
  `};
`
export const BioContent = styled.div`
  padding: 30px 30px 50px;
  flex: 0 0 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.panelOffset};
  height: 100%;
  min-height: 100px;

  h2 {
    font-family: var(--headline-font);
    font-size: 36px;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.textHeadline};

    ${customMedia.greaterThan('large')`
      font-size: 48px;    
  `};
  }
  span {
    color: ${({ theme }) => theme.textOffset1};
    font-weight: 300;
  }
  p {
    font-size: 14px;
    margin: 0 0 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 1.85em;
    color: ${({ theme }) => theme.textBody};
  }

  ${customMedia.greaterThan('large')`
    padding: 70px 8%;
    flex: 0 0 50%;
    max-width: 50%;
     
  `};
`

export const BlogHeader = styled.header`
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
export const BlogBody = styled.div`

 h1, h2, h3, h4, h5, h6 {
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
  }
  p {
    margin-bottom: 0.75rem
  }

  a {
    color: ${({ theme }) => theme.accentSecondary};

    svg {
      fill: ${({ theme }) => theme.accentSecondary};
    }
  }

  ${customMedia.greaterThan('large')`

  `}
`
export const BlogFooter = styled.footer`

  ${customMedia.greaterThan('large')`

  `}
`
export const ToolbarBlock = styled.div`
  border-left: 1rem solid ${({ theme }) => theme.accentSecondary};
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
