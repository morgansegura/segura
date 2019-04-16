import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Menu from '../components/Menus/MenuOptions'
import React from 'react'

const Footer = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <footer id="footerMain" className="footer">
          <Menu />
        </footer>
      )
    }}
  />
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
