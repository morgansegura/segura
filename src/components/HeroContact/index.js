import React from 'react'
import Hero from '../Hero'
import Button from '../Button'
import ContactForm from '../ContactForm'
import Particles from 'react-particles-js'

/* UX Component */
import ScrollAnimation from 'react-animate-on-scroll';

/* Imaeges */
import * as heroImage from '../../images/hero-image.jpeg'
/* CSS in JS */
import * as S from '../ListWrapper/styled'


class HeroHome extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: true,
			btnText: ''
		}
		this.toggleState = this.toggleState.bind(this);
	}

	toggleState() {
		this.setState(state => ({ active: !state.active }))
	}

	render() {

		return (
			<Hero classes="bg-secondary">
				{/* 
				<Particles
					style={{ position: 'absolute', zIndex: 1 }}
					params={{
						"particles": {
							"number": {
								"value": 100
							},
							"size": {
								"value": 3,
								"random": true,
								"anim": {
									"speed": 4,
									"size_min": 0.3
								}
							},
							"opacity": {
								"value": .2
							},
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "repulse"
								}
							}
						}
					}}
				/>
			*/}
				<S.Container>
					<S.ContentWrapper>
						<div className="hero--inner text__on-dark">
							<div className={`hero-left ${this.state.active ? 'full-width flex-100' : 'flex-50'}`}>
								<div className="hero-text-block">
									{/*<h1 className="headline">{this.props.headline}</h1>*/}
									<h1 className="headline">Hello, I'm <span className="offset-color">Morgan Segura.</span> <span className="line-break">full-stack web developer.</span></h1>
									<p className="subline">I design & build successful mobile and web apps for small businesses and <span>people just like you!</span></p>
								</div>

								<Button
									to='/'
									className="button secondary round--30"
									onClick={this.toggleState}
								>
									{this.state.active ? 'Get in touch' : 'Hide contact form'}
								</Button>

							</div>
							<ScrollAnimation animateIn="fadeIn">
								<div className={`hero-right ${this.state.active ? 'hidden' : 'flex-50'}`}>
									<ContactForm />
								</div>
							</ScrollAnimation>
						</div>
					</S.ContentWrapper>
				</S.Container>
				{/*<div className="hero-background-style" style={{ backgroundImage: `url(${heroImage})` }} />*/}
			</Hero>
		)
	}
}

export default HeroHome