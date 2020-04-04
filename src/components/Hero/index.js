import React from 'react'

import * as S from './styled'

const Hero = ({ styles, classes, children }) => {
    return <S.Hero style={{ styles }} className={classes}>
        {children}
    </S.Hero>
}

export default Hero
