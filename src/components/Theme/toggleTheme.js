import React, { useState } from 'react'

import { func, string } from 'prop-types'

import { WiMoonAltFirstQuarter } from 'react-icons/wi'
import * as S from './styled'

const ToggleTheme = ({ theme, toggleTheme }) => {
  const [toggleColors, setToggleColors] = useState(false)
  return (
    <S.ToggleContainer
      className={`toggle-theme ${toggleColors ? `color-drawer--open` : ``}`}
    >
      <WiMoonAltFirstQuarter onClick={() => setToggleColors(!toggleColors)} />
      <S.ThemeSelector>
        <S.Options>
          <div className="options-item theme-color">
            <span className="light-theme" theme={theme} onClick={() => toggleTheme('light')}></span>
            <span className="dark-theme" theme={theme} onClick={() => toggleTheme('dark')}></span>
            <span className="alt1-theme" theme={theme} onClick={() => toggleTheme('alt1')}></span>
            <span className="alt2-theme" theme={theme} onClick={() => toggleTheme('alt2')}></span>
          </div>
        </S.Options>
      </S.ThemeSelector>
    </S.ToggleContainer>
  )
}

ToggleTheme.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ToggleTheme
