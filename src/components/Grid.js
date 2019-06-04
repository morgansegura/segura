import React, { Component } from 'react'

export default class Grid extends Component {
  render() {
    return (
      <div id="grid" className="main c-grid container d-flex flex-column">
        <div className="row grow grow-md-7">
          <div className="item1 col-12 col-md-4">Item 1</div>

          <div className="item2 col-12 col-md-4">Item 2</div>

          <div className="item3 col-12 col-md-4 d-flex">
            <div className="row grow">
              <div className="item3a col-12">3A</div>
              <div className="item3b col-xs-12 col-lg-6">3B</div>
              <div className="item3c col-xs-12 col-lg-6">3C</div>
            </div>
          </div>
        </div>
        <div className="row grow grow-md-3">
          <div className="item6 col-md-4">Item 6</div>
          <div className="item7 col-md-6">Item 7</div>
          <div className="item8 col-md-2">Typography</div>
        </div>
      </div>
    )
  }
}
