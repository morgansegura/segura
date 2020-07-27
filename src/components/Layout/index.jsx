import React, { useState } from 'react'
/* Components */
import { useDarkMode } from '../Theme/useDarkMode'
import { lightTheme, darkTheme, alt1Theme, alt2Theme } from '../Theme/themeStyles'
import ToggleTheme from '../Theme/toggleTheme'
import ToggleFontSize from '../Theme/toggleFontSize'
import Header from '../Header'
import { MainNavigation } from '../Menu'
/* Styled Components */

import GlobalStyles from '../../styles/global'
import * as S from '../../styles/layout/styled'
import { ThemeProvider } from 'styled-components'
import { GrMoreVertical } from 'react-icons/gr'

const Layout = props => {
  // Define props
  const { children, location } = props

  // useState Hook
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false)

  // Toggle Theme Colors Mode
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'alt1' ? alt1Theme : theme === 'alt2' ? alt2Theme : darkTheme

  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      {/* BAse Global Styles */}
      <GlobalStyles />
      <S.Wrapper
        className={`${toggleNav ? `drawer-open` : ``} ${
          toggleMenu ? `squeeze-menu` : ``
          }`}
      >
        {/* Header Content */}
        <Header className="mobile">
          <S.MainNavToggle onClick={() => setToggleNav(!toggleNav)}>
            <S.Hamburger className="hamburger">
              <div className="hamburger__center" />
            </S.Hamburger>
            {/*<span>Menu</span>*/}
          </S.MainNavToggle>

          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />

          <S.SocialNavToggle onClick={() => setToggleMenu(!toggleMenu)}>
            <GrMoreVertical />
          </S.SocialNavToggle>
        </Header>

        {/* Main Navigation Drawer */}
        <MainNavigation />

        {/* Main Content ({children}) */}
        <S.Main>{children}</S.Main>
        {/* Main Footer 
        <S.FooterWrapper>
          <S.FooterContainer>
            <span>
              &copy; Morgan Segura {new Date().getFullYear()} / All Projects are
              Open Source{' '}
            </span>
          </S.FooterContainer>
        </S.FooterWrapper>
        */}
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
