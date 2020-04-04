import styled from 'styled-components'
import media from 'styled-media-query'

export const FormCard = styled.div`
	width: 100%;
	padding: 2rem 1.5rem 1rem;

	.field-wrapper {
		position: relative;
		label {
			text-align: left;
		}
	}

	textarea {		
		padding: 1rem;
		width: 100%;
		border-radius: 4px;
		border-color: var(--gray-medium);
		background-color: var(--gray-extra-light);
		font-size: 14px;
		color: gray;
		min-height: 100px;
		
		~ .form-input-label {
			color: gray;
			font-size: 16px;
			font-weight: normal;
			position: absolute;
			pointer-events: none;
			left: 1rem;
			top: 10px;
			transition: 300ms ease all;
			z-index: 1;
		}

        &:focus ~ .form-input-label {
			top: -20px;
			font-size: 12px;
			color: black;
        }
        &:focus {
            outline: none;
			background-color: var(--gray-lighter);
        }
	}
	textarea {

	}
	select {
		height: 45px;
		padding-top: 0;
		/* margin-top: -30px; */
	}
`
export const FormCardHeader = styled.div`
	padding: 0 0.5rem;
	h5 {
		font-size: 1.5rem;
	}
	p {
		color: gray;
	}
`
export const FormCardFooter = styled.div`
	padding-top: 0.5rem;
	background-color: var(--gray-light);
	.social-block {

	}
	.social-icon {
		width: 40px;
		height: 40px;
		transition: all .3s ease-out;

		&:hover {
			fill: var(--primary-color);
		}		
	}
`
export const FormButton = styled.button`
	cursor: pointer;
	width: 100%;
	font-weight: 500;
	margin-top: 0.5rem;
	margin-left: auto;
	margin-right: auto;
	font-size: 1.25rem;
	padding: 1rem 1rem;
	font-family: var(--headline-font);
	color: white;
	background-color: var(--primary-color);
	border: none;
	border-radius: 8px;

	&:hover {
		opacity: 0.9;
	}
`