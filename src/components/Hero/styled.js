import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

import img from '../../../static/assets/img/programming-man.svg'

const customMedia = generateMedia({
    xsmall: '250px',
    small: '450px',
    medium: '768px',
    large: '1024px',
    xlarge: '1200px',
    huge: '1400px',
})

export const BackgroundImage = styled.div`
    position: fixed;
    z-index: -1;
    right: 0;
    bottom: 0;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: 0 0;
    transform: translate(15%, -50%);
    background-size: contain;
    width: 100%;
    height: 400px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        height: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to right,
            ${({ theme }) => theme.bgBody} 100px,
            transparent
        );
    }
`
