import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../static/segura-icon.svg';
import Sticky from './Sticky';

const Layout = (props) => {
    const { title, children } = props;
    const [toggleNav, setToggleNav] = React.useState(false);
    return (
        <div className={`site-wrapper ${toggleNav ? `drawer-open` : ``}`}>
            <Sticky>
                <header className='site-head'>
                    <div id='menu' className='site-head-container'>
                        <div className='site-head-left'>
                            <Link className='site-head-logo' to={`/`}>
                                {title}
                                <Logo className='logo' />
                            </Link>
                        </div>
                        <div className='site-head-drawer'>
                            <nav id='swup' className='site-drawer-nav'>
                                <ul className='nav' role='menu'>
                                    <li className='nav-about' role='menuitem'>
                                        <Link to={`/about`}>About</Link>
                                    </li>
                                    <li
                                        className='nav-elements'
                                        role='menuitem'
                                    >
                                        <Link to={`/elements`}>Elements</Link>
                                    </li>
                                    <li className='nav-tags' role='menuitem'>
                                        <Link to={`/tags`}>Tags</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <a
                            className='nav-burger'
                            href={`#menu`}
                            onClick={() => setToggleNav(!toggleNav)}
                        >
                            <div
                                className='hamburger hamburger--collapse'
                                aria-label='Menu'
                                role='button'
                                aria-controls='navigation'
                            >
                                <div className='hamburger-box'>
                                    <div className='hamburger-inner' />
                                </div>{' '}
                                <div className='hamburger-text-menu-text hidden'>
                                    Menu
                                </div>
                            </div>
                        </a>
                    </div>
                </header>
            </Sticky>
            <main id='site-main' className='site-main'>
                <div id='swup' className='transition-fade'>
                    {children}
                </div>
            </main>
            <footer className='site-foot'>
                &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link>{' '}
                &mdash; Built with{' '}
                <a
                    href='https://gatsbyjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Gatsby
                </a>
            </footer>
        </div>
    );
};

export default Layout;
