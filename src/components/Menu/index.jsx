import React from 'react'
import {Link} from 'gatsby'
import Logo from '../../../static/assets/icons/segura-square-icon.svg'

// Menu
const menu = [
    {
        title: '',
        label: 'Home',
        path: '/',
    },
    {
        title: '',
        label: 'About',
        path: '/about',
    },
    {
        title: '',
        label: 'Skills',
        path: '/skills',
    },
    {
        title: '',
        label: 'Projects',
        path: '/projects',
    },
    {
        title: '',
        label: 'Testimonials',
        path: '/testimonials',
    },
];

import * as S from './styled'

export const MainNavigation = (props) => (
    <S.MainNavDrawer {...props}>
        <div className="h-24 flex flex-col justify-center text-center">
            <S.Logo className="mx-auto"
                    to="/"
                    title="Home"
                    aria-label="Home">
                <Logo className="logo w-12 h-12 lg:mx-auto"/>
            </S.Logo>
        </div>
        <div className="w-full grid grid-cols-1 text-center">
            {
                menu.map(item => (
                    <S.MenuItem title={item.title}
                          to={item.path}
                          className="main-nav-item h-16 text-sm flex justify-center items-center border border-gray-500 hover:bg-color-400 transition ease-out duration-300">
                        <div>{item.label}</div>
                    </S.MenuItem>
                ))
            }
        </div>
    </S.MainNavDrawer>
)
