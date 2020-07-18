import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;

  &.section--inner {
    padding: 25px 30px 60px;
    margin-left: 0;
  }
  &.section--offset-light {
    background-color: ${({ theme }) => theme.panelOffset};
  }
  &.section--offset-dark {
    background-color: ${({ theme }) => theme.hoverNav};
  }
  &.bt-1 {
    border-top: 1px solid ${({ theme }) => theme.panelIcon};
  }
  .t-center {
    text-align: center;
  }
  .w-100 {
    width: 100%;
  }
  ${customMedia.greaterThan('large')`
    
  `};
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
    line-height: 1.2em;
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
export const ButtonBlock = styled.div`
  margin-top: 30px;
`
export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  position: relative;
  padding: 0.8em 2em;
  margin-bottom: 0.25em;
  font-size: 1em;
  line-height: 1.2;
  border: 0;
  outline: 0;
  border: 2px solid ${({ theme }) => theme.accentSecondary};
  color: ${({ theme }) => theme.textButton};
  text-shadow: none;
  background-color: transparent;
  border-radius: 0;
  font-family: var(--headline-font);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.accentSecondary};
    border-color: ${({ theme }) => theme.accentSecondary};
    color: #fff;
  }
`
export const TitleBlock = styled.div`
  h3 {
    display: inline-block;
    margin: 0 0 20px;
    padding-bottom: 3px;    
    font-size: 21px;

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin-top: -1px;
      background-color: ${({ theme }) => theme.accentPrimary};
    }
  }
`

export const ListColumn = styled.div`
  
  .list-column--with-icon {
    position: relative;
    text-align: left;
    width: 100%;
    display: table;
    margin: 0;
    padding: 10px 10px 10px 0;
  }
`
export const ListColumnBody = styled.div`
  position: relative;
  display: table-cell;
  padding: 0;
  vertical-align: middle;
  h4 {
    position: relative;
    font-weight: 600;
    font-style: normal;
    line-height: 1.5em;    
  }
  p {
    margin: 0 0 10px;
    font-weight: 400;
  }  
`
export const ListItemIcon = styled.div`
    display: table-cell;
    width: 54px;
    padding-right: 25px;  

    svg, i {
      position: relative;
      font-size: 42px;
      color: ${({ theme }) => theme.textOffset1};     
    }
`

export const StackContainer = styled.div`
  width: 100%;
`
export const StackIconContainer = styled.div`    
    display: flex;
    flex-wrap: wrap;
    align-items: center;    
    justify-content: space-between;

    h5 {
      color: ${({ theme }) => theme.textOffset};
    }
  .stack-icons {
    font-size: 4rem;
    color: ${({ theme }) => theme.textOffset};
    transition: color 0.3s ease-out;

    &.scomp {
      color:  #c69;
    } 
    &.sass {
      color:  #c69;
    } 
    &.react {
      color: #00d8ff;  
    }
    &.vue {
      color: #42b883;
    }
    &.node {
      color: #6cc24a;      
    }
    &.laravel {
      color: #F05340;      
    }
  }
    a {
      color: ${({ theme }) => theme.textOffset};
      text-decoration: none;
      transition: color 0.3s ease-out;

      .react, .python, .vue, .laravel, .node {
        font-size: 4rem;

      }      
      &:hover {
        .react, .python, .vue, .laravel, .node {
          color: ${({ theme }) => theme.accentPrimary};
        }
        color: ${({ theme }) => theme.accentPrimary};
      }    
    }
`

export const Badge = styled.span`
  border-radius: 1rem;
  padding: 0.15rem 0.25rem 0.15rem;
  line-height: 1;
  display: inline-block;

  font-size: 0.65rem;
  top: -0.5rem;
  left: -1px;
  color: white;
  position: relative;
  background-color: ${({ theme }) => theme.accentSecondary}; 
`

// Cards
export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.panelCardOffset};
  border: 1px solid ${({ theme }) => theme.panelIcon};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
`
export const CardHeader = styled.header`
  padding-top: 1.25rem;
  padding-left: 1.125rem;
`
export const CardBody = styled.div`
  padding: 1rem;
`
export const CardFooter = styled.div`
  padding: 1rem;
`
// Testimonials
export const TestimonialItem = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const TestimonialContent = styled.div`
  padding-left: 50px;
  width: 100%;
  height: auto;
`
export const TestimonialText = styled.div`
    padding: 1.4em 1.8em;
    background-color: ${({ theme }) => theme.panelCardOffset};
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.borderDefault};
    width: 100%;
    position: relative;
    margin: 0;
    z-index: -1;
`
export const TestimonialCredits = styled.div`
    margin-top: 10px;
    display: block;
    position: relative;
`
export const TestimonialPhoto = styled.div`
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    overflow: hidden;
    margin: 0;
    top: -37px;
    border-radius: 40px;
    z-index: 1;

    img {
      width: 100%;
      border-radius: 100%;
      border: 2px solid ${({ theme }) => theme.borderDefault};
    }
`
export const TestimonialAuthorInfo = styled.div`
  display: inline-block;
  position: relative;
  padding-left: 92px;
`
export const TestimonialAuthor = styled.p`
    display: inline-block;
    font-size: 1.07em;
    color: ${({ theme }) => theme.textHeadline};
    margin: 0;
    font-weight: 600;
    text-align: center;
`
export const TestimonialFirm = styled.p`
    font-size: 11px;
    line-height: 1.3em;
    margin: 0;
    font-weight: 400;
    color: ${({ theme }) => theme.textOffset};
`