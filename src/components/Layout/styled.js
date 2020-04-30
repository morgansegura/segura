import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Main = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgBody};
`
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  transition: left 0.2s ease-in;

  &.drawer-open {
    left: -260px;
    transition: left 0.2s ease-out;
  }
`
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: var(--width-container);
`
export const NavDrawerWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  right: -260px;
  height: 100vh;
  width: 260px;
  padding-left: 40px;
  background-color: rgba(0, 0, 0, 0.05);
  transition: right 0.2s ease-in;

  &.drawer-open {
    right: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.03);
    transition: right 0.2s ease-out;
  }
`
export const NavDrawer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 80px;

  .drawer-nav-item {
    a {
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.ctaColor};
      padding: 0.25rem;
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.ctaDarkColor};
        & .gr {
          path {
            stroke: ${({ theme }) => theme.ctaDarkColor};
          }
        }
      }

      svg {
        width: 20px;
        height: 20px;
        margin-right: 0.75rem;
        &.gr {
          path {
            stroke: ${({ theme }) => theme.ctaColor};
          }
        }
      }
    }
  }
  .social-block {
    padding-top: 2rem;
    display: flex;
    align-items: center;

    a {
      display: flex;
      margin-right: 0.5rem;
      color: ${({ theme }) => theme.ctaColor};
      border: 1px solid ${({ theme }) => theme.ctaColor};
      padding: 2px;
      transition: all 0.3s ease-out;

      svg {
        margin-right: 0;
        width: 17px;
        height: 17px;
      }
      &:hover {
        color: ${({ theme }) => theme.ctaDarkColor};
        border: 1px solid ${({ theme }) => theme.ctaDarkColor};
      }
    }
  }
`
export const DrawerToggle = styled.div`
  font-size: 22px;
  cursor: pointer;
  transition: opacity 0.3sec ease-out;

  svg {
    fill: ${({ theme }) => theme.headline};
  }
  &:hover {
    opacity: 0.8;
  }
`

export const FooterWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.outlines};
`

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 14px;
  padding: 1rem 20px 0.75rem;
  color: ${({ theme }) => theme.subheadline};

  background-color: ${({ theme }) => theme.bgBody};

  ${customMedia.greaterThan('medium')`
        justify-content: flex-end;
        padding-left: 40px;
        padding-right: 40px;
    `}
  p {
    position: relative;
    top: -3px;
    color: ${({ theme }) => theme.headline};
    opacity: 0.65;
    font-weight: 300;
    padding-right: 0.5rem;
  }
`
