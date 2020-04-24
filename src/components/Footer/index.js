import React from 'react'
import useTranslations from '../useTranslations'
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import Logo from '../../images/segura-icon.svg'

import * as S from './styled'

const Footer = () => {
    return (
        <S.FooterWrapper>
            <S.FooterContainer>
                <div className="social-block">
                    <a href="#" title="Connect with me on Linkedin">
                        <FaLinkedinIn />
                    </a>
                    <a href="#" title="Follow me on Github">
                        <FaGithubAlt />
                    </a>
                    <a href="#" title="Follow me on Twitter">
                        <FaTwitter />
                    </a>
                </div>
                <p>Segura L.L.C. &copy; {new Date().getFullYear()}</p>
            </S.FooterContainer>
        </S.FooterWrapper>
    )
}

export default Footer
