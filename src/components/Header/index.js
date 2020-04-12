import React, { useState } from 'react'
import useTranslations from '../useTranslations'
import { SiteNavigation, BlogNavigation } from '../Navigation'
import Logo from '../../images/segura-icon.svg'

import * as S from './styled'

export const SiteHeader = () => {
    const { home } = useTranslations()
    const [toggleMenu, setToggleMenu] = useState(false)

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    return (
        <S.HeaderWrapper className="site">
            <S.HeaderContainer>
                <S.LogoLink to="/" title={home} aria-label={home}>
                    <Logo className="logo" />
                </S.LogoLink>
                <S.NavMenu>
                    <SiteNavigation
                        isActive={toggleMenu}
                        handleToggleMenu={handleToggleMenu}
                    />
                </S.NavMenu>
            </S.HeaderContainer>
        </S.HeaderWrapper>
    )
}

export const BlogHeader = () => {
    const { home } = useTranslations()
    const [toggleMenu, setToggleMenu] = useState(false)

    function handleToggleMenu() {
        setToggleMenu(!toggleMenu)
    }

    return (
        <S.HeaderWrapper className="blog">
            <S.HeaderContainer>
                <S.LogoLink to="/" title={home} aria-label={home}>
                    <Logo className="logo" />
                </S.LogoLink>
                <S.NavMenu>
                    <BlogNavigation
                        isActive={toggleMenu}
                        handleToggleMenu={handleToggleMenu}
                    />
                </S.NavMenu>
            </S.HeaderContainer>
        </S.HeaderWrapper>
    )
}
