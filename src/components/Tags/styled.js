import { Link } from 'gatsby'
import styled from 'styled-components'
import { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  small: '480px',
  medium: '768px',
  large: '1024px',
  huge: '1400px',
})

export const Tag = styled(Link)`
  text-decoration: none;
  margin-right: 0.25rem;
  font-weight: 600;
  &.mdx {
    color: green;
  }
`
