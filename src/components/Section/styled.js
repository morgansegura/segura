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
        letter-spacing: 1px;
        font-family: var(--headline-font);
        color: ${({ theme }) => theme.headline};

        ${customMedia.lessThan('medium')`
            font-size: 60px;
            line-height: 70px;
            padding-bottom: 2rem;
            text-align: center;
        `}
        ${customMedia.greaterThan('small')`
            font-size: 80px;
            line-height: 75px;
            padding-bottom: 3rem;
            text-align: left;
        `}
    }

    .section-subline {
        font-size: 2rem;
        line-height: 1.4;
        padding-bottom: 1.2rem;
        font-weight: 600;
        color: ${({ theme }) => theme.subline};

        &--small {
            font-size: 1rem;
            padding-bottom: 0;

            ${customMedia.greaterThan('small')`
                font-size: 1.2rem;
            `}
            ${customMedia.greaterThan('xlarge')`
                font-size: 1.5rem;
            `}
        }
    }
    .super-text {
        display: block;
        color: ${({ theme }) => theme.superText};
        font-size: 1.025rem;
        line-height: 1.025rem;
        font-weight: 500;
        padding-bottom: 20px;
    }
    p {
        font-size: 1.025rem;
        line-height: 2;
        letter-spacing: 0.5px;
        color: ${({ theme }) => theme.text};
    }

    .clean-wrap {
        &--left {
            ${customMedia.greaterThan('large')`
                padding-right: 50px;     
            `}
            ${customMedia.greaterThan('xlarge')`
                padding-right: 200px;     
            `}
        }
        &--right {
            ${customMedia.greaterThan('large')`
                padding-left: 50px;     
            `}
            ${customMedia.greaterThan('xlarge')`
                padding-left: 200px;     
            `}
        }
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
        justify-content: center;

        a {
            color: ${({ theme }) => theme.primaryColor};

            &:hover {
                color: ${({ theme }) => theme.primaryLightColor};
            }
            &:active {
                color: ${({ theme }) => theme.primaryDarkColor};
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

        ${customMedia.greaterThan('small')`
            justify-content: flex-start;
        `}
    }
    .list {
        &-sorter {
            display: flex;
            flex-wrap: wrap;
            padding-top: 1rem;
        }
        &-anchor {
            text-decoration: none;
            color: ${({ theme }) => theme.headline};
            background-color: ${({ theme }) => theme.sectionMediumDark};
            padding: 2px 8px;
            margin-right: 5px;
            margin-bottom: 5px;
            border-radius: 4px;

            &:hover {
                opacity: 0.8;
            }
            &:active {
                opacity: 0.6;
            }
        }
    }
    /* Post tem */
    .post-item {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.sectionMediumDark};

        .title {
            display: flex;
            align-items: center;
            font-size: 1.125rem;
            color: ${({ theme }) => theme.headline};

            svg {
                margin-left: 5px;
            }
        }
        .meta {
            display: flex;
            align-items: center;
            padding-bottom: 0.25rem;

            .date,
            .category,
            .time-to-read {
                margin-right: 0.5rem;
            }
            .category,
            .time-to-read {
                color: ${({ theme }) => theme.superText};
            }
            .time-to-read {
                content: 'min';
            }
        }

        &:hover {
            opacity: 0.9;
        }
        &:active {
            opacity: 0.7;
        }
    }
    /* Counters */
    .counters {
        display: flex;

        .counter-item {
        }
        .numbers {
            display: flex;
            align-items: center;
            padding-right: 2rem;
        }
        .number {
            color: ${({ theme }) => theme.primaryColor};
            font-size: 3.5rem;
            padding-right: 0.5rem;
            font-weight: 800;
            font-family: var(--headline-font);
        }
        .description-small {
            color: ${({ theme }) => theme.text};
            font-size: 13px;
            line-height: 21px;
        }
    }
    .tab-button {
        cursor: pointer;
        text-align: inherit;
        border: none;
        padding: 0;
        margin: 0;
        background-color: transparent;
        width: inherit;

        &:focus {
            outline: none;
        }
    }
`
