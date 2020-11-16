import {Link} from 'gatsby'
import styled from 'styled-components'

export const Button = styled(Link)`
   background-color: ${({ theme }) => theme.bgButton};
   color: ${({ theme }) => theme.textButton};
   transition: all 0.3s ease-out;
   &:hover {
     background-color: ${({ theme }) => theme.bgButtonHover};
     color: ${({ theme }) => theme.textButtonHover};
     // box-shadow: 2px 0 10px 2px ${({ theme }) => theme.bgButton}; 
   }
`