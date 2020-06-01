import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

// import shapesLeft from '../../public/assets/images/shapes-left.svg'
// import shapesRight from '../../public/assets/images/shapes-right.svg'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Container = styled.div`
  ${customMedia.greaterThan('large')`

    `};
`
