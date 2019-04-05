import PropTypes from 'prop-types'
import { StaticQuery, graphql, Link } from 'gatsby'
import React from 'react'

const MenuHeader = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query MenuHeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      // const menuMain = data.allPrismicNavigation.edges;
      return (
        <nav id="navHeader" className="nav__header col-12 col-md-10">
          <div className="nav__header__inner row">
            <div className="nav__primary col-12">
              <Link to="/" className="nav__item" rel="" aria-label="">
                Members
              </Link>
            </div>
          </div>
        </nav>
      )
    }}
  />
)

MenuHeader.propTypes = {
  siteTitle: PropTypes.string,
}

MenuHeader.defaultProps = {
  siteTitle: ``,
}

export default MenuHeader
