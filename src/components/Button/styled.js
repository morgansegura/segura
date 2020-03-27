import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    &.button {
        display: inline-block;
        text-decoration: none;
        font: 500 14px/16px 'Roboto', sans-serif;
        letter-spacing: 0.15px;
        max-width: 255px;
        padding: 10px 50px;
        text-align: center;
        white-space: nowrap;
        width: 100%;
        transition: all 0.3s ease-out;
        margin-bottom: 1rem;

        &.with-icon {
            padding: 0.35rem 0.95rem 0.35rem 0.75rem;
        }

        ${media.greaterThan('small')`
            width: auto;
            margin-right: 0.5rem;        
        `}

        ${media.greaterThan('large')`        
        max-width: unset;
        margin-bottom: 1rem;
        margin-right: 1rem;
        font-family: "Google Sans",sans-serif;
        font-size: 20px;
        letter-spacing: .21px;
        line-height: 16px;      
        padding: 20px 52px;

            &.with-icon {
                padding: 0.75rem 1.45rem 0.7rem 1.25rem;            
            }  
        `}   
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
            &--dark {
                background-color: #fff;
                color: var(--primary-color);
                &:hover {
                    background-color: rgba(255, 255, 255, 0.85);
                }
            }
            &--light {
                background-color: transparent;
                border-color: white;
                color: white;
                &:hover {
                    background-color: rgba(255, 255, 255, 0.85);
                    border-color: white;
                    color: rgba(0, 0, 0, 0.89);
                }
            }
        }
        &.white {
            background-color: #fff;
            color: var(--thirdy-color);
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
            color: rgba(0, 0, 0, 0.7);

            &:hover {
                opacity: 0.85;
            }
        }
        &.thirdy {
            background-color: var(--thirdy-color);
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
                    color: var(--thirdy-color);
                    background-color: white;
                }
            }
            &__on-light {
                color: var(--thirdy-color);
                background-color: transparent;

                &:hover {
                    opacity: 0.85;
                }
            }
        }
        &.with-icon {
            & i,
            & svg {
                font-size: 24px;
                height: 24px;
                margin-right: 0;
                vertical-align: middle;
                width: 24px;

                &.icon-left {
                    margin-right: 0.5rem;
                }
                &.icon-right {
                    margin-left: 0.5rem;
                }
            }
        }
    }
`
