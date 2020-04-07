import styled from 'styled-components'
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    xsmall: "250px",
    small: "450px",
    medium: "768px",
    large: "1024px",
    xlarge: "1200px",
    huge: "1400px"
});

export const Section = styled.div`
    width: 100%;
    position: relative;

    .section--inner {
        position: relative;
        display: flex;
        position: relative;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        width: 100%;

        ${customMedia.greaterThan('medium')`
            flex-direction: row;
            align-items: flex-start;
        `}   
    }
    .section-headline {        
        position: relative;
        display: block;
        letter-spacing: 2px;
        font-family: var(--headline-font);

        /* &:before {
            content: "";
            position: absolute;
            bottom: 0;
            height: 6px;
            border-radius: 6px;
            background-color: var(--primary-color);
        } */

        ${customMedia.lessThan('medium')`
            font-size: 60px;
            line-height: 70px;
            /* margin-bottom: 2rem; */
            padding-bottom: 2rem;
            text-align: center;

            /* &:before {
                width: 100px;
                left: 50%;
                transform: translate(-50%, 0);
            }             */
        `}
        ${customMedia.greaterThan('small')`
            font-size: 80px;
            line-height: 75px;
            padding-bottom: 3rem;
            /* margin-bottom: 3rem; */

            /* &:before {
                left: 0;
                width: 60px;
                transform: translate(0, 0);
            }                  */
        `}
    }

    .section-subline {
        font-size: 2rem;
        line-height: 1.3;
        padding-bottom: 30px;

    }
    .super-text {
        display: block;
        color: var(--gray-light);
        font-size: 1.025rem;
        line-height: 2.5;        
        font-weight: 600;
        letter-spacing: 1px;
        padding-bottom: 1rem;

        ${customMedia.greaterThan('medium')`
            padding-bottom: 2rem;
        `}
    }
    p {
        font-size: 1.025rem;
        line-height: 2.5;
        color: var(--gray-medium);
    }

    .clean-wrap {
        max-width: 100%;
        
        &--small {
            max-width: 100%;
        }        
                                
        ${customMedia.between('large', 'huge')`
            max-width: 80%;       
        `}                   

    }
    /* Text Containers */
    .section-left,
    .section-right {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 3rem;        

        ${customMedia.greaterThan('small')`
            align-items: flex-start;
        `}        
    }
    .social-block {
        display: flex;
        justify-content: flex-start;


        a {
            color: var(--primary-color);

            &:hover {
                color: var(--primary-light-color);
            }
            &:nth-child(2) {
                margin-left: 1rem;
                margin-right: 1rem;
            }
        }
        svg {
            width: 25px;
            height: 25px;
        }

        ${customMedia.greaterThan('medium')`
            margin-top: 50px;
        `}           
    }
        
`
