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
    /* opacity: ${({ sticky }) => (show ? '100' : '0')}; */
    top: ${({ sticky }) => (sticky ? '-30px' : '0')};	
	padding-bottom: ${({ sticky }) => (sticky ? '1rem' : '0')};
	position: ${({ sticky }) => (sticky ? 'fixed' : 'relative')};
	width: 100%;
	z-index: 3;
	background: ${({ sticky }) =>
        sticky ? 'rgba(255, 255, 255, 0.89)' : 'transparent'};
		
    transition: ${({ sticky }) =>
        sticky ? 'top cubic-bezier(0, 0, 0, 1) .3s' : ''};

	${customMedia.greaterThan('large')`
		top: ${({ sticky }) => (sticky ? '-80px' : '0')};	
	`}	
`
