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

export const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`

export const SiteContent = styled.section`
    display: flex;
    flex: 1;
    width: 100%;

    .homepage {
        width: 100%;
    }

    h1,
    .h1,
    .headline {
        /* 28px/32px */
        font-size: 36px;
        line-height: 46px;

        ${customMedia.greaterThan('medium')`
            /* 52px/60px */
            font-size: 52px;
            line-height: 60px;
        `}
    }
    h2,
    .h2 {
        /* 28px/32px */
        font-size: 28px;
        line-height: 32px;

        ${customMedia.greaterThan('medium')`
            /* 44px/54px */
            font-size: 44px;
            line-height: 32px;
        `}
    }
    h3,
    .h3 {
        /* 24px/28px */
        font-size: 24px;
        line-height: 28px;
        ${customMedia.greaterThan('medium')`
            /* 44px/54px */
            font-size: 44px;
            line-height: 54px;
        `}
    }
    h4,
    .h4 {
        /* 16px/24px */
        font-size: 16px;
        line-height: 24px;
        ${customMedia.greaterThan('medium')`
            /* 36px/46px */
            font-size: 36px;
            line-height: 46px;
        `}
    }
    h5,
    .h5 {
        /* 16px/24px */
        font-size: 24px;
        line-height: 28px;

        ${customMedia.greaterThan('medium')`
            /* 20px/26px */
            font-size: 20px;
            line-height: 26px;
        `}
    }
    h6,
    .h6 {
        /* 14px/24px */
        font-size: 14px;
        line-height: 24px;
    }

    .link,
    .list-heading {
        font-weight: 400;
        font-family: var(--base-font);
        /* 20px/28px */
        font-size: 20px;
        line-height: 1.75;

        &--sm {
            /* 16px/26px */
            font-size: 0.875rem;
            line-height: 1.625;
        }
        &--tiny {
            /* 14px/16px */
            font-size: 1rem;
            line-height: 1;
        }
    }
    .line-break {
        display: block;
    }

    .flex-100 {
        width: 100%;
    }
    .flex-50 {
        width: 100%;
        ${customMedia.greaterThan('large')`
            width: 50%;
        `}   
    }
    .flex-75 {
        width: 100%;
        ${customMedia.greaterThan('large')`
            width: 75%;
        `}   
    }
    .flex-66 {
        width: 100%;
        ${customMedia.greaterThan('large')`
            width: 66.6666%;
        `}          
    }
    .flex-60 {
        width: 100%;
        ${customMedia.greaterThan('large')`
            width: 60%;
        `}          
    }
    .flex-40 {
        width: 100%;
        ${customMedia.greaterThan('large')`
            width: 40%;
        `}          
    }
    .flex-33 {
        width: 100%;
        ${customMedia.greaterThan('large')`
            width: 33.3333%;
        `}         
    }
    .flex-25 {
        width: 100%;
        ${customMedia.greaterThan('large')`
            width: 25%;
        `}        
    }    
    .flex-50, .flex-75, .flex-66, .flex-33, .flex-25 {

    }        
`

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 40px;

    ${customMedia.greaterThan('medium')`
        padding: 0 80px;    
    `}
`
