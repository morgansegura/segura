import React, { useState } from 'react'
/* Components */
import { useDarkMode } from '../Theme/useDarkMode'
import { lightTheme, darkTheme, alt1Theme, alt2Theme } from '../Theme/themeStyles'
import ToggleTheme from '../Theme/toggleTheme'
import Header from '../Header'
import { MainNavigation } from '../Menu'
/* Styled Components */

import GlobalStyles from '../../styles/global'
import * as S from '../../styles/layout/styled'
import { ThemeProvider } from 'styled-components'

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
      <GlobalStyles />
        <Header className={`lg:ml-48 fixed z-10 h-24 px-10 flex items-center justify-between ${toggleNav ? 'drawer-open' : ''}`}>
          <S.MainNavToggle className="flex lg:hidden" onClick={() => setToggleNav(!toggleNav)}>
            <S.Hamburger className="hamburger">
              <div className="hamburger__center" />
            </S.Hamburger>
          </S.MainNavToggle>
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        </Header>
        <MainNavigation className={`
                fixed font-sans font-semibold z-10 inset-0 flex items-center flex-col w-64 lg:w-48 shadow-lg lg:shadow-none transform transition-translate ease-out duration-300
                ${toggleNav ? `translate-x-0` : `-translate-x-full lg:translate-x-0`}
            `} />
        <S.Content className="content pt-24 ml-0 lg:ml-48 xl:max-w-screen-xxl transition ease-out duration-300">
          {children}
        </S.Content>
    </ThemeProvider>
  )
}

export default Layout
