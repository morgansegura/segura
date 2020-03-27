import React from 'react'

import * as S from './styled'

const Card = ({ classes, children }) => {
    return (
        <S.Card className={classes}>
            <S.CardSubPartial>{children}</S.CardSubPartial>
        </S.Card>
    )
}

export default Card
