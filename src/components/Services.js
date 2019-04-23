import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default class Services extends Component {
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
          query ServicesQuery {
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
                    // UA-138891523-1
            */
          return (
            <section id="services" className="services">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4 service__title">
                    <div className="service__title--inner">
                      <h2 className="headline">
                        Care and maintenance of swimming pools
                      </h2>
                      <p>
                        Collaborative thinking to further the overall value
                        proposition
                      </p>
                      <Link className="btn hero__button" to="/">
                        Learn More
                      </Link>
                    </div>
                  </div>
                  <div className="col-12 col-md-4 service">
                    <div className="service__inner">
                      <h3 className="headline">
                        Industry standard and future proof
                      </h3>
                      <p className="subtext">
                        Leverage agile frameworks to provide a robust synopsis
                        for high level overviews. Iterative approaches to
                        corporate strategy foster collaborative thinking to
                        further the overall value proposition
                      </p>
                      <div className="icon icon--sm">
                        <span
                          className="iconify html5"
                          data-icon="mdi-language-html5"
                        />
                        <span
                          className="iconify css3"
                          data-icon="mdi-language-css3"
                        />
                        <span className="iconify sass" data-icon="mdi-sass" />
                        <span
                          className="iconify bootstrap"
                          data-icon="mdi-bootstrap"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 service">
                    <div className="service__inner">
                      <h3 className="headline">
                        Passionate App Developers redy to work{' '}
                      </h3>
                      <p className="subtext">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day, going
                        forward, a new normal that has evolved from generation X
                        is on the runway heading towards a streamlined cloud
                        solution.
                      </p>
                      <div className="icon icon--sm" data-icon="">
                        <span
                          className="iconify javascript"
                          data-icon="mdi-language-javascript"
                        />
                        <span className="iconify react" data-icon="mdi-react" />
                        <span
                          className="iconify gatsby"
                          data-icon="mdi-gatsby"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-100" />
                  <div className="col-12 col-sm-6 col-md-4 service">
                    <div className="service__inner">
                      <h3 className="headline">
                        A team of real people wo understand{' '}
                      </h3>
                      <p className="subtext">
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate B2C
                        users after installed base benefits. Dramatically
                        visualize customer directed convergence without
                        revolutionary ROI.
                      </p>
                      <div className="icon icon--sm">
                        <span
                          className="iconify github"
                          data-icon="mdi-github-face"
                        />
                        <span
                          className="iconify webpack"
                          data-icon="mdi-webpack"
                        />
                        <span
                          className="iconify eslint"
                          data-icon="mdi-eslint"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 service">
                    <div className="service__inner">
                      <div className="icon">
                        <span className="iconify" data-icon="" />
                      </div>
                      <h3 className="headline">Helping out the community </h3>
                      <p className="subtext">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. Dramatically maintain
                        clicks-and-mortar solutions without functional
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4 service">
                    <div className="service__inner">
                      <div className="icon">
                        <span className="iconify" data-icon="" />
                      </div>
                      <h3 className="headline">Design and web development </h3>
                      <p className="subtext">
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas.
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </p>
                    </div>
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
