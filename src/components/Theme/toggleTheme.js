import React from 'react'

import { func, string } from 'prop-types'

import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import * as S from './styled'

const ToggleTheme = ({ theme, toggleTheme }) => {
  // const isLight = theme === 'light'
  return (
    <S.ToggleContainer
      className="toggle-theme"
      themeStyle={theme}
      onClick={toggleTheme}
    >
      <WiMoonAltFirstQuarter />
    </S.ToggleContainer>
  )
}

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ToggleTheme
