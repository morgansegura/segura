import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default class Clients extends Component {
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
          query ClientsQuery {
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
            <section id="clients" className="clients">
              <div className="container">
                <h1>Client Section</h1>
              </div>
            </section>
          )
        }}
      />
    )
  }
}
