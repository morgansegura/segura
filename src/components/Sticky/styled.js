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
    top: ${({ sticky }) => (sticky ? '0' : '')};	
	position: ${({ sticky }) => (sticky ? 'fixed' : '')};
	width: 100%;
	z-index: 3;
	background: ${({ sticky }) => (sticky ? 'rgba(250, 250, 250, 0.95)' : '')};

	${customMedia.greaterThan('large')`
		top: ${({ sticky }) => (sticky ? '0' : '')};	
	`}

    transition: ${({ sticky }) => (sticky ? 'top .3s ease-out' : '')};

	a {
		color: ${({ sticky }) => (sticky ? 'var(--base)' : '')};
	}

	& ~ .toggle-theme {
		top: ${({ sticky }) => (sticky ? '14px !important' : '')};	
		position: ${({ sticky }) => (sticky ? 'fixed' : '')};

		${customMedia.greaterThan('medium')`
			top: ${({ sticky }) => (sticky ? '22px !important' : '')};
		`}
		svg {
			fill: ${({ sticky }) => (sticky ? 'var(--base) !important' : '')};
		}	
	}

    .cls-2 {
        fill: ${({ sticky }) =>
            sticky ? 'var(--base-medium-dark) !important' : ''};
    }
	.site,.blog {		
		padding: ${({ sticky }) =>
            sticky ? '0.75rem 60px 0.75rem 20px !important' : ''};

		${customMedia.greaterThan('medium')`
			padding: ${({ sticky }) => (sticky ? '20px 120px 20px 80px !important' : '')};
		`}			
	}
 	
`
