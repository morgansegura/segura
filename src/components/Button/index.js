import React from 'react'

import * as S from './styled'

const Button = ({ classes, children }) => {
    return <S.Button className={classes}>{children}</S.Button>
}

export default Button
