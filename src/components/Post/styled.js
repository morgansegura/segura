import styled from 'styled-components'
import media from 'styled-media-query'

export const Post = styled.article``

export const AuthorCard = styled.div`
    display: flex;
    .author-card__icon {
        width: 45px;
        height: 45px;
        background-color: white;
        border-radius: 100%;
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
export const SocialBlock = styled.div``

export const PostTitle = styled.h1`
    font-size: 4rem;

    ${media.lessThan('large')`
    font-size: 2.8rem;
    line-height: 1.1;
  `}
`

export const Content = styled.section`
    margin: auto;
    max-width: 680px;
    /* padding: 2rem 0; */
    ${media.lessThan('large')`
        /* padding: 2rem 0; */
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
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.7;
        letter-spacing: 0.069rem;
        ${media.lessThan('large')`
            word-break: break-word;
        `}
    }
    p {
        margin: 1rem 0;
        color: ${({ theme }) => theme.text};
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 2.4rem auto 1rem;
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
        ${media.lessThan('large')`
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
    .instagram-media,
    .twitter-tweet {
        margin: 20px auto !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
        font-weight: 800;
        letter-spacing: 0.069rem;
        line-height: 1.4;
    }
    h1 {
        font-size: 2.8rem;
        ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
    }
    h2 {
        font-size: 2.1rem;
        ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
    }
    h3 {
        font-size: 1.6rem;
        ${media.lessThan('large')`
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
        ${media.lessThan('large')`
      padding: 0;
    `}
    }
    .instagram-media {
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
