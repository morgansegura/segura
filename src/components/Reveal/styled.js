import styled from 'styled-components'

const Revealable = styled('div')`
    opacity: ${({ show }) => (show ? '100' : '0')};
    margin-top: ${({ show }) => (show ? '0' : '100px')};
    transition: opacity ease-out 0.5s, margin-top cubic-bezier(0, 0, 0.58, 1) 1s;
`
