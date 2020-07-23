import React from 'react'

import { func, string } from 'prop-types'

import { Options } from './styled'
import { FaFont } from "react-icons/fa";
const ToggleFontSize = ({ fontSize, toggleFontSize }) => {
  return (
    <Options>
      <div className="options-item font-size">
        <span className="normal"><FaFont fontSize={fontSize}
          onClick={() => toggleFontSize('normal')} /></span>
        <span className="medium"><FaFont fontSize={fontSize}
          onClick={() => toggleFontSize('medium')} /></span>
        <span className="large"><FaFont fontSize={fontSize}
          onClick={() => toggleFontSize('large')} /></span>
      </div>
    </Options>
  )
}

ToggleFontSize.propTypes = {
  fontSize: string.isRequired,
  toggleFontSize: func.isRequired,
}

export default ToggleFontSize
