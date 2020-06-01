import styled from 'styled-components'

import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const StickyContainer = styled('div')`
  position: relative;
  top: 0;

  &.sticky {
    position: fixed;
    width: 100%;
    height: var(--size);
    z-index: 10;
  }
`
