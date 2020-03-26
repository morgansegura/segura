import React from 'react'

import * as S from './styled'

const Hero = ({ classes, children }) => {
    return <S.Hero className={classes}>{children}</S.Hero>
}

export default Hero
