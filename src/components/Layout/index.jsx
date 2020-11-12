import React, {useState} from 'react'
/* Components */
import {useDarkMode} from '../Theme/useDarkMode'
import {lightTheme, darkTheme, alt1Theme, alt2Theme} from '../Theme/themeStyles'
import ToggleTheme from '../Theme/toggleTheme'
import Header from '../Header'
import {MainNavigation} from '../Menu'
/* Styled Components */

import GlobalStyles from '../../styles/global'
import * as S from '../../styles/layout/styled'
import {ThemeProvider} from 'styled-components'
// Icons
import {FaGithubAlt} from "react-icons/fa";
import {SiGlassdoor, SiIndeed, SiLinkedin} from "react-icons/si";
import {MdEmail} from "react-icons/md";

const Layout = props => {
    // Define props
    const {children, location} = props

    // useState Hook
    const [toggleNav, setToggleNav] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)

    // Toggle Theme Colors Mode
    const [theme, toggleTheme, componentMounted] = useDarkMode()
    const themeMode = theme === 'light' ? lightTheme : theme === 'dark' ? darkTheme : theme === 'alt1' ? alt1Theme : theme === 'alt2' ? alt2Theme : darkTheme

    if (!componentMounted) {
        return <div/>
    }

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles/>
            <div className="wrapper relative flex flex-col h-screen">
                <div className="header-wrapper">
                    <Header className={`h-16 lg:h-24 lg:ml-48 fixed z-10 px-10 flex items-center justify-between ${toggleNav ? 'drawer-open' : ''}`}>
                        <S.MainNavToggle className="flex"
                                         onClick={() => setToggleNav(!toggleNav)}>
                            <S.Hamburger className="hamburger">
                                <div className="hamburger__center"/>
                            </S.Hamburger>
                        </S.MainNavToggle>
                        <ToggleTheme theme={theme} toggleTheme={toggleTheme}/>
                    </Header>
                    <MainNavigation className={`
                        fixed font-sans font-semibold z-10 inset-0 flex items-center flex-col w-64 lg:w-48 shadow-lg lg:shadow-none transform transition-translate ease-out duration-300
                        ${toggleNav ? `translate-x-0` : `-translate-x-full lg:translate-x-0`}
                    `}/>
                </div>
                <S.Content className="content flex-1 h-full lg:pt-24 ml-0 lg:ml-48">
                    {children}    
                    <S.Footer className="font-semibold text-sm font-headline py-4 flex items-center justify-end">
                        <div className="flex-1 flex justify-end mr-4">Morgan Segura | {new Date().getFullYear()}</div>            
                    </S.Footer>                       
                </S.Content>             
            </div>
        </ThemeProvider>
    )
}

export default Layout
