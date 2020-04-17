import React, { Component } from 'react'
import * as S from './styled'
import Headroom from 'react-headroom'

class Sticky extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sticky: false,
        }

        this.isSticky.bind(this.isSticky)
    }
    isSticky = () => {
        this.setState({ sticky: !this.state.sticky })
    }

    render() {
        return (
            <Headroom
                onPin={() => {
                    this.isSticky()
                    console.log('pinned')
                    console.log(this.state.sticky)
                }}
                onUnpin={() => {
                    this.isSticky()
                    console.log('unpinned')
                    console.log(this.state.sticky)
                }}
            >
                <S.StickyContainer sticky={this.state.sticky}>
                    {this.props.children}
                </S.StickyContainer>
            </Headroom>
        )
    }
}

export default Sticky
