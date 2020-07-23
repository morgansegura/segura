import React from 'react'
import { Link } from 'gatsby'
/* Images */
import Logo from '../../../static/assets/icons/segura-square-icon.svg'
/* React Icons */
// import { DiGithubAlt, DiCodepen } from 'react-icons/di'
// import {
//   TiSocialDribbble,
//   TiSocialTwitter,
//   TiSocialLinkedin,
// } from 'react-icons/ti'
// import {
//   GrConnect,
//   GrTag,
//   GrTest,
//   GrSign,
//   GrSatellite,
//   GrArticle,
// } from 'react-icons/gr'
/* Styled Components */
import * as S from './styled'

const Header = ({ children, ...otherProps }) => {
  return (
    <S.HeaderWrapper {...otherProps}>
      <S.HeaderContainer>
        <S.LogoLink to="/" title="Home" aria-label="Home">
          <Logo className="logo" />
        </S.LogoLink>
        {children}
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
