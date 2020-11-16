import Img from 'gatsby-image'
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
export const HeroImageContainer = styled.div`
  min-height: 100%;
  flex: 0 0 100%;
  max-width: 100%;

  ${customMedia.greaterThan('large')`
    flex: 0 0 50%;
    max-width: 50%;
  `};
`
export const HeroImage = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const HeroContent = styled.div`
  .title {
    color: ${({ theme }) => theme.textHeadlineHero};
  }
  .title-alt {
    color: ${({ theme }) => theme.textOffsetHero};
  }
  .body {
    color: ${({ theme }) => theme.textHero};
  }
  .card {
    background-color: ${({ theme }) => theme.bgCardHero};
    border: 1px solid  ${({ theme }) => theme.borderCardHero};
  }
`
