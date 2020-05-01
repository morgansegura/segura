import React, { Component } from 'react'

/* Components */
import Ship from './Ship'
import Asteroid from './Asteroid'
import { randomNumBetweenExcluding } from './helpers'
import { ColorButton } from '../../Button'
/* React Icons */
import { FaGithubAlt, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import * as S from './styled'

const KEY = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  A: 65,
  D: 68,
  W: 87,
  SPACE: 32,
}

export class Reacteroids extends Component {
  constructor() {
    super()
    this.state = {
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },

      context: null,
      keys: {
        left: 0,
        right: 0,
        up: 0,
        down: 0,
        space: 0,
      },
      asteroidCount: 5,
      currentScore: 0,
      topScore: localStorage['topscore'] || 0,
      inGame: false,
      playStart: true,
    }
    this.ship = []
    this.asteroids = []
    this.textArea = []
    this.bullets = []
    this.particles = []
  }

  handleResize(value, e) {
    this.setState({
      screen: {
        width: window.innerWidth,
        height: window.innerHeight,
        ratio: window.devicePixelRatio || 1,
      },
    })
  }

  handleKeys(value, e) {
    let keys = this.state.keys
    if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value
    if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value
    if (e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value
    if (e.keyCode === KEY.SPACE) keys.space = value
    this.setState({
      keys: keys,
    })
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeys.bind(this, false))
    window.addEventListener('keydown', this.handleKeys.bind(this, true))
    window.addEventListener('resize', this.handleResize.bind(this, false))

    const context = this.refs.canvas.getContext('2d')
    this.setState({ context: context })
    this.startGame()
    requestAnimationFrame(() => {
      this.update()
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeys)
    window.removeEventListener('keydown', this.handleKeys)
    window.removeEventListener('resize', this.handleResize)
  }

  update() {
    const context = this.state.context
    // const keys = this.state.keys;
    // const ship = this.ship[0];

    context.save()
    context.scale(this.state.screen.ratio, this.state.screen.ratio)

    // Motion trail
    context.fillStyle = '#161720'
    // context.fillStyle = '#000'
    context.globalAlpha = 1
    context.fillRect(0, 0, this.state.screen.width, this.state.screen.height)
    context.globalAlpha = 0.9

    // Next set of asteroids
    if (!this.asteroids.length) {
      let count = this.state.asteroidCount + 1
      this.setState({ asteroidCount: count })
      this.generateAsteroids(count)
    }

    // Check for colisions
    this.checkCollisionsWith(this.bullets, this.asteroids)
    this.checkCollisionsWith(this.ship, this.asteroids)

    // Remove or render
    if (!this.state.playStart) {
      this.updateObjects(this.particles, 'particles')
      this.updateObjects(this.asteroids, 'asteroids')
      this.updateObjects(this.bullets, 'bullets')
      this.updateObjects(this.ship, 'ship')
    }

    context.restore()

    // Next frame
    requestAnimationFrame(() => {
      this.update()
    })
  }

  addScore(points) {
    if (this.state.inGame) {
      this.setState({
        currentScore: this.state.currentScore + points,
      })
    }
  }

  playStart() {
    this.setState({
      playStart: false,
    })
    this.startGame.bind(this)
  }

  resetGame() {
    this.setState({
      currentScore: 0,
      topScore: 0,
    })
    localStorage['topscore'] = 0
    this.startGame.bind(this)
  }

  startGame() {
    this.setState({
      currentScore: 0,
      inGame: true,
    })
    // Make ship
    let ship = new Ship({
      position: {
        x: this.state.screen.width / 2,
        y: this.state.screen.height / 2,
      },
      create: this.createObject.bind(this),
      onDie: this.gameOver.bind(this),
    })

    this.createObject(ship, 'ship')
    // Make asteroids
    this.asteroids = []
    this.generateAsteroids(this.state.asteroidCount)
  }

  gameOver() {
    this.setState({
      inGame: false,
    })

    // Replace top score
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore,
      })
      localStorage['topscore'] = this.state.currentScore
    }
  }

  generateAsteroids(howMany) {
    // let asteroids = []

    let ship = this.ship[0]

    for (let i = 0; i < howMany; i++) {
      let asteroid = new Asteroid({
        size: 80,
        position: {
          x: randomNumBetweenExcluding(
            0,
            this.state.screen.width,
            ship.position.x - 60,
            ship.position.x + 60
          ),
          y: randomNumBetweenExcluding(
            0,
            this.state.screen.height,
            ship.position.y - 60,
            ship.position.y + 60
          ),
        },
        create: this.createObject.bind(this),
        addScore: this.addScore.bind(this),
      })

      this.createObject(asteroid, 'asteroids')
    }
  }

  createObject(item, group) {
    this[group].push(item)
  }

  updateObjects(items, group) {
    let index = 0
    for (let item of items) {
      if (item.delete) {
        this[group].splice(index, 1)
      } else {
        items[index].render(this.state)
      }
      index++
    }
  }

  checkCollisionsWith(items1, items2) {
    var a = items1.length - 1
    var b
    for (a; a > -1; --a) {
      b = items2.length - 1
      for (b; b > -1; --b) {
        var item1 = items1[a]
        var item2 = items2[b]
        if (this.checkCollision(item1, item2)) {
          item1.destroy()
          item2.destroy()
        }
      }
    }
  }

  checkCollision(obj1, obj2) {
    var vx = obj1.position.x - obj2.position.x
    var vy = obj1.position.y - obj2.position.y
    var length = Math.sqrt(vx * vx + vy * vy)
    if (length < obj1.radius + obj2.radius) {
      return true
    }
    return false
  }

  render() {
    let gametext
    let message
    let btnMessage
    let titleMessage

    if (this.state.playStart) {
      message = 'Top score, ' + this.state.topScore + ' points.'
      btnMessage = 'Play game'
      titleMessage = 'Want to play?'
    } else if (this.state.currentScore <= 0 && !this.state.playStart) {
      message = '0 points... So sad.'
      btnMessage = `Let's go!`
      titleMessage = 'Test your luck again?'
    } else if (this.state.currentScore >= this.state.topScore) {
      message = 'Top score with ' + this.state.currentScore + ' points. Woo!'
      btnMessage = 'try again?'
      titleMessage = `You're the best!`
    } else {
      btnMessage = 'Try again?'
      titleMessage = 'Game over, man!'
      message = this.state.currentScore + ' Points though :)'
    }

    if ((!this.state.inGame && !this.state.playStart) || this.state.playStart) {
      gametext = (
        <div className="endgame">
          <div className="title-section">
            <h1 className="section-headline">
              Morgan <span className="line-break">Segura.</span>
            </h1>
            <p className="section-subline">Full Stack UI/UX Engineer</p>
            <div className="score-wrapper">
              <p>{titleMessage}</p>
              <p>{message}</p>
              <ColorButton
                className="game-button"
                onClick={
                  this.state.playStart
                    ? this.playStart.bind(this)
                    : this.startGame.bind(this)
                }
              >
                {btnMessage}
              </ColorButton>
              {this.state.topScore > 0 && (
                <span className="reset" onClick={this.resetGame.bind(this)}>
                  Reset Top Score
                </span>
              )}
            </div>
            <span className="controls">
              Use{' '}
              <b>
                <span>A</span> <span>S</span> <span>W</span> <span>D</span>
              </b>{' '}
              or{' '}
              <b>
                <span>←</span> <span>↑</span> <span>↓</span> <span>→</span>
              </b>{' '}
              to MOVE
              <br />
              Use{' '}
              <b>
                <span>SPACE</span>
              </b>{' '}
              to SHOOT
            </span>
          </div>
        </div>
      )
    }

    return (
      <S.GameWrapper>
        {gametext}
        <p className="score current-score">
          Score: <span>{this.state.currentScore}</span>
        </p>
        <p className="score top-score">
          Top Score: <span>{this.state.topScore}</span>
        </p>

        <canvas
          ref="canvas"
          width={this.state.screen.width * this.state.screen.ratio}
          height={this.state.screen.height * this.state.screen.ratio}
        />
      </S.GameWrapper>
    )
  }
}
