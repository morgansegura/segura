import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

// import MenuHeader from './Menus/menuHeader'

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
          <div className="row header__inner">
            <div className="header__menu__left header__menu__end__left col-1">
              Menu
            </div>
            <div className="col-10 row header__menu--inner">
              <div className="header__menu__left col-5">Login / Register</div>
              <div className="header__logo col-2" />
              <div className="header__menu__right col-5">Shop</div>
            </div>
            <div className="header__menu__right header__menu__end__right col-1">
              Tickets
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
