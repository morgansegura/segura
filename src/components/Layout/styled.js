import styled from 'styled-components'
import media from 'styled-media-query'

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
        font-size: 28px;
        line-height: 32px;

        ${media.greaterThan('large')`
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

        ${media.greaterThan('large')`
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
        ${media.greaterThan('large')`
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
        ${media.greaterThan('large')`
            /* 36px/46px */
            font-size: 36px;
            line-height: 46px;
        `}
    }
    h5,
    .h5 {
        /* 16px/24px */
        font-size: 16px;
        line-height: 24px;

        ${media.greaterThan('large')`
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

    .headline {
        position: relative;
        text-align: left;
        margin: 24px 0;
    }
    .section-title {
        /* 24px/28px */
        margin-bottom: 0;
        font-size: 1.5rem;
        line-height: 1.175;
    }
    .subline {
        /* 20px/28px */
        margin: 0 0 42px;
        letter-spacing: 0.21px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        ${media.greaterThan('large')`
            /* 20px/26px */
            font-size: 20px;
            line-height: 26px;
        `}
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
`

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    ${media.greaterThan('medium')`
    padding: 0 40px;    
  `}
`
