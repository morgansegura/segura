import styled from 'styled-components'

export const InputBlock = styled.div`
    .group {
        position: relative;
        /* margin: 0 0 30px; */

        .form-input {
            background: none;
            color: ${({ theme }) => theme.headline};
            font-size: 14px;
            padding: 1rem 1rem 0.5rem 0;
            display: block;
            width: 100%;
            border: none;
            border-bottom: 1px solid ${({ theme }) => theme.textOffset};

            margin: 1rem 0;

            &:focus {
                outline: none;
                border-bottom: 1px solid ${({ theme }) => theme.headline};
            }

            &:focus ~ .form-input-label {
                top: -20px;
                left: 0.5rem;
                font-size: 12px;
                color: ${({ theme }) => theme.headline};
            }
        }

        .form-input-label {
            color: ${({ theme }) => theme.headline};
            font-size: 14px;
            font-weight: normal;
            position: absolute;
            pointer-events: none;
            left: 0.5rem;
            top: 10px;
            transition: 300ms ease all;

            &.shrink {
                top: -0.5rem;
                font-size: 12px;
            }
        }
    }
`
