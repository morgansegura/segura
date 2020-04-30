import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  medium: '768px',
})

export const StickyContainer = styled('div')`
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.bgOpaque};
  transition: top 0.3s ease-out;

  & ~ .toggle-theme {
    top: ${({ sticky }) => (sticky ? '14px !important' : '')};
    position: ${({ sticky }) => (sticky ? 'fixed !important' : '')};

    ${customMedia.greaterThan('medium')`
			top: ${({ sticky }) => (sticky ? '22px !important' : '')};
		`}
    svg {
      fill: ${({ sticky }) => (sticky ? 'var(--base) !important' : '')};
    }
  }
`
