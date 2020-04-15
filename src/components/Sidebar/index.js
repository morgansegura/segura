import React from 'react'

import * as S from './styled'

const Sidebar = ({ props, children, ...otherProps }) => {
    return <S.Sidebar {...otherProps}> {children}</S.Sidebar>
}

export default Sidebar
