import React from 'react'

import { func, string } from 'prop-types'

import * as S from './styled'
import { FaFont } from "react-icons/fa";
const ToggleFontSize = ({ fontSize, toggleFontSize }) => {
  return (
    <S.FontToolbar>
      <div className="options-item font-size">
        <span className="normal"><span fontSize={fontSize}
          onClick={() => toggleFontSize('normal')}>SMALL</span></span>
        <span className="medium"><span fontSize={fontSize}
          onClick={() => toggleFontSize('medium')}>MEDIUM</span></span>
        <span className="large"><span fontSize={fontSize}
          onClick={() => toggleFontSize('large')}>LARGE</span></span>
      </div>
    </S.FontToolbar>
  )
}

ToggleFontSize.propTypes = {
  fontSize: string.isRequired,
  toggleFontSize: func.isRequired,
}

export default ToggleFontSize
