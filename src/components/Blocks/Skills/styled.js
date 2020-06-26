// import Img from 'gatsby-image'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const SkillSet = styled.div`
  ${customMedia.greaterThan('huge')`
    
  `}
`
export const Headline = styled.h2`
  font-size: 2rem;
  padding-bottom: 1rem;

  span {
    display: block;
  }
  i {
    color: ${({ theme }) => theme.accentOnLight};
  }
`
export const SuperText = styled.p`
  color: gray;
  font-weight: 600;
  padding-bottom: 0.75rem;
  font-family: var(--headline-font);
`
export const BodyCopy = styled.p`
  line-height: 1.4;
  color: ${({ theme }) => theme.textOnLight};
  padding-bottom: 2rem;
`
