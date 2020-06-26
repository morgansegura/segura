import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const ListItem = styled.div`
  display: flex;
  padding-bottom: 2rem;
`

export const ListItemContent = styled.div`
  .icon-left & {
    order: 2;
  }
  .icon-right & {
    order: 1;
  }
`

export const ListItemHeading = styled.h5`
  font-size: 1.25rem;
  padding-bottom: 0.35rem;
`
export const ListItemCopy = styled.p`
  font-size: 0.95rem;
`
export const ListItemICon = styled.div`
  font-size: 2.5rem;

  .icon-left & {
    order: 1;
    padding-right: 1rem;
  }
  .icon-right & {
    order: 2;
    padding-left: 1rem;
  }
`

//   ${customMedia.greaterThan('huge')`

//   `}
