import React from 'react'

import * as S from './styled'

export default ({ props }) => (
  <S.ListItem className={!!props.iconLeft ? `icon-left` : `icon-right`}>
    {!!props.icon ? <S.ListItemICon>{props.icon}</S.ListItemICon> : ``}
    <S.ListItemContent>
      <S.ListItemHeading>{props.title}</S.ListItemHeading>
      <S.ListItemCopy>{props.content}</S.ListItemCopy>
    </S.ListItemContent>
  </S.ListItem>
)
