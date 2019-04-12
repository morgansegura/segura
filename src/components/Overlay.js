import React, { Component } from 'react'
import { toggleOverlay } from '../helpers/helpers'

export default class Overlay extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <div id="overlay__results">
        <div className="overlay overlay--not-visible">
          <div className="modal container">
            <header>
              <button
                className="trigger__close trigger__close--light"
                onClick={toggleOverlay}
              >
                <span
                  className="iconify"
                  data-icon="mdi-close-circle-outline"
                />
              </button>
            </header>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
