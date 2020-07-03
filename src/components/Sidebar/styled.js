import Img from 'gatsby-image'
import styled from 'styled-components'

import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Sidebar = styled.aside`
  display: none;
  ${customMedia.greaterThan('medium')`
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    background-color: ${({ theme }) => theme.gray100};
    color: ${({ theme }) => theme.gray800};

    .sidebar--left & {
      order: 0;
    }
    .sidebar--right & {
      order: 1;
    }
  `}
`
