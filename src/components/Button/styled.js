import styled from 'styled-components'

export const ButtonBlock = styled.div`
  margin-top: 30px;
`
export const ButtonOutline = styled.button`
    cursor: pointer;
    display: inline-block;
    position: relative;
    padding: 0.8em 2em;
    margin-bottom: 0.25em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    text-shadow: none;
    border: 2px solid ${({ theme }) => theme.accentSecondary};
    color: ${({ theme }) => theme.textButton};
    background-color: transparent;
    border-radius: 0;
    font-family: var(--headline-font);
    transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.accentSecondary};
    border-color: ${({ theme }) => theme.accentSecondary};
    color: #fff;
  }
`
export const ButtonSolid = styled.button`
    cursor: pointer;
    display: inline-block;
    position: relative;
    padding: 0.8em 2em;
    margin-bottom: 0.25em;
    font-size: 1em;
    line-height: 1.2;
    border: 0;
    outline: 0;
    text-shadow: none;
    border: 2px solid ${({ theme }) => theme.accentSecondary};
    color: #fff;
    background-color: ${({ theme }) => theme.textButton};
    border-radius: 0;
    font-family: var(--headline-font);
    transition: all 0.3s ease-in-out;

  &:hover {
    background-color: transparent;
    border-color: ${({ theme }) => theme.accentSecondary};
    color: ${({ theme }) => theme.textButton};
  }
`
