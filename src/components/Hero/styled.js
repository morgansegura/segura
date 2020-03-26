import styled from 'styled-components'
import media from 'styled-media-query'

export const Hero = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    margin: 0 auto;
    overflow: hidden;

    .hero__header-wrapper {
        display: flex;
        padding-bottom: 3rem;
        padding-top: 60px;
        ${media.greaterThan('small')`
        padding-left: 112px;
        padding-top: 120px;
        padding-right: 0;
    `}
    }
    .hero-left {
        max-width: 500px;
        position: relative;
        z-index: 2;
    }
    .hero-right {
        align-self: flex-start;
    }
    .hero-bg-image {
        display: none;
        margin: 0 -150px;
        pointer-events: none;
        position: absolute;
        right: -10%;
        top: 3rem;
        z-index: 1;
        width: 100%;
        /* transform: scale(0.9); */

        ${media.greaterThan('huge')`
        max-width: 80%;
    `}
    }
    &.bg-secondary {
        background: var(--thirdy-color);
    }
`
