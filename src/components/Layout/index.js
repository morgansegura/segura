import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { SiteHeader, BlogHeader } from '../Header'
import Footer from '../Footer'
import GlobalStyles from '../../styles/global'
import { useDarkMode } from '../Theme/useDarkMode'
import { lightTheme, darkTheme } from '../Theme/themeStyles'
import ToggleTheme from '../Theme/toggleTheme'

import * as S from './styled'

const LocaleContext = React.createContext()

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
function Layout({ path, children, pageContext: { locale } }) {
    const [theme, toggleTheme, componentMounted] = useDarkMode()

    const themeMode = theme === 'light' ? lightTheme : darkTheme

    if (!componentMounted) {
        return <div />
    }

    return (
        <LocaleContext.Provider value={{ locale }}>
            <ThemeProvider theme={themeMode}>
                <GlobalStyles />
                <S.Wrapper path={path}>
                    <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
                    <h1>
                        It's a{' '}
                        {theme === 'light' ? 'light theme' : 'dark theme'}!
                    </h1>
                    {path === '/' ? <SiteHeader /> : <BlogHeader />}
                    <S.SiteContent role="main">{children}</S.SiteContent>
                    {path === '/' ? <Footer /> : <Footer />}
                </S.Wrapper>
            </ThemeProvider>
        </LocaleContext.Provider>
    )
}

export { Layout, LocaleContext }
