import Img from 'gatsby-image';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
    huge: '1400px',
});

export const BlogContainer = styled.article`
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
`;

export const BlogHeader = styled.header`
    margin-top: 40px;
`;

export const BlogTitle = styled.h1`
    font-size: 40px;
`;

export const BlogDescription = styled.p`
    font-size: 18px;
`;

export const BlogImageWrapper = styled.div`
    h3 {
        color: offset;
    }
`;

export const BlogImage = styled(Img)``;

export const BlogContent = styled.div`
    p {
        font-size: 21px;
        line-height: calc(21px * 1.5);
        font-weight: 300;
        letter-spacing: -0.003em;
    }
`;

export const BlogDate = styled.div``;

export const BlogAuthor = styled.div``;

export const BlogSocialBlock = styled.div``;

export const BlogSocial = styled.div``;

export const BlogFooter = styled.footer``;
