import Img from 'gatsby-image';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
    small: '480px',
    medium: '768px',
    large: '1024px',
    huge: '1400px',
});

export const PostCard = styled.article`
    margin-top: 30px;
`;

export const PostCardLink = styled(Link)`
    text-decoration: none;
    display: block;
    position: relative;

    ${customMedia.greaterThan('small')`       
        &:hover {
            div.post-card-link {
                box-shadow: 0 25px 25px rgba(0, 0, 0, 0.16);
                transform: translate(0, -10px);
                transition-delay: 0s !important;
            }
        }
    `}
`;
export const PostCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.cards};
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
    transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
`;
export const PostCardHeader = styled.header`
    position: relative;
    padding: 20px 15px 0;
`;
export const PostCardTitle = styled.h2`
    font-family: var(--headline-font);
    font-size: 24px;
    line-height: 30px;
    color: ${({ theme }) => theme.headline};
`;
export const PostCardDate = styled.span`
    display: block;
    position: absolute;
    right: 15px;
    top: 20px;
    font-size: 12px;
    line-height: 14px;
    padding: 3px 6px;
    border-radius: 4px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.outlines};
`;
export const PostCardBody = styled.p`
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    font-family: var(--base-font);
    font-weight: 400;
    line-height: 30px;
    color: ${({ theme }) => theme.text};
`;
export const PostCardImageWrapper = styled.div`
    position: relative;
    background-size: contain;
    background-position: top;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 15px 0;
`;
export const PostCardImage = styled(Img)`
    width: 100%;
    max-height: 235px;
`;
export const PostCardButtonBlock = styled.div`
    display: flex;
    align-items: center;
`;
export const PostCardTags = styled.span``;
export const PostCardFooterWrapper = styled.div`
    display: flex;
    width: 100%;
    max-width: 100%;
    padding: 15px;
    border-top: 1px solid ${({ theme }) => theme.outlines};
`;
export const PostCardFooter = styled.footer`
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.68px;
    text-transform: uppercase;
    width: 100%;
`;
export const PostCardAuthorImg = styled.div`
    height: 48px;
    width: 48px;
    border-radius: 100px;
    background-color: white;
    margin-bottom: 12px;
    background-size: 48px 48px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: inline-block;
    line-height: 66px;
    text-align: center;
`;
