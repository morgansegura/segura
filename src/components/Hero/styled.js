import styled from 'styled-components'
import media from 'styled-media-query'

export const Hero = styled.div`
    width: 100%;
    position: relative;

    .hero--inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* background: red; */

        ${media.greaterThan('large')`
            flex-direction: row;
        `}
    }

    /* Text Containers */
    .hero-left,
    .hero-right {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 80px;

        ${media.greaterThan('medium')`

        `}

        ${media.greaterThan('large')`
            padding-top: 120px;
        `}
    }
    .hero-left {
        position: relative;
        z-index: 2;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
        background: radial-gradient(#eaf9ff 20%, transparent, transparent);

        ${media.lessThan('large')`
            .headline {
                margin-bottom: 20px;
            }
            .subline {
                margin-bottom: 1.75rem;
            }
        `}
        ${media.greaterThan('large')`
            flex-shrink: 1;
            max-width: 600px;
            text-align: left;

            &.push-left {
                padding-left: 112px;              
            }         
        `}
    }

    .hero-right {
        ${media.lessThan('medium')`
            overflow: hidden;
        `}
    }

    /* Hero Full Screen Image */
    .hero-bg-image {
        display: none;
        pointer-events: none;
        z-index: -1;
        z-index: 1;
        width: 100%;

        &.abs-bottom-center {
            width: 100%;
            position: absolute;
            left: 50%;
            bottom: -50px;
            transform: translate(-50%, 0);

            ${media.lessThan('medium')`
                max-width: unset;
                width: 600px
            `}
            ${media.greaterThan('medium')`
                
            `}
        }

        ${media.greaterThan('large')`
            max-width: 1500px;            
        `}
    }
    /* Colors & Backgrounds */
    &.bg-linear-trans-blue,
    .bg-linear-trans-blue {
        background: linear-gradient(#eaf9ff, #eaf9ff, transparent);
    }
    &.bg-radial-trans-blue,
    .bg-radial-trans-blue {
        background: radial-gradient(#eaf9ff 40%, transparent, transparent);
    }
    .buffer-top {
        padding-top: 56px;
    }
`
