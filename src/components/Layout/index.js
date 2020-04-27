import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';

import GlobalStyles from '../../styles/global';
import { useDarkMode } from '../Theme/useDarkMode';
import { lightTheme, darkTheme } from '../Theme/themeStyles';
import ToggleTheme from '../Theme/toggleTheme';
import Sticky from '../Sticky';
import Header from '../Header';

import { GiHamburgerMenu } from 'react-icons/gi';

import * as S from './styled';

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
                        <ToggleTheme
                            theme={theme}
                            toggleTheme={toggleTheme}
                            className={`${toggleNav ? `drawer-open` : ``}`}
                        />
                        <S.DrawerToggle
                            className={`${toggleNav ? `drawer-open` : ``}`}
                            href={`#menu`}
                            onClick={() => setToggleNav(!toggleNav)}
                        >
                            <GiHamburgerMenu />
                        </S.DrawerToggle>
                    </Header>
                </Sticky>
                <S.NavDrawerWrapper>
                    <S.NavDrawer>
                        <ul role='menu'>
                            <li role='menuitem'>
                                <Link to={`/about`}>About</Link>
                            </li>
                            <li role='menuitem'>
                                <Link to={`/elements`}>Elements</Link>
                            </li>
                            <li role='menuitem'>
                                <Link to={`/tags`}>Tags</Link>
                            </li>
                        </ul>
                    </S.NavDrawer>
                </S.NavDrawerWrapper>
                <S.Main>{children}</S.Main>
                <footer className='site-foot'>
                    &copy; {new Date().getFullYear()}{' '}
                    <Link to={`/`}>{title}</Link> &mdash; Built with{' '}
                    <a
                        href='https://gatsbyjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Gatsby
                    </a>
                </footer>
            </S.Wrapper>
        </ThemeProvider>
    );
};

export default Layout;
