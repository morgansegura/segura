import styled from 'styled-components'
import media from 'styled-media-query'

// $sub - color: grey;
// $main - color: black;

// @mixin shrinkLabel {
// 	top: -14px;
// 	font - size: 12px;
// 	color: $main - color;
// }
export const InputBlock = styled.div`

/* @mixin shrinkLabel {
    top: -14px;
    font-size: 12px;
    color: $main-color;
} */
.group {
    position: relative;
    margin: 30px 0;

    .form-input {
        background: none;
        color: gray;
        font-size: 1rem;
        padding: 1rem 1rem 0.5rem;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #ccc;
        background-color: #f8f8f8;
        border-radius: 8px 8px 0 0;

        margin: 1rem 0;

        &:focus {
            outline: none;
            border-bottom: 1px solid gray;
        }

        &:focus ~ .form-input-label {
			top: -20px;
			font-size: 12px;
			color: black;
        }
    }

    input[type='password'] {
        letter-spacing: 0.3em;
    }

    .form-input-label {
        color: gray;
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 1rem;
        top: 10px;
        transition: 300ms ease all;

        &.shrink {
			top: -14px;
			font-size: 12px;
			color: black;
        }
    }
}
`