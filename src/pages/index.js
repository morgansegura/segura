import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SplashPageTemplate from '../templates/splash-page'
import HomePageTemplate from '../templates/home-page'
import { smoothScroll } from '../helpers/helpers'

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSplashPage: true,
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
      }
    }
  }
`
