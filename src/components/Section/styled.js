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
        font-weight: 600;
        font-family: var(--headline-font);
        color: ${({ theme }) => theme.headline};
        margin-bottom: 30px;

        ${customMedia.lessThan('medium')`
            font-size: 60px;
            line-height: 70px;
            text-align: center;
        `}
        ${customMedia.greaterThan('small')`
            font-size: 80px;
            line-height: 75px;
            text-align: left;
        `}
    }

    .section-subline {
        font-size: 2rem;
        font-weight: 600;
        line-height: 1.4;
        padding-bottom: 20px;

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
        position: relative;
        display: block;
        color: ${({ theme }) => theme.superText};
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 2;
        line-height: 1rem;
        padding-left: 0.75rem;
        padding-bottom: 20px;

        &:after {
            position: absolute;
            content: '';
            height: 50%;
            top: 0;
            left: 0;
            width: 3px;
            background-color: ${({ theme }) => theme.primaryColor};
        }
    }
    p {
        font-size: 0.9375rem;
        font-weight: 500;
        line-height: 2;
        color: ${({ theme }) => theme.text};
    }

    .clean-wrap {
        &--left {
            ${customMedia.greaterThan('medium')`
                padding-right: 50px;     
            `}
            ${customMedia.greaterThan('xlarge')`
                padding-right: 200px;     
            `}
        }
        &--right {
            ${customMedia.greaterThan('medium')`
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
        margin-bottom: 50px;

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
    .search-blog {
        padding: 0.5rem;
        font-size: 14px;
        background-color: white;
        border: 1px solid var(--base-medium-light);
        border-radius: 4px;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        width: 100%;

        &:focus {
        }
    }
    .list {
        &-nav {
            display: flex;
            align-items: flex-end;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
        &-sorter {
            display: flex;
            flex-wrap: wrap;
            padding-top: 1rem;
        }
        &-anchor {
            text-decoration: none;
            color: ${({ theme }) => theme.headline};
            border: 1px solid ${({ theme }) => theme.outlines};
            background-color: ${({ theme }) => theme.bgBodyLight};
            padding: 2px 8px;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            border-radius: 4px;
            font-size: 14px;
        }
    }
    /* Post tem */
    .post-item-wrapper {
        border-left: 5px solid ${({ theme }) => theme.outlines};
        padding-left: 0.5rem;
    }
    .post-item {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin-bottom: 1rem;
        /* border-radius: 4px; */
        border: 1px solid ${({ theme }) => theme.outlines};
        background-color: ${({ theme }) => theme.bgBodyLight};
        /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.3); */

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
            padding-bottom: 0.5rem;
            font-size: 14px;

            svg {
                position: relative;
                top: 2px;
                margin-right: 0.125rem;
                color: ${({ theme }) => theme.text};

                &:not(:first-child) {
                    margin-left: 0.5rem;
                }
            }
            .date,
            .category,
            .time-to-read {
                margin-right: 0.5rem;
            }
            .category,
            .time-to-read {
                color: ${({ theme }) => theme.textLight};
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
    .border-and-buffer {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 1.5rem;
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
        width: 100%;

        &:focus {
            outline: none;
        }
    }
`
