import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default class Team extends Component {
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
          query TeamQuery {
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
            <section id="team" className="team">
              <div className="container">
                <h1>Team Section</h1>
              </div>
            </section>
          )
        }}
      />
    )
  }
}
