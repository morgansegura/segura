import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default class Work extends Component {
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
          query WorkQuery {
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
            <section id="work" className="work">
              <div className="container">
                <h1>Work Section</h1>
              </div>
            </section>
          )
        }}
      />
    )
  }
}
