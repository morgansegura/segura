import styled from 'styled-components'
import media from 'styled-media-query'

export const ButtonHamburger = styled.button`
    outline: #fafafa;
    background: transparent;
    display: inline-block;
    cursor: pointer;
    width: 25px;
    height: 50px;
    border: none;
    position: absolute;
    border-radius: 3px;
    /* top: var(--space-sm);
    right: var(--space-sm); */
    top: 0;
    left: var(--space-sm);
    display: none;
    ${media.greaterThan('medium')`
    display: none;
  `}

    &.active {
        span {
            background: transparent;
            &:before,
            &:after {
                top: 0;
                left: 0;
            }
            &:before {
                transform: rotate(-45deg);
            }
            &:after {
                transform: rotate(45deg);
            }
        }
    }

    span {
        /* background: var(--secondary-color); */
        background: #757575;
        /* border-radius: 10px; */
        display: inline-block;
        height: 2px;
        width: 70%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &:before,
        &:after {
            content: '';
            /* background: var(--secondary-color); */
            background: #757575;
            /* border-radius: 10px; */
            display: inline-block;
            height: 2px;
            width: 100%;
            position: absolute;
            left: 0;
            transition: 0.3s;
        }

        &:before {
            top: -5px;
        }

        &:after {
            bottom: -5px;
        }
    }
`
