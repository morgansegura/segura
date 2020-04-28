import React from 'react';
import { Link } from 'gatsby';
/* Components */
import { useDarkMode } from '../Theme/useDarkMode';
import { lightTheme, darkTheme } from '../Theme/themeStyles';
import ToggleTheme from '../Theme/toggleTheme';
import Sticky from '../Sticky';
import Header from '../Header';
/* Styled Components */
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../styles/global';
import * as S from './styled';
/* Icons */
import { GiHamburgerMenu } from 'react-icons/gi';
import { DiGithubAlt, DiCodepen } from 'react-icons/di';
import {
    TiSocialDribbble,
    TiSocialTwitter,
    TiSocialLinkedin,
} from 'react-icons/ti';
import { GrTag, GrTest, GrSign, GrSatellite, GrArticle } from 'react-icons/gr';

const Layout = (props) => {
    const { title, children } = props;
    const [toggleNav, setToggleNav] = React.useState(false);
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!componentMounted) {
        return <div />;
    }
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <S.Wrapper className={`${toggleNav ? `drawer-open` : ``}`}>
                <Sticky>
                    <Header>
                        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
                        <S.DrawerToggle
                            onClick={() => setToggleNav(!toggleNav)}
                        >
                            <GiHamburgerMenu />
                        </S.DrawerToggle>
                    </Header>
                </Sticky>
                <S.NavDrawerWrapper
                    className={`${toggleNav ? `drawer-open` : ``}`}
                >
                    <S.NavDrawer>
                        <ul>
                            <li className='drawer-nav-item'>
                                <Link to={`/portfolio`}>
                                    <GrTest className='gr' /> Projects
                                </Link>
                            </li>
                            <li className='drawer-nav-item'>
                                <Link to={`/blog`}>
                                    <GrArticle className='gr' /> Blog
                                </Link>
                            </li>
                            <li className='drawer-nav-item'>
                                <Link to={`/tags`}>
                                    <GrTag className='gr' /> Tags
                                </Link>
                            </li>

                            <li className='drawer-nav-item'>
                                <Link to={`/portfolio`}>
                                    <GrSign className='gr' /> About
                                </Link>
                            </li>
                            <li className='drawer-nav-item'>
                                <Link to={`/portfolio`}>
                                    <GrSatellite className='gr' /> Contact
                                </Link>
                            </li>
                            <li className='drawer-nav-item'>
                                <div className='social-block'>
                                    <a
                                        href='#'
                                        title='Connect with me on Linkedin'
                                    >
                                        <TiSocialLinkedin />
                                    </a>
                                    <a href='#' title='Follow me on Github'>
                                        <DiGithubAlt />
                                    </a>
                                    <a href='#' title='Follow me on Twitter'>
                                        <TiSocialTwitter />
                                    </a>
                                    <a
                                        href='#'
                                        title='Check me out on Dribbble'
                                    >
                                        <DiCodepen />
                                    </a>

                                    <a href='#' title='Checkout my Codepens'>
                                        <TiSocialDribbble />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </S.NavDrawer>
                </S.NavDrawerWrapper>
                <S.Main>{children}</S.Main>
                <S.FooterWrapper>
                    <S.FooterContainer>
                        <p>&copy;{new Date().getFullYear()} . Morgan Segura</p>
                    </S.FooterContainer>
                </S.FooterWrapper>
            </S.Wrapper>
        </ThemeProvider>
    );
};

export default Layout;
