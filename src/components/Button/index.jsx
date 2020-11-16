import React from 'react'

// Styled components
import * as S from './styled'

export default ({ children, url, ...otherProps }) => (
  <S.Button    
    className={`mt-6 ml-auto text-center inline-flex lg:block py-3 px-6 rounded-md shadow-md font-semibold text-lg font-sans ${otherProps}`}
    to={url}>
    {children}
  </S.Button>
)
