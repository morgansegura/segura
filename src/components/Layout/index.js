import React from 'react'
import { ThemeProvider } from 'styled-components'
import { SiteHeader, BlogHeader } from '../Header'
import Footer from '../Footer'
import GlobalStyles from '../../styles/global'
import { useDarkMode } from '../Theme/useDarkMode'
import { lightTheme, darkTheme } from '../Theme/themeStyles'
import ToggleTheme from '../Theme/toggleTheme'

/* CSS in JS */
import * as S from './styled'

const LocaleContext = React.createContext()

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
                <S.Wrapper>
                    <ToggleTheme theme={theme} toggleTheme={toggleTheme} />

                    {path === '/' ? <SiteHeader /> : <BlogHeader />}
                    <S.SiteContent role="main">{children}</S.SiteContent>

                    {path === '/' ? <Footer /> : <Footer />}
                </S.Wrapper>
            </ThemeProvider>
        </LocaleContext.Provider>
    )
}

export { Layout, LocaleContext }
