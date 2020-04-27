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
            <div className={`site-wrapper ${toggleNav ? `drawer-open` : ``}`}>
                <Sticky>
                    <Header>
                        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
                        <a
                            className='nav-burger'
                            href={`#menu`}
                            onClick={() => setToggleNav(!toggleNav)}
                        >
                            <GiHamburgerMenu />
                        </a>
                    </Header>
                </Sticky>
                <div className='site-head-drawer'>
                    <nav id='swup' className='site-drawer-nav'>
                        <ul className='nav' role='menu'>
                            <li className='nav-about' role='menuitem'>
                                <Link to={`/about`}>About</Link>
                            </li>
                            <li className='nav-elements' role='menuitem'>
                                <Link to={`/elements`}>Elements</Link>
                            </li>
                            <li className='nav-tags' role='menuitem'>
                                <Link to={`/tags`}>Tags</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main id='site-main' className='site-main'>
                    <div id='swup' className='transition-fade'>
                        {children}
                    </div>
                </main>
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
            </div>
        </ThemeProvider>
    );
};

export default Layout;
