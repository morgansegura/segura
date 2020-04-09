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

export const ColumnWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */
    flex-wrap: wrap;
    /* background: yellow; */
    margin-bottom: -40px;

    ${customMedia.greaterThan('small')`
        flex-direction: row;
		justify-content: space-evenly;
    `}
`
export const Column = styled.div`
    margin: 0 0 40px;
    width: 100%;
    padding: 0;
    /* background: green; */

    &.three-columns {
        ${customMedia.greaterThan('medium')`
			flex: 1 1 calc(100% / 2);

			&:nth-child(1) {
				padding-right: 20px;
			}
			&:nth-child(2) {
				padding-left: 20px;
			}
		`}
        ${customMedia.greaterThan('large')`
			flex: 1 1 calc(100% / 3);
			
			&:nth-child(1) {
				padding-right: 20px;
			}
			&:nth-child(2) {
				padding-left: 20px;
				padding-right: 20px;
			}
			&:nth-child(3) {
				padding-left: 20px;
			}
		`};
    }
    &.two-columns {
        ${customMedia.greaterThan('medium')`		
			flex: 1 1 calc(100% / 2);

			&:nth-child(1) {
				padding-right: 20px;
			}
			&:nth-child(2) {
				padding-left: 20px;
			}
		`};
    }
`
