import React from 'react'

/* CSS in JS */
import * as S from './styled'

export const ColumnWrapper = ({ children, ...otherProps }) => (
    <S.ColumnWrapper {...otherProps}>{children}</S.ColumnWrapper>
)

export const Column = ({ children, ...otherProps }) => (
    <S.Column {...otherProps}>{children}</S.Column>
)
