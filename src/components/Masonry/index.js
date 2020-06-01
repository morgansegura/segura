import React from 'react'

class Masonry extends React.Component {
  getHeight() {
    const items = document.querySelectorAll('.masonry-item')
    let itemHeight = items.clientHeight

    for (let i = 0; i <= items.length; i++) {
      console.log(items[i].clientHeight)
    }
  }
  componentDidMount() {
    this.getHeight()
  }

  render() {
    this.getHeight()
    return <div className="masonry-item">{this.props.children}</div>
  }
}

export default Masonry
