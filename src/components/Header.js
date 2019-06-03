import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Menu from './Menus/MenuOptions'

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      return (
        <div id="headerTop" className="header">
          <div className="container">
            <div className="row header__inner">
              <div className="header__logo col-2" />
              <h3>Segura</h3>
              <Menu location={`header`} />
            </div>
          </div>
        </div>
      )
    }}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
