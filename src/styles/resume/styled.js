import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const TimelineItem = styled.div`
  position: relative;
  display: table;
  table-layout: fixed;
  width: 100%;
  padding-bottom: 15px;

  .divider {
    position: absolute;
    top: 0;
    left: 30%;
    bottom: 0;
    width: 1px;
    background-color: #666;

    &:after {
      content: '';
      display: block;
      margin-top: 5px;
      width: 10px;
      height: 10px;
      margin-left: -0.45rem;
      border-radius: 100%;
      border: 2px solid ${({ theme }) => theme.accentSecondary};
      background-color: ${({ theme }) => theme.panelHeader};
    }
  }

  ${customMedia.greaterThan('large')`

  `};
`
export const TimelineLeft = styled.div`
  width: 30%;
  display: table-cell;
  padding-right: 25px;
  min-height: 100%;
  text-align: right;
  vertical-align: top;

  ${customMedia.greaterThan('large')`

  `};
`
export const TimelineRight = styled.div`
  width: 70%;
  display: table-cell;
  padding-left: 25px;
  padding-right: 15px;
  vertical-align: top;

  p {
    font-size: .92em;
  }

  ${customMedia.greaterThan('large')`

  `};
`
export const ItemTitle = styled.h5`
    font-size: 16px;
    margin-bottom: 3px;

  ${customMedia.greaterThan('large')`
    
  `};
`
export const ItemPeriod = styled.h5`
  margin: 3px 0;
  font-size: 14px;
  line-height: 1.4em;

  ${customMedia.greaterThan('large')`
    font-size: 16px;
  `};
`
export const ItemCompany = styled.span`
  display: block;
  color: ${({ theme }) => theme.textOffset};
  margin: 0 0 4px;
  font-size: 12px;
  line-height: 1.45em;

  ${customMedia.greaterThan('large')`
    
  `};
`
export const SkillsInfo = styled.div`

  h4 {
    font-size: 13px;
    line-height: 1.1em;
    position: relative;
    margin: 0 0 4px;    
  }

  ${customMedia.greaterThan('large')`
    
  `};
`
export const SkillValueContainer = styled.div`
  display: flex;

  h4 {
    flex: 1 0 auto;
  }

  ${customMedia.greaterThan('large')`
    
  `};
`
export const SkillValue = styled.div`
  font-size: 11px;
  line-height: 1.1em;
  position: relative;
  float: right;
  margin: 0 0 4px;
  color: #aaa;
  transition: all 2s ease-in-out;

  ${customMedia.greaterThan('large')`
    
  `};
`
export const SkillBarContainer = styled.div`
  position: relative;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.accentSecondary};
  border-radius: 30px;
  height: 10px;
  margin-bottom: 15px;
  width: 100%;

  ${customMedia.greaterThan('large')`
    
  `};
`
export const SkillBarPercentage = styled.div`
  background-color: ${({ theme }) => theme.accentSecondary};
  border: 2px solid ${({ theme }) => theme.panelHeader};
  border-radius: 30px;
  height: 8px;
  padding: 0;
  transition: all 2s ease-in-out;

  &.skill {
    &--45 {
      width: 45%;
    }
    &--50 {
      width: 50%;
    }
    &--60 {
      width: 60%;
    }
    &--65 {
      width: 65%;
    }
    &--70 {
      width: 70%;
    }
    &--75 {
      width: 75%;
    }
    &--80 {
      width: 80%;
    }
    &--85 {
      width: 85%;
    }
    &--90 {
      width: 90%;
    }
    &--95 {
      width: 95%;
    }
    &--96 {
      width: 96%;
    }
    &--97 {
      width: 97%;
    }
    &--98 {
      width: 98%;
    }
    &--98 {
      width: 98%;
    }
    &--100 {
      width: 100%;
    }
  }


  ${customMedia.greaterThan('large')`
    
  `};
`
