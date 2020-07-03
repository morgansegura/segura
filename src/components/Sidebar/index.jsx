import React from 'react'

// Styled Components
import * as S from './styled'

export default ({ children, ...otherProps }) => (
  <S.Sidebar {...otherProps}>{children}</S.Sidebar>
)
