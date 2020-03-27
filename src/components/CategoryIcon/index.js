import React from 'react'

import * as S from './styled'

const CategoryIcon = ({ props, children }) => {
    return (
        <S.Button className={classes}>
            {console.log(props)}
            <div>{children}</div>
        </S.Button>
    )
}

export default CategoryIcon
