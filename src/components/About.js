import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default class About extends Component {
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
          query AboutQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => {
          /*
                - module 1
                    - title, subtext, button
                - modules
                    - title, subtext, link, icons, icon links
            */
          return (
            <section id="about" className="about">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-6 about__image" />
                  <div className="col-12 col-md-6">
                    <h2 className="headline">
                      I don't know how to say this, but we're kind of a big
                      deal!'
                    </h2>
                    <p className="subtext">
                      {' '}
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. Dynamically innovate
                      resource-leveling customer service for state of the art
                      customer service.
                    </p>
                    <Link className="btn hero__button" to="/">
                      Learn More
                    </Link>
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
