import React from 'react'

import * as S from './styled'

export const HeaderNavigation = ({ children, ...moreProps }) => (
  <S.HeaderNavWrapper {...moreProps}>
    <S.HeaderNav>
      <S.HeaderNavListItem to="/">
        <S.HeaderNavItem>Home</S.HeaderNavItem>
      </S.HeaderNavListItem>
      <S.HeaderNavListItem>
        <S.HeaderNavItem>About</S.HeaderNavItem>
      </S.HeaderNavListItem>
      <S.HeaderNavListItem>
        <S.HeaderNavItem>Skills</S.HeaderNavItem>
      </S.HeaderNavListItem>
      <S.HeaderNavListItem>
        <S.HeaderNavItem>Projects</S.HeaderNavItem>
      </S.HeaderNavListItem>
      <S.HeaderNavListItem>
        <S.HeaderNavItem>Testimonials</S.HeaderNavItem>
      </S.HeaderNavListItem>
    </S.HeaderNav>
  </S.HeaderNavWrapper>
)
