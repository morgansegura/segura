import React, { Component, useState } from 'react'
import * as S from './styled'
import { Waypoint } from 'react-waypoint'

class Sticky extends Component {
    state = {
        sticky: true,
    }
    isSticky = () => {
        this.setState({ sticky: !this.state.sticky })
    }

    render() {
        return (
            <>
                <Waypoint>
                    <S.StickyContainer sticky={this.state.sticky}>
                        {this.props.children}
                    </S.StickyContainer>
                </Waypoint>
                <Waypoint
                    scrollableAncestor={window}
                    topOffset="-100px"
                    onEnter={this.isSticky}
                    onLeave={this.isSticky}
                ></Waypoint>
            </>
        )
    }
}

export default Sticky
