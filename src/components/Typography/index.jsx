import React from 'react'

// Styled Components
import * as S from './styled'

export const Heading = ({ type, text, className }) => (
  <S.Heading className={`heading ${type} ${className}`}>{text}</S.Heading>
)

// For the sake of time make this a class
// in its own components to reduce duplication
export const Headline = ({ text, className, size }) => (
  <S.Headline className={size}>
    {!!size && size === 'h1' ? <h1 className={className}>{text}</h1> : ``}
    {!!size && size === 'h2' ? <h2 className={className}>{text}</h2> : ``}
    {!!size && size === 'h3' ? <h3 className={className}>{text}</h3> : ``}
    {!!size && size === 'h4' ? <h4 className={className}>{text}</h4> : ``}
    {!!size && size === 'h5' ? <h6 className={className}>{text}</h6> : ``}
    {!!size && size === 'h6' ? <h5 className={className}>{text}</h5> : ``}
  </S.Headline>
)

export const Paragraph = ({ children, otherProps }) => (
  <S.Paragraph {...otherProps}>{children}</S.Paragraph>
)

export const Caption = ({ children, otherProps }) => (
  <S.Caption {...otherProps}>{children}</S.Caption>
)

export const HorizontalRule = ({ otherProps }) => (
  <S.HorizontalRule {...otherProps} />
)
