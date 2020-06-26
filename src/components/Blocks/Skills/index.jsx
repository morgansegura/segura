import React from 'react'
import { skillsList } from '../../../../data/data'
import List from '../../List'
import * as S from './styled'

const lists = skillsList.list

export default () => {
  return (
    <S.SkillSet>
      <S.SuperText>Curabitur convallis fringilla diam</S.SuperText>
      <S.Headline>
        Innovation solutions
        <span>
          to boost <i>your creative</i> projects
        </span>
      </S.Headline>
      <S.BodyCopy>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in
        pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur
        nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi
        tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed
        aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum
        facilisis massa, a consequat purus viverra.
      </S.BodyCopy>
      {console.log(lists)}
      {lists.map(list => (
        <List key={list.title} props={list} />
      ))}
    </S.SkillSet>
  )
}
