import React from 'react'

import * as S from './styled'

const Card = ({ classes, children }) => {
    return (
        <S.Card className={classes}>
            <S.CardContent>
                <S.CardSubPartial>{children}</S.CardSubPartial>
            </S.CardContent>
        </S.Card>
    )
}

export default Card
