import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

/* CSS in JS */
import * as S from './styled'

class Reveal extends Component {
    state = {
        revealed: false,
    }
    reveal = () => {
        this.setState({ revealed: true })
    }
    render() {
        return (
            <Waypoint onEnter={this.reveal}>
                <S.Revealable show={this.state.revealed}>
                    {this.props.children}
                </S.Revealable>
            </Waypoint>
        )
    }
}
