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

export const Post = styled.article``
export const MetaBlock = styled.div`
    display: block;
    width: 100%;
`

export const AuthorCard = styled.div`
    margin-top: 1.56em;
    display: flex;

    .author-card__icon {
        width: 45px;
        height: 45px;
        background-color: white;
        border-radius: 100%;
        margin-right: 1rem;
    }
    .author-card__meta {
        p {
            font-size: 13px;
            letter-spacing: 0;
            line-height: 1.4;
            margin: 0 0 0.25rem;
        }

        .name {
            color: ${({ theme }) => theme.text};
        }
        .date,
        .time-to-read {
            color: ${({ theme }) => theme.textOffset};
        }
        .date {
        }
        .time-to-read {
        }
    }
`
export const SocialBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-left: 65px;
    margin-top: 0.25rem;
    margin-bottom: -10px;

    svg {
        margin-right: 0.5rem;
        width: 20px;
        height: 20px;
    }
`

export const PostTitle = styled.h1`
    margin-top: 32px;
    font-size: 30px;
    line-height: 40px;
    font-size: 400;
    color: ${({ theme }) => theme.headline};

    ${customMedia.lessThan('large')`

    `}
`

export const Content = styled.article`
    margin: auto;
    max-width: 680px;
    padding: 40px 20px;
    /* padding: 2rem 0; */
    ${customMedia.lessThan('large')`
        max-width: 100%;
    `}
    p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
        ${customMedia.lessThan('large')`
            word-break: break-word;
        `}
    }
    p {
        font-size: 21px;
        line-height: 32px;
        letter-spacing: -0.004em;
        line-height: 1.4;
        margin: 0 0 0.25rem;
        margin-top: 1.56em;
        margin-bottom: -0.46em;
        color: ${({ theme }) => theme.text};

        ${customMedia.lessThan('large')`
               font-size: 18px;
               line-height: 28px;
        `}
    }

    ul,
    ol {
        list-style: disc;
        padding-left: 2.5rem;
        margin: 0 auto 1.6rem;
    }
    li {
        padding: 0.625rem 0;
        & > ul {
            margin-bottom: 0;
        }
    }
    p,
    li {
        code {
            word-wrap: break-word;
        }
    }
    img {
        display: block;
        max-width: 100%;
    }
    iframe {
        padding: 0 1.6rem 1.6rem;
        width: 100%;
        ${customMedia.lessThan('large')`
      padding: 0 1rem;
    `}
    }
    blockquote {
        color: var(--postColor);
        border-left: 0.3rem solid var(--highlight);
        padding: 0 1.875rem;
        margin: 3.125rem auto;
    }
    hr {
        border: 1px solid ${({ theme }) => theme.outlines};
        margin: 3rem auto;
    }
    #twitter-widget-0,
    .instagram-customMedia,
    .twitter-tweet {
        margin: 20px auto !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: 500;
    }
    h1 {
    }
    h2 {
        font-size: 2.1rem;
        ${customMedia.lessThan('large')`
      font-size: 1.375rem;
    `}
    }
    h3 {
        font-size: 1.6rem;
        ${customMedia.lessThan('large')`
      font-size: 1.125rem;
    `}
    }
    h4 {
        font-size: 1.4rem;
    }
    h5 {
        font-size: 1.2rem;
    }
    strong {
        font-weight: 700;
    }
    .gatsby-resp-image-background-image {
        z-index: 2;
        opacity: 1 !important;
    }
    .gatsby-resp-image-image {
        box-shadow: none !important;
        transition: opacity 0.2s;
        &.lazyload {
            opacity: 0;
        }
        &.lazyloaded {
            opacity: 1;
            z-index: 3;
        }
    }
    .gatsby-highlight {
        padding: 0 1.6rem 1.6rem;
        ${customMedia.lessThan('large')`
      padding: 0;
    `}
    }
    .instagram-customMedia {
        margin: 1rem auto !important;
    }
    a {
        border-bottom: 1px dashed var(--highlight);
        color: var(--highlight);
        text-decoration: none;
        transition: opacity 0.5s;
        svg {
            color: var(--postColor);
        }
        &:hover {
            opacity: 0.8;
        }
    }
`
