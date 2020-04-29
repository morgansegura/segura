import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
    huge: '1400px',
});

export const BlogContainer = styled.section`
    max-width: var(--width-container);
    padding: 3rem 20px;

    ${customMedia.greaterThan('medium')`
        padding: 3rem 40px;
	`}
`;

export const BlogHeader = styled.header`
    h1 {
        font-size: 40px;
        line-height: 67px;
        color: ${({ theme }) => theme.headline};

        span {
            font-size: 1rem;
            position: relative;
            top: -15px;
            color: ${({ theme }) => theme.headline};
        }
    }
`;

export const BlogPostFeed = styled.div`
    /* p {
        font-size: 14px;
        line-height: 30px;
        color: ${({ theme }) => theme.text};
    } */
`;
