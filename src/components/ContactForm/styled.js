import styled from 'styled-components'
import media from 'styled-media-query'

export const FormWrapper = styled.div`

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.field-wrapper {
		position: relative;
		label {
			text-align: left;
		}
	}

	textarea {		
		margin-top: 30px;
		padding: 1rem;
		width: 100%;
		border-color: ${({ theme }) => theme.superText};
		background-color: transparent;
		font-size: 14px;
		font-family: var(--headline-font);
		color: ${({ theme }) => theme.headline};
		height: 60px;
		/* transition: height .3s ease-out; */
		
		~ .form-input-label {
			color: gray;
			font-size: 14px;
			font-weight: normal;
			position: absolute;
			pointer-events: none;
			color: ${({ theme }) => theme.headline};
			left: 1rem;
			top: 40px;
			transition: 300ms ease all;
			z-index: 1;
		}

        &:focus ~ .form-input-label {
			top: 0;
			left: 0.5rem;
			font-size: 12px;
			background-color: transparent;
			color: ${({ theme }) => theme.headline};
        }
        &:focus {
            outline: none;
			background-color: transparent;
			height: 100%;
			min-height: 130px;
			border-color: ${({ theme }) => theme.headline};
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
	font-family: ${({ theme }) => theme.headline};
	color: white;
	background-color: ${({ theme }) => theme.headline};
	border: none;
	border-radius: 8px;

	&:hover {
		opacity: 0.9;
	}
`