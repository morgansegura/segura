import React from 'react'
import Logo from '../../../static/assets/icons/segura-square-icon.svg'
/* Styled Components */
import * as S from './styled'
import { LogoLink } from '../Header/styled'

export const MainNavigation = ({ props }) => (
  <S.MainNavDrawer>
    <S.MainNav {...props}>
      <S.MainNavHeader>
        <LogoLink
          className="logo-link--lg"
          to="/"
          title="Home"
          aria-label="Home"
        >
          <Logo className="logo" />
        </LogoLink>
        <h2>Morgan Segura</h2>
      </S.MainNavHeader>
      <S.MainNavLink to={`/`}>About</S.MainNavLink>
      <S.MainNavLink to={`/resume`}>Resume</S.MainNavLink>
      <S.MainNavLink to={`/portfolio`}>Portfolio</S.MainNavLink>
      <S.MainNavLink to={`/blog`}>Blog</S.MainNavLink>
      <S.MainNavLink to={`/Contact`}>Contact</S.MainNavLink>
    </S.MainNav>
  </S.MainNavDrawer>
)
