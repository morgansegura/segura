import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
    xsmall: '250px',
    small: '450px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
    huge: '1400px',
})

export const StickyContainer = styled('div')`
    width: 100%;
    z-index: 3;
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
