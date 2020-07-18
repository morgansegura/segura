import React from 'react'

// Styled components
import * as S from './styled'

export const ButtonSolid = ({ children, ...otherProps }) => (
  <S.ButtonSolid {...otherProps}>{children}</S.ButtonSolid>
)
export const ButtonOutline = ({ children, ...otherProps }) => (
  <S.ButtonOutline {...otherProps}>{children}</S.ButtonOutline>
)
