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

export const LayoutWithSidebar = styled.div``
export const Container = styled.div``
export const Content = styled.div``
export const Sidebar = styled.div`
  border-right: 1px solid #ccc;

  .title {
  }
  .list-items {
  }
  .list-item {
  }
`
export const Header = styled.div``
export const SearchForm = styled.div``
export const MiniCard = styled.div`
  .title {
  }
  .description {
  }
  .date {
  }
  .meta {
  }
  .icons {
  }
`
export const LoadMore = styled.div``
