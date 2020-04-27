import React from 'react';
/* Components */

/* Images */
import Logo from '../../../static/assets/icons/segura-icon.svg';
/* Styled Components */
import * as S from './styled';

const Header = ({ children }) => {
    return (
        <S.HeaderWrapper>
            <S.HeaderContainer>
                <S.LogoLink to='/' title='Home' aria-label='Home'>
                    <Logo className='logo' />
                </S.LogoLink>
                <S.HeaderRight>{children}</S.HeaderRight>
            </S.HeaderContainer>
        </S.HeaderWrapper>
    );
};

export default Header;
