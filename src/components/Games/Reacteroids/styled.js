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

export const GameWrapper = styled.div`
    canvas {
        display: block;
        background-color: #252733;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .current-score {
        left: 20px;
        color: white;
        font-family: var(--headline-font);
    }
    .top-score {
        right: 20px;
        color: white;
        font-family: var(--headline-font);
    }
    .score {
        display: block;
        position: absolute;
        top: 15px;
        z-index: 1;
        font-size: 20px;
        color: white;
    }
    .controls {
        display: block;
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: 1;
        font-size: 13px;
        font-family: var(--headline-font);
        text-align: center;
        line-height: 1.6;
        color: white;
    }
    .endgame {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 16px;
        z-index: 1;
        text-align: center;
        color: white;
    }
    button {
        border: 2px solid white;
        background-color: transparent;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 10px;
        font-family: var(--headline-font);
        cursor: pointer;
    }
    button:hover {
        background-color: white;
        color: #252733;
    }
`
