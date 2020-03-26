import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const Button = styled(Link)`
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    text-decoration: none !important;
    transition: background-color 0.3s ease-out;

    &.cta-button {
        border-radius: 8px;
        max-width: unset;
        font-size: 20px;
        letter-spacing: 0.21px;
        line-height: 16px;
        padding: 20px 52px;
    }
    &.cta-link {
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        border-radius: 8px;
        letter-spacing: 0.57px;
        padding: 6px 8px;
        margin-left: -8px;
        margin-right: -8px;

        & i,
        & svg {
            font-size: 24px;
            height: 24px;
            margin-right: 0;
            vertical-align: middle;
            width: 24px;

            &.icon-left {
                margin-right: 8px;
            }
            &.icon-right {
                margin-left: 8px;
            }
        }

        &:hover {
            background: rgba(255, 255, 255, 0.2);
        }

        &--with-icon {
            padding-bottom: 10px;
            padding-right: 10px;
            padding-top: 10px;
        }
    }
    &.on__right {
        margin-left: 2rem;
    }

    &.link--white {
        color: #fff;

        &:hover {
            opacity: 0.85;
        }
    }
    &.button--white {
        background-color: #fff;
        color: #039be5;

        &:hover {
            background-color: rgba(255, 255, 255, 0.85);
        }
    }
`
