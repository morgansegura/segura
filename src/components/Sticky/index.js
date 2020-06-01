import React, { useEffect, useRef } from 'react'
import * as S from './styled'

function Sticky({ children, ...moreProps }) {
  const stickyElement = useRef(null)

  useEffect(() => {
    const el = document.getElementById('stickyElement')
    const sticky = el.offsetTop

    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        el.classList.add('sticky')
      } else {
        el.classList.remove('sticky')
      }
    })
    return () => {
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])

  return (
    <S.StickyContainer id="stickyElement" {...moreProps}>
      {children}
    </S.StickyContainer>
  )
}

export default Sticky
