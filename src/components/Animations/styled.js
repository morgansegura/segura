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

export const RobotWrapper = styled.div`
    .cls-1 {
        isolation: isolate;
    }

    .cls-2 {
        fill: #c8caf4;
    }

    .cls-3 {
        fill: #f440d9;
    }

    .cls-4 {
        fill: #66d0d8;
    }
    /* 
    #linear-gradient {
        background-image: linear-gradient(29.92deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-2 {
        background-image: linear-gradient(-50.42deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-3 {
        background-image: linear-gradient(82.69deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-4 {
        background-image: linear-gradient(-90deg, #fff 0%, #709cc1 100%);
    }

    #linear-gradient-6 {
        background-image: linear-gradient(90deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-7 {
        background-image: linear-gradient(29.93deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-8 {
        background-image: linear-gradient(-50.42deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-9 {
        background-image: linear-gradient(82.69deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-10 {
        background-image: linear-gradient(-90deg, #fff 0%, #709cc1 100%);
    }

    #linear-gradient-12 {
        background-image: linear-gradient(90deg, #fff 0%, #709cc1 100%);
    }
    #linear-gradient-13 {
        background-image: linear-gradient(-45deg, #fff 0%, #fff 100%);
    }
    #linear-gradient-14 {
        background-image: linear-gradient(90deg, #fff 0%, #fff 100%);
    }
    #linear-gradient-15 {
        background-image: linear-gradient(90deg, #fff 0%, #fff 100%);
    }
    #radial-gradient {
        background-image: radial-gradient(
            ellipse at center,
            #709cc1 0%,
            #ffffff 100%
        );
    } */

    .cls-10,
    .cls-11,
    .cls-12,
    .cls-13,
    .cls-14,
    .cls-15,
    .cls-16,
    .cls-19,
    .cls-22,
    .cls-5,
    .cls-6,
    .cls-7,
    .cls-9 {
        border: 1px solid blue !important;
        mix-blend-mode: multiply;
    }

    .cls-5 {
        fill: url(#linear-gradient);
    }

    .cls-6 {
        fill: url(#linear-gradient-2);
    }

    .cls-7 {
        fill: url(#linear-gradient-3);
    }

    .cls-8 {
        fill: #66d3db;
    }

    .cls-9 {
        fill: url(#linear-gradient-4);
    }

    .cls-10 {
        fill: url(#linear-gradient-6);
    }

    .cls-11 {
        fill: url(#linear-gradient-7);
    }

    .cls-12 {
        fill: url(#linear-gradient-8);
    }

    .cls-13 {
        fill: url(#linear-gradient-9);
    }

    .cls-14 {
        fill: url(#linear-gradient-10);
    }

    .cls-15 {
        fill: url(#linear-gradient-12);
    }

    .cls-16 {
        fill: url(#radial-gradient);
    }

    .cls-17 {
        mix-blend-mode: soft-light;
        fill: url(#linear-gradient-13);
    }

    .cls-18 {
        fill: #464871;
    }

    .cls-19 {
        fill: url(#linear-gradient-14);
    }

    .cls-20 {
        fill: #262c47;
    }

    .cls-21 {
        fill: #fff;
    }

    .cls-22 {
        fill: url(#linear-gradient-8);
    }
`
