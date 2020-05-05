import React from 'react'
/* Styled Components */
import * as S from './styled'

export const MainNavigation = ({ props }) => (
  <S.MainNavDrawer>
    <S.MainNav {...props}>
      <S.MenuLogo>Segura</S.MenuLogo>
      <S.MenuLabel>Menu</S.MenuLabel>
      <S.MainNavLink to={`/portfolio`}>Projects</S.MainNavLink>
      <S.MainNavLink to={`/blog`}>Blog</S.MainNavLink>
      <S.MainNavLink to={`/tags`}>Tags</S.MainNavLink>
      <S.MainNavLink to={`/portfolio`}>About</S.MainNavLink>
      <S.MainNavLink to={`/portfolio`}>Contact</S.MainNavLink>
    </S.MainNav>
  </S.MainNavDrawer>
)
export const SocialNavigation = ({ props }) => (
  <S.SocialNavDrawer {...props}>
    <S.SocialNav>
      <a
        href="https://www.linkedin.com/in/morgan-segura-4b08429"
        target="_blank"
        rel="noopener noreferrer"
        title="Connect with me on Linkedin"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/morgansegura"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow me on Github"
      >
        Github
      </a>
      <a
        href="https://twitter.com/codestandard"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow me on Twitter"
      >
        Twitter
      </a>
      <a
        href="https://codepen.io/morgansegura"
        target="_blank"
        rel="noopener noreferrer"
        title="Checkout my Codepens"
      >
        Codepen
      </a>

      <a
        href="https://dribbble.com/MorganSegura"
        target="_blank"
        rel="noopener noreferrer"
        title="Check me out on Dribbble"
      >
        Dribbble
      </a>
    </S.SocialNav>
  </S.SocialNavDrawer>
)
