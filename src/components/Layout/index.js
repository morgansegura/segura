import React, { useState } from 'react'
/* Components */
import { useDarkMode } from '../Theme/useDarkMode'
import { lightTheme, darkTheme } from '../Theme/themeStyles'
// import ToggleTheme from '../Theme/toggleTheme'
import Header from '../Header'
import { SocialNavigation, MainNavigation } from '../Menu'
/* Styled Components */
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../../styles/global'
import * as S from './styled'

import { GrApps } from 'react-icons/gr'

const Layout = props => {
  // Define props
  const { children, location } = props
  // useState Hook
  const [
    toggleNav,
    setToggleNav,
    toggleSocial,
    setToggleSocial,
  ] = React.useState(false)
  // Toggle Theme Colors Mode
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      {/* BAse Global Styles */}
      <GlobalStyles />
      <S.Wrapper
        className={`${toggleNav ? `drawer-open` : `drawer-closed`} ${
          toggleSocial ? `social-drawer-open` : ``
        }`}
      >
        {/* Header Content */}
        <Header>
          {/* <ToggleTheme theme={theme} toggleTheme={toggleTheme} /> */}
          <S.MainNavToggle onClick={() => setToggleNav(!toggleNav)}>
            <S.Hamburger />
            <span>Menu</span>
          </S.MainNavToggle>
          <S.SocialNavToggle onClick={() => setToggleSocial(!toggleSocial)}>
            <GrApps />
          </S.SocialNavToggle>
        </Header>

        {/* Main Navigation Drawer */}
        <MainNavigation className={`${toggleNav ? `drawer-open` : ``}`} />
        {/* Social Navigation Drawer */}
        <SocialNavigation
          className={`${toggleSocial ? `social-drawer-open` : ``}`}
        />
        {/* Main Content ({children}) */}
        <S.Main>{children}</S.Main>
        {/* Main Footer */}
        <S.FooterWrapper>
          <S.FooterContainer>
            <span>
              &copy; Morgan Segura {new Date().getFullYear()} / All Projects are
              Open Source{' '}
            </span>
          </S.FooterContainer>
        </S.FooterWrapper>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
