import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default class Hero extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeroQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          return (
            <section id="home" className={`bgimg hero ${this.props.classes}`}>
              {/* this.props.children */}
              <div className="hero-image-shapes" />
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 col__left">
                    <div className="super-script">
                      <super>Did you know?</super>
                    </div>
                    <h2 className="headline">
                      Your Web App is your business card.
                    </h2>
                    <h3 className="subtext">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going
                      forward, a new normal that has evolved from generation X
                      is on the runway heading towards a streamlined cloud
                      solution.
                    </h3>
                    <Link className="btn hero__button" to="/">
                      Learn More
                    </Link>
                  </div>
                  <div className="col-12 col-md-6 col__right">
                    <div className="hero__image" />
                  </div>
                </div>
              </div>
            </section>
          )
        }}
      />
    )
  }
}
