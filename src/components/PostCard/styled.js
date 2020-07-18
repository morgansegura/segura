import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const BlogCard = styled.div`
  display: block;
  position: relative;
  padding: 0;
  background: ${({ theme }) => theme.panelCard};

  a {
    color: #ff714a;
    text-decoration: none;
    outline: none;
    transition: all .3s ease-in-out;
    &:hover {
      color: #ff9800;
      text-decoration: none;
      outline: none;      
    }
  }  
`
export const MediaBlock = styled.div`
  position: relative;
  overflow: hidden;
  transition: scale .2s ease-in-out; 
  max-height: 300px;

  .mask {
    position: absolute;
    background: #4f565e;
    background: rgba(0,0,0,.12);
    display: inline-block;
    font-family: pe-icon-7-stroke;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    width: 100%;
    left: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
        
  } 
`
export const Category = styled.div`
  a {
    position: absolute;
    top: 10px;
    left: 10px;
    background: ${({ theme }) => theme.panelHeader};
    padding: 2px 7px;
    line-height: 1.2em;
    font-size: 11px;
    color: ${({ theme }) => theme.textHeadline};
    z-index: 3;    
  }
`
export const PostImage = styled(Img)`
  transition: all .3s ease-in-out;
  vertical-align: bottom;
  max-width: 100%;
  height: auto;
  border: 0;

  &:hover {
    transform: scale(1.1);
  }    
`
export const PostInfo = styled.div`
  padding: 1em 1.4em 1.4em;
  border: 1px solid ${({ theme }) => theme.panelIcon};
  border-top: 0;
`
export const PostDate = styled.div`
  display: inline-block;
  color: #aaa;
  font-size: 11px;
  line-height: 1.1em;
  font-weight: 300;
`
export const PostItemTitle = styled.h4`
    margin: 5px 0 0;  
`