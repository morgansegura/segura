import React from 'react'
/* Styled Components */
import * as S from './styled'

export const MainNavigation = ({ props }) => (
  <S.MainNavDrawer>
    <S.MainNav {...props}>
      <S.MenuLabel>Menu</S.MenuLabel>
      <S.MainNavLink to={`/portfolio`}>Projects</S.MainNavLink>
      <S.MainNavLink to={`/blog`}>Blog</S.MainNavLink>
      <S.MainNavLink to={`/tags`}>Tags</S.MainNavLink>
      <S.MainNavLink to={`/portfolio`}>About</S.MainNavLink>
      <S.MainNavLink to={`/portfolio`}>Contact</S.MainNavLink>
    </S.MainNav>
  </S.MainNavDrawer>
)
