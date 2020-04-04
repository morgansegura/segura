import styled from 'styled-components'
import media from 'styled-media-query'

export const Hero = styled.div`
    width: 100%;
    position: relative;
    height: 65vh;

    /* &:before {
        content: "";
        position: absolute;
        z-index: 4;
        height: 100%;
        left: 0;
        transform: rotate(-30deg) translate(-450px, -10%);
        width: 400px;
        background-attachment: fixed;
        background: linear-gradient(rgba(255,255,255, .3), white); 
    }
    &:after {
        content: "";
        position: absolute;
        z-index: 4;
        height: 100%;
        right: 0;
        transform: rotate(30deg) translate(200px, -10%);
        width: 400px;
        background-attachment: fixed;
        background: linear-gradient(white, rgba(255,255,255, .3)); 
    } */

    .hero--inner {
        position: relative;
        z-index: 4;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        width: 100%;

        ${media.greaterThan('large')`
            flex-direction: row;
            align-items: flex-start;
        `}   
    }
    .hero-background-style{
        position: absolute;
        display: flex;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0%;
        /* background: var(--primary-dark-color) url('https://images.pexels.com/photos/2387533/pexels-photo-2387533.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500') 0 0; */
        background-color: black;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        background-position: center 0;

        /* background-position: center -120px; */

        &:before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-attachment: fixed;
            background: linear-gradient(to right, rgba(0,0,0, .9), rgba(0,119,194,.8), rgba(0,0,0, .9)); 
        }
    }     
    /* Text Containers */
    .hero-left,
    .hero-right {
        display: flex;
        position: relative;
        flex-direction: column;
        text-align: center;
        visibility: visible;
        opacity: 1;
        transition: visibility .1s ease-out; 

        ${media.greaterThan('large')`
            padding-top: 120px;
        `}        
    }
    .hero-left {
        &.full-width {
            max-width: 100%;
        }

        align-items: center;
    }
    .hero-right {
        &.hidden {
            display: none;
        }
        align-items: center;

        ${media.greaterThan('medium')`
            align-items: flex-end;
        `}        
    }
    .hero-text-block {
        position: relative;
        z-index: 2;
        margin-left: auto;
        margin-right: auto;
        width: 800px;

        span.offset-color {
            color: var(--secondary-color);
        }

        .headline,
        .subline {
            text-align: center;    
        }
        ${media.lessThan('large')`
            .headline {
                margin-bottom: 20px;
            }
            .subline {
                margin-bottom: 1.75rem;
            }
        `}
    }

    .hero-bg-image {
        /* position: absolute; */
        width: 100%;
        height: 100%;
        display: block;
        background-repeat: no-repeat;
        z-index: -1;

        &.abs-bottom-center {
            /* width: 100%;
            position: absolute;
            left: 50%;
            bottom: -50px;
            transform: translate(-50%, 0); */

            ${media.lessThan('medium')`
                /* max-width: unset;
                width: 600px */
            `}
            ${media.greaterThan('medium')`
                
            `}
        }
        &.under-text-right {
            top: 0;
            right: 0;
            transform: translate(100px, 250px);
            /* background-attachment: fixed; */

            ${media.greaterThan('small')`
                max-width: 800px;
            `}
            ${media.greaterThan('medium')`
                max-width: 900px;
            `}
            ${media.greaterThan('large')`
                max-width: 900px;
            `}
            ${media.greaterThan('huge')`
                max-width: 1100px;
            `}
        }
    }
    /* Colors & Backgrounds */
    &.bg-linear-trans-blue,
    .bg-linear-trans-blue {
        background: linear-gradient(transparent, #eaf9ff, #eaf9ff, transparent);
    }
    &.bg-radial-trans-blue,
    .bg-radial-trans-blue {
        background: radial-gradient(#eaf9ff, transparent 80%);
    }
    .buffer-top {
        padding-top: 56px;
    } 
    .line-break {
        display: block;
    }
  
    .flex-100 {
        width: 100%;        
    }
    .flex-50 {
        width: 100%;
        ${media.greaterThan('medium')`
            width: 50%;
        `}   
    }
    .flex-75 {
        width: 100%;
        ${media.greaterThan('medium')`
            width: 75%;
        `}   
    }
    .flex-66 {
        width: 100%;
        ${media.greaterThan('medium')`
            width: 66.6666%;
        `}          
    }
    .flex-33 {
        width: 100%;
        ${media.greaterThan('medium')`
            width: 33.3333%;
        `}         
    }
    .flex-25 {
        width: 100%;
        ${media.greaterThan('medium')`
            width: 25%;
        `}        
    }    
    .flex-50, .flex-75, .flex-66, .flex-33, .flex-25 {

    }    
`
