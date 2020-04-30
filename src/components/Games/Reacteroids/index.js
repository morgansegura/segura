import React from 'react'
import { Reacteroids } from './Reacteroids'

const WrapGameElement = ({ props }) => (
  <div>
    <Reacteroids {...props} />
  </div>
)

export default WrapGameElement
