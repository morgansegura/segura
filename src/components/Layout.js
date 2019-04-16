import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

import '../assets/styles.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      console.log(data)

      return (
        <div id="layout">
          <SEO title={data.site.siteMetadata.title} />
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      )
    }}
  />
)

Layout.propTypes = {
  siteTitle: PropTypes.string,
}

Layout.defaultProps = {
  siteTitle: ``,
}

export default Layout
