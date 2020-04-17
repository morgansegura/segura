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
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
    flex-wrap: wrap;

    &.gap {
        margin-left: -30px;
    }
`
export const Column = styled.div`
    position: relative;
    padding: 0;

    .gap & {
        padding-left: 30px;
        padding-bottom: 30px;
    }

    &.three-columns {
        ${customMedia.greaterThan('large')`
			flex: 1 1 calc(100% / 3);
			
			&:nth-child(1) {
				padding-right: 15px;
			}
			&:nth-child(2) {
				padding-left: 15px;
				padding-right: 15px;
			}
			&:nth-child(3) {
				padding-left: 15px;
			}
		`};
    }
    &.two-columns {
        ${customMedia.greaterThan('large')`		
			flex: 1 1 calc(100% / 2);

			&:nth-child(1) {
				padding-right: 15px;
			}
			&:nth-child(2) {
				padding-left: 15px;
			}
		`};
    }

    &.col {
        width: 100%;
        &-1,
        &-2,
        &-3,
        &-4,
        &-5,
        &-6,
        &-7,
        &-8,
        &-9,
        &-10,
        &-11,
        &-12 {
            width: 100%;
        }
        &-1 {
            max-width: calc((100% / 12) * 1);
        }
        &-2 {
            max-width: calc((100% / 12) * 2);
        }
        &-3 {
            max-width: calc((100% / 12) * 3);
        }
        &-4 {
            max-width: calc((100% / 12) * 4);
        }
        &-5 {
            max-width: calc((100% / 12) * 5);
        }
        &-6 {
            max-width: calc((100% / 12) * 6);
        }
        &-7 {
            max-width: calc((100% / 12) * 7);
        }
        &-8 {
            max-width: calc((100% / 12) * 8);
        }
        &-9 {
            max-width: calc((100% / 12) * 9);
        }
        &-10 {
            max-width: calc((100% / 12) * 10);
        }
        &-11 {
            max-width: calc((100% / 12) * 11);
        }
        &-12 {
            max-width: calc((100% / 12) * 12);
        }
        ${customMedia.greaterThan('xsmall')`
        &-sm-1 {
            max-width: calc((100% / 12) * 1);
        }
        &-sm-2 {
            max-width: calc((100% / 12) * 2);
        }
        &-sm-3 {
            max-width: calc((100% / 12) * 3);
        }
        &-sm-4 {
            max-width: calc((100% / 12) * 4);
        }
        &-sm-5 {
            max-width: calc((100% / 12) * 5);
        }
        &-sm-6 {
            max-width: calc((100% / 12) * 6);
        }
        &-sm-7 {
            max-width: calc((100% / 12) * 7);
        }
        &-sm-8 {
            max-width: calc((100% / 12) * 8);
        }
        &-sm-9 {
            max-width: calc((100% / 12) * 9);
        }
        &-sm-10 {
            max-width: calc((100% / 12) * 10);
        }
        &-sm-11 {
            max-width: calc((100% / 12) * 11);
        }
        &-sm-12 {
            max-width: calc((100% / 12) * 12);
        }
    `};
        ${customMedia.greaterThan('small')`
        &-md-1 {
            max-width: calc((100% / 12) * 1);
        }
        &-md-2 {
            max-width: calc((100% / 12) * 2);
        }
        &-md-3 {
            max-width: calc((100% / 12) * 3);
        }
        &-md-4 {
            max-width: calc((100% / 12) * 4);
        }
        &-md-5 {
            max-width: calc((100% / 12) * 5);
        }
        &-md-6 {
            max-width: calc((100% / 12) * 6);
        }
        &-md-7 {
            max-width: calc((100% / 12) * 7);
        }
        &-md-8 {
            max-width: calc((100% / 12) * 8);
        }
        &-md-9 {
            max-width: calc((100% / 12) * 9);
        }
        &-md-10 {
            max-width: calc((100% / 12) * 10);
        }
        &-md-11 {
            max-width: calc((100% / 12) * 11);
        }
        &-md-12 {
            max-width: calc((100% / 12) * 12);
        }
    `};
        ${customMedia.greaterThan('medium')`
        &-lg-1 {
            max-width: calc((100% / 12) * 1);
        }
        &-lg-2 {
            max-width: calc((100% / 12) * 2);
        }
        &-lg-3 {
            max-width: calc((100% / 12) * 3);
        }
        &-lg-4 {
            max-width: calc((100% / 12) * 4);
        }
        &-lg-5 {
            max-width: calc((100% / 12) * 5);
        }
        &-lg-6 {
            max-width: calc((100% / 12) * 6);
        }
        &-lg-7 {
            max-width: calc((100% / 12) * 7);
        }
        &-lg-8 {
            max-width: calc((100% / 12) * 8);
        }
        &-lg-9 {
            max-width: calc((100% / 12) * 9);
        }
        &-lg-10 {
            max-width: calc((100% / 12) * 10);
        }
        &-lg-11 {
            max-width: calc((100% / 12) * 11);
        }
        &-lg-12 {
            max-width: calc((100% / 12) * 12);
        }
    `};
        ${customMedia.greaterThan('large')`
        &-xl-1 {
            max-width: calc((100% / 12) * 1);
        }
        &-xl-2 {
            max-width: calc((100% / 12) * 2);
        }
        &-xl-3 {
            max-width: calc((100% / 12) * 3);
        }
        &-xl-4 {
            max-width: calc((100% / 12) * 4);
        }
        &-xl-5 {
            max-width: calc((100% / 12) * 5);
        }
        &-xl-6 {
            max-width: calc(((100% / 12) * 6)-30px);
        }
        &-xl-7 {
            max-width: calc((100% / 12) * 7);
        }
        &-xl-8 {
            max-width: calc((100% / 12) * 8);
        }
        &-xl-9 {
            max-width: calc((100% / 12) * 9);
        }
        &-xl-10 {
            max-width: calc((100% / 12) * 10);
        }
        &-xl-11 {
            max-width: calc((100% / 12) * 11);
        }
        &-xl-12 {
            max-width: calc((100% / 12) * 12);
        }
    `};
        ${customMedia.greaterThan('xlarge')`
        &-xxl-1 {
            max-width: calc((100% / 12) * 1);
        }
        &-xxl-2 {
            max-width: calc((100% / 12) * 2);
        }
        &-xxl-3 {
            max-width: calc((100% / 12) * 3);
        }
        &-xxl-4 {
            max-width: calc((100% / 12) * 4);
        }
        &-xxl-5 {
            max-width: calc((100% / 12) * 5);
        }
        &-xxl-6 {
            max-width: calc((100% / 12) * 6);
        }
        &-xxl-7 {
            max-width: calc((100% / 12) * 7);
        }
        &-xxl-8 {
            max-width: calc((100% / 12) * 8);
        }
        &-xxl-9 {
            max-width: calc((100% / 12) * 9);
        }
        &-xxl-10 {
            max-width: calc((100% / 12) * 10);
        }
        &-xxl-11 {
            max-width: calc((100% / 12) * 11);
        }
        &-xxl-12 {
            max-width: calc((100% / 12) * 12);
        }
    `};
    }
`
