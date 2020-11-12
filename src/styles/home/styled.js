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
  h1, h2 {
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
    color: ${({ theme }) => theme.borderHeadlineBlock1};
    border: 1px solid ${({ theme }) => theme.borderHeadlineBlock1};
    border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock1};
    background-color: ${({ theme }) => theme.bgHeadlineBlock1};  
  }
  .card {
    background-color: ${({ theme }) => theme.bgCardBlock1};
    border: 1px solid ${({ theme }) => theme.borderCardBlock1};
      h4 {
        color: ${({ theme }) => theme.textHeadlineCardBlock1};
      }
      p {
        color: ${({ theme }) => theme.textCardBlock1};
      }      
  }
`

export const StackBlock = styled.section`
  background-color: ${({ theme }) => theme.bgBlock2};
  h3 {
    color: ${({ theme }) => theme.borderHeadlineBlock2};
    border: 1px solid ${({ theme }) => theme.borderHeadlineBlock2};
    border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock2};
    background-color: ${({ theme }) => theme.bgHeadlineBlock2}; 
  }
  h4 {}
  p {
    color: ${({ theme }) => theme.textBlock2};
  }
  .card {
    background-color: ${({ theme }) => theme.bgCardBlock2};
    .icon-container {
      background-color: ${({ theme }) => theme.textHeadlineCardBlock2};
    }
    p {
      color: ${({ theme }) => theme.textCardBlock2};
      background-color: ${({ theme }) => theme.borderCardBlock2};
    }
    a {
      opacity: 0.9;
      transition: opacity 0.3s ease-out;      
      &:hover {
        opacity: 1;        
      }
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
  .graphql {
    color: #de33a6;
  }
  .git {
    color: #eb4d27;
  }
  .vscode {
    fill: #0166b8;
  }
  .nuxt {
    color: #0f8775;
  }
  .gatsby {
    fill: #663399;
  }
  .netlify {
    fill: #4c9bbe;
  }
`

export const StudyBlock = styled.section`
  background-color: ${({ theme }) => theme.bgBlock3};
  h3 {
    color: ${({ theme }) => theme.borderHeadlineBlock3};
    border: 1px solid ${({ theme }) => theme.borderHeadlineBlock3};
    border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock3};
    background-color: ${({ theme }) => theme.bgHeadlineBlock3}; 
  }
  h4 {}
  p {
    color: ${({ theme }) => theme.textBlock3};
  }
  .card {
    background-color: ${({ theme }) => theme.bgCardBlock3};
    border: 1px solid ${({ theme }) => theme.borderCardBlock3};
    p {
      color: ${({ theme }) => theme.textCardBlock3};
    }    
    a {
      color: var(--gray-600);
    }
  }

`

export const TestimonialBlock = styled.section`
  background-color: ${({ theme }) => theme.bgBlock4};
  h3 {
    color: ${({ theme }) => theme.borderHeadlineBlock4};
    border: 1px solid ${({ theme }) => theme.borderHeadlineBlock4};
    border-left: 5px solid ${({ theme }) => theme.borderHeadlineBlock4};
    background-color: ${({ theme }) => theme.bgHeadlineBlock4}; 
  }
  h4 {}
  p {
    color: ${({ theme }) => theme.textBlock4};
  }
  .avatar {
    border: 4px solid ${({ theme }) => theme.borderCardBlock4};
  }
  .card {
    border: 1px solid ${({ theme }) => theme.borderCardBlock4};
    background-color: ${({ theme }) => theme.bgCardBlock4};
    p {
      color: ${({ theme }) => theme.textCardBlock4};
    }
    a {
      color: var(--gray-600);
    }
  }
  .label {
    background-color: ${({ theme }) => theme.borderCardBlock4};
  }
  .social {
    border: 1px solid ${({ theme }) => theme.borderCardBlock4};
    a {
      color: ${({ theme }) => theme.borderCardBlock4};
      transition: all 0.3s ease-out;
      &:hover {
        color: ${({ theme }) => theme.textCardBlock4};
      }
    }
  }
  .email {
   background-color: ${({ theme }) => theme.bgButton};
   color: ${({ theme }) => theme.textButton};
   transition: all 0.3s ease-out;
   &:hover {
     background-color: ${({ theme }) => theme.bgButtonHover};
     color: ${({ theme }) => theme.textButtonHover};
     box-shadow: 2px 0 10px 2px ${({ theme }) => theme.transHover}; 
   }
  }
`

export const Button = styled(Link)`
   background-color: ${({ theme }) => theme.bgButton};
   color: ${({ theme }) => theme.textButton};
   transition: all 0.3s ease-out;
   &:hover {
     background-color: ${({ theme }) => theme.bgButtonHover};
     color: ${({ theme }) => theme.textButtonHover};
     // box-shadow: 2px 0 10px 2px ${({ theme }) => theme.bgButton}; 
   }
`
