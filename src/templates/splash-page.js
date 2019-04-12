import React, { Component } from 'react'
import Contact from '../components/Contact'
import SEO from '../components/SEO'
import Countdown from '../components/Countdown'
import Overlay from '../components/Overlay'
import * as moment from 'moment'
import { toggleFlip } from '../helpers/helpers'
import '../assets/styles.css'

class SplashPageTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    // closeOverlay()
    const { siteMetadata: splashData } = this.props.data.site
    const { countdown_date, countdown } = this.props.data.prismicHomepage.data

    return (
      <div id="splash" className="wrapper splash-page bgimg masthead">
        <div className="bgimg blob-left1" />
        <SEO title={splashData.title} />

        <main className="main d-flex flex-column justify-content-center align-items-center">
          <header className="splash-header">
            <div className="segura__block">
              <h1 className="t-center segura__logo">{splashData.shortName}</h1>
            </div>
          </header>
          <section id="splash" className="splash card card--light flip">
            <button
              className="trigger__close trigger__close--dark trigger__close--sm"
              onClick={toggleFlip}
            >
              <span className="iconify" data-icon="mdi-close-circle-outline" />
            </button>
            <div className="container container--sm">
              <div className="side-one">
                <div className="coming-soon">
                  <h2 className="t-center">We're almost ready to launch. </h2>
                  <p>
                    {' '}
                    <span className="darker">
                      {moment(countdown_date).format('MMMM DD, YYYY')}
                    </span>
                  </p>
                </div>
                <hr className="hr hr-1 hr--grey-200 ml-minus-45 mr-minus-45" />
                {countdown === 'on' ? (
                  <Countdown date={countdown_date} />
                ) : null}
                <hr className="hr hr-1 hr--grey-200 ml-minus-45 mr-minus-45" />
                <div className="d-flex justify-content-center mt-40">
                  <button
                    className="m-auto btn btn--sm btn__round btn--cta"
                    onClick={toggleFlip}
                  >
                    Get in touch!
                  </button>
                </div>
              </div>
              <div className="side-two">
                <Contact />
              </div>
            </div>
          </section>
        </main>
        <footer className="footer" />
        <Overlay />
      </div>
    )
  }
}

export default SplashPageTemplate
