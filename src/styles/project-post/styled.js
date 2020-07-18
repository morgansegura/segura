import Img from 'gatsby-image'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const BlogWrapper = styled.article`

    ${customMedia.greaterThan('large')`

    `}
`
export const BlogContent = styled.div`

    ${customMedia.greaterThan('large')`

    `}
`
export const BlogImageWrapper = styled.div`

    ${customMedia.greaterThan('large')`

    `}
`
export const BlogImage = styled(Img)`

    ${customMedia.greaterThan('large')`

    `}
`
export const BlogHeader = styled.header`

    ${customMedia.greaterThan('large')`

    `}
`
export const BlogBody = styled.div`

    ${customMedia.greaterThan('large')`

    `}
`
export const BlogFooter = styled.footer`

    ${customMedia.greaterThan('large')`

    `}
`
export const AsideToolbar = styled.aside`

    ${customMedia.greaterThan('large')`

    `}
`
