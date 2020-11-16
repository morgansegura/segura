import styled from 'styled-components'

export const Body = styled.section`
  height: 100%;
  background-color: ${({ theme }) => theme.bgBlock1};
`
export const Header = styled.header`
  h3 {
    border: 1px solid ${({ theme }) => theme.borderHeadlineBlock1};
    color: ${({ theme }) => theme.borderHeadlineBlock1};
  }
`
export const PostCard = styled.div`
  background-color: ${({ theme }) => theme.bgCardBlock1};
  border: 1px solid ${({ theme }) => theme.borderCardBlock1};
  color: ${({ theme }) => theme.textCardBlock1};

  .title {
    color: ${({ theme }) => theme.textHeadlineCardBlock1};
  }
  .author {
    color: ${({ theme }) => theme.textOffsetBlock1};
  }
  .date, .category {
    color: ${({ theme }) => theme.textOffsetBlock1};
  }
  .excerpt {

  }
  .tags {
    .link {
      background-color: ${({ theme }) => theme.bgButton};
      color: ${({ theme }) => theme.textButton};
      transition: all 0.3s ease-out;
      &:hover {
        background-color: ${({ theme }) => theme.bgButtonHover};
        color: ${({ theme }) => theme.textButtonHover};
      }
    }
  }
`