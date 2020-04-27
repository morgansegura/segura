import React from 'react';

import Logo from '../../../static/segura-icon.svg';

import * as S from './styled';

const Header = ({ children }) => {
    return (
        <S.HeaderWrapper className='site'>
            <S.HeaderContainer>
                <S.LogoLink to='/' title='Home' aria-label='Home'>
                    <Logo className='logo' />
                </S.LogoLink>
                {children}
            </S.HeaderContainer>
        </S.HeaderWrapper>
    );
};

export default Header;
