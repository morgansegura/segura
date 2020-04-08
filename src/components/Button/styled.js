import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    &.button {
        text-decoration: none;
        white-space: nowrap;
        transition: opacity 0.3s ease-out, background-color 0.3s ease-out;
        font-family: var(--headline-font);
        font-weight: 600;
        letter-spacing: 0.15px;
        padding: 20px 52px;        
        font-size: 1rem;        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1.75rem;        

        ${media.greaterThan('large')`
            margin-top: 2rem;
        `}        

        /* Sizes */
        &.medium {
            max-width: 175px;
            padding: 10px 0;
        }
 
        &.round {
            &--4 {
                border-radius: 4px;
            }
            &--8 {
                border-radius: 8px;
            }
            &--30 {
                border-radius: 30px;
            }
        }
        &.outline {
            border: 2px solid var(--primary-color);
            color: var(--primary-color);

            &:hover {
                color: var(--primary-light-color);
                border-color: var(--primary-color);
            }
        }
        &.white {
            background-color: #fff;
            color: var(--tertiary-color);
            &:hover {
                opacity: 0.85;
            }
        }
        &.primary {
            background-color: var(--primary-color);
            color: white;
            &:hover {
                opacity: 0.85;
            }
        }
        &.secondary {
            background-color: var(--secondary-color);
            color: white;

            &:hover {
                background-color: var(--secondary-light-color);                
            }
            &:active {
                background-color: var(--secondary-dark-color);
            }
        }
        &.thirdy {
            background-color: var(--tertiary-color);
            color: white;
            &:hover {
                opacity: 0.85;
            }
        }
        &.transparent {
            &__on-dark {
                color: white;
                background-color: transparent;
                &:hover {
                    color: var(--tertiary-color);
                    background-color: white;
                }
            }
            &__on-light {
                color: var(--tertiary-color);
                background-color: transparent;

                &:hover {
                    opacity: 0.85;
                }
            }
        }
        
        i,
        svg {
            &.icon-left {
                margin-right: 0.25rem;
            }
            &.icon-right {
                margin-left: 0.25rem;
            }
        }
    }
`
