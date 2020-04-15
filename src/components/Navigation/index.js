import React from 'react'
import useMenu from '../useMenu'
import useTranslations from '../useTranslations'

import * as S from './styled'

export const SiteNavigation = () => {
    const { siteMenuItems } = useMenu()
    const { button } = useTranslations()
    return (
        <div>
            <S.Navigation>
                {siteMenuItems.map((menu, i) => (
                    <S.NavigationLink
                        key={i}
                        to={menu.link}
                        aria-label={menu.name}
                    >
                        {menu.name}
                    </S.NavigationLink>
                ))}
                <S.NavigationButton to="/contact" aria-label="Login">
                    {button}
                </S.NavigationButton>
            </S.Navigation>
        </div>
    )
}
export const BlogNavigation = ({ isActive, handleToggleMenu }) => {
    const { blogMenuItems } = useMenu()
    const { button } = useTranslations()

    return (
        <div className="blog">
            <S.Navigation className={isActive ? 'active' : ''}>
                {blogMenuItems.map((menu, i) => (
                    <S.NavigationLink
                        key={i}
                        to={menu.link}
                        aria-label={menu.name}
                        activeClassName="active"
                        onClick={() => handleToggleMenu()}
                    >
                        {menu.name}
                    </S.NavigationLink>
                ))}
                <S.NavigationButton to="/contact" aria-label="Login">
                    {button}
                </S.NavigationButton>
            </S.Navigation>
        </div>
    )
}
