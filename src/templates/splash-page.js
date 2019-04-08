import React, { Component } from 'react'
import Contact from '../components/Contact'
import SEO from '../components/SEO'
import Countdown from '../components/Countdown'
import '../assets/styles.css'

class SplashPageTemplate extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isToggleOn: false,
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
    // console.log(this.props)
  }

  componentDidMount() {}

  render() {
    console.log(this.state)
    const { siteMetadata: splashData } = this.props.data.site
    const currentDate = new Date()
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear()
    return (
      <div id="splash" className="wrapper">
        <SEO title={splashData.title} />
        <header className="header">Nothing has to go here</header>
        <main className="main">
          <section id="splash" className="splash pt-200">
            <div className="container">
              <div className="segura__block">
                <h1 className="t-center segura__logo">
                  {splashData.shortName}{' '}
                  <button
                    className="btn btn--sm btn__round btn--cta"
                    onClick={this.toggleModal}
                  >
                    click me
                  </button>
                </h1>
              </div>
              <div className="spinner__loader" />
              <div>
                <Countdown date={`${year}-12-24T00:00:00`} />
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">Nothing has to go here</footer>
        <div id="overlay__results">
          <div
            className={`overlay ${
              this.state.isToggleOn
                ? `overlay--is-visible`
                : `overlay--not-visible`
            }`}
          >
            <div className="modal">
              <button className="btn btn--cta" onClick={this.toggleModal}>
                close me
              </button>
              <Contact toggleModal={this.toggleModal.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashPageTemplate
