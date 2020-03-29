import styled from 'styled-components'
import media from 'styled-media-query'

export const Hero = styled.div`
    background-color: yellow;
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
        /* background-color: yellow; */
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
            max-width: 400px;
            text-align: left;

            &.push-left {
                padding-left: 112px;              
            }         
        `}
    }

    .hero-right {
        /* background: red; */
        /* position: absolute; */
        z-index: 1;
        width: 100%;
        bottom: 100px;
        left: 0;
        /* transform: translate(-50%, -50px); */

        ${media.greaterThan('medium')`
            max-width: 800px;
            left: unset;
            right: 0;        
        `}
        ${media.greaterThan('large')`
            max-width: 1000px;            
        `}
    }

    /* Hero Full Screen Image */
    .hero-bg-image {
        pointer-events: none;
        z-index: -1;
        width: 100%;
        /* transform: translate(-50%, -50px); */
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
