import Img from 'gatsby-image'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const HeroBlock = styled.section`
  background-color: ${({ theme }) => theme.bgHero};
`
export const BioImageContainer = styled.div`
  min-height: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${customMedia.greaterThan('large')`
    flex: 0 0 50%;
    max-width: 50%;
  `};
`
export const BioImage = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const BioContent = styled.div`
  h2 {
    color: ${({ theme }) => theme.textHeadlineHero};
  }
  span {
    color: ${({ theme }) => theme.textOffsetHero};
  }
  p {
    color: ${({ theme }) => theme.textHero};
  }
  .card {
    background-color: ${({ theme }) => theme.bgCardHero};
    border: 1px solid  ${({ theme }) => theme.borderCardHero};
  }
`

export const SkillsBlock = styled.section`
  background-color: ${({ theme }) => theme.bgBlock1};
  
  h3 {
    color: ${({ theme }) => theme.textHeadlineBlock1};
    border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock1};
    background-color: ${({ theme }) => theme.bgHeadlineBlock1};
  }
  h4 {color: ${({ theme }) => theme.textHeadlineOffsetBlock1};}
  p {
    color: ${({ theme }) => theme.textCardBlock1};
  }
  .card {
    background-color: ${({ theme }) => theme.bgCardBlock1};
    border: 1px solid ${({ theme }) => theme.borderCardBlock1};
  }
`

export const StackBlock = styled.section`
  background-color: ${({ theme }) => theme.bgPanel7};
  h3 {
    color: ${({ theme }) => theme.textOffset3};
  }
  h4 {}
  p {
    color: ${({ theme }) => theme.textBase2};
  }
  .card {
    background-color: ${({ theme }) => theme.bgPanel1};
    a {
      color: var(--gray-600);
    }
  }
  .sass {
    color: #c69;
  }
  .vue {
    color: #41B883;
  }
  .laravel {
    color: #F05340;
  }
  .tailwind {
    color: rgb(20, 180, 198);
  }
  .react {
    color: #61DBFB;
  }
  .node {
    color: #3C873A;
  }
`

export const StudyBlock = styled.section`
  background-color: ${({ theme }) => theme.bgPanel7};
  h3 {
    color: ${({ theme }) => theme.textOffset3};
  }
  h4 {}
  p {
    color: ${({ theme }) => theme.textBase2};
  }
  .card {
    background-color: ${({ theme }) => theme.bgPanel1};
    a {
      color: var(--gray-600);
    }
  }
  .sass {
    color: #c69;
  }
  .vue {
    color: #41B883;
  }
  .laravel {
    color: #F05340;
  }
  .tailwind {
    color: rgb(20, 180, 198);
  }
  .react {
    color: #61DBFB;
  }
  .node {
    color: #3C873A;
  }
`

export const TestimonialBlock = styled.section`
  background-color: ${({ theme }) => theme.bgPanel7};
  h3 {
    color: ${({ theme }) => theme.textOffset3};
  }
  h4 {}
  p {
    color: ${({ theme }) => theme.textBase2};
  }
  .card {
    background-color: ${({ theme }) => theme.bgPanel1};
    a {
      color: var(--gray-600);
    }
  }
  .sass {
    color: #c69;
  }
  .vue {
    color: #41B883;
  }
  .laravel {
    color: #F05340;
  }
  .tailwind {
    color: rgb(20, 180, 198);
  }
  .react {
    color: #61DBFB;
  }
  .node {
    color: #3C873A;
  }
`

export const Button = styled(Link)`
   background-color: ${({ theme }) => theme.bgButton};
   color: ${({ theme }) => theme.textButton};
   transition: all 0.3s ease-out;
   &:hover {
     background-color: ${({ theme }) => theme.bgButtonHover};
     color: ${({ theme }) => theme.textButtonHover};
     box-shadow: 2px 0 10px 2px ${({ theme }) => theme.transHover}; 
   }
`
