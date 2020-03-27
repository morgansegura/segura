import React from 'react'

import * as S from './styled'

const Button = ({ link, classes, children }) => {
    return (
        <S.Button to={link} className={classes}>
            {children}
        </S.Button>
    )
}

export default Button
