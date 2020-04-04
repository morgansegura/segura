import React from 'react'

import * as S from './styled'

const Button = ({ children, ...otherProps }) => {
    return (
        <S.Button {...otherProps}>
            {children}
        </S.Button>
    )
}

export default Button
