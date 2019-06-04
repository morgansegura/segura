import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import * as serviceWorker from '../components/serviceWorker'
import Layout from '../components/Layout'
import SplashPageTemplate from '../templates/splash-page'
import HomePageTemplate from '../templates/home-page'
import { smoothScroll } from '../helpers/helpers'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSplashPage:
        this.props.data.prismicHomepage.data.splash_page === 'on'
          ? true
          : false,
      bodyClassList: ' is--mobile-nav mobile-nav--is-closed',
    }
  }
  componentDidMount() {
    smoothScroll()
    const body = document.getElementsByTagName('body')[0]
    body.className += this.state.bodyClassList
  }
  componentWillUnmount() {}

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <script src="https://code.iconify.design/1/1.0.0/iconify.min.js" />
        </Helmet>
        {this.state.showSplashPage === true ? (
          <SplashPageTemplate data={this.props.data} />
        ) : (
          <Layout>
            <HomePageTemplate data={this.props.data} />
          </Layout>
        )}
      </React.Fragment>
    )
  }
}
serviceWorker.register()

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        shortName
      }
    }
    prismicHomepage {
      id
      data {
        title {
          text
        }
        content {
          html
        }
        countdown
        countdown_date
        splash_page
      }
    }
  }
`
