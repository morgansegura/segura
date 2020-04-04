import React from 'react'
import FormInput from '../FormInput';
import Card from '../Card';

import { TiSocialLinkedinCircular, TiSocialGithubCircular, TiSocialTwitterCircular } from 'react-icons/ti'

/* CSS in JS */
import * as S from './styled'

class ContactForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			phone: '',
			name: '',
			reason: '',
		};
	}

	andleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ name: '', email: '', phone: '', reason: '' });
		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<Card classes="text__on-light form-card-width">
				<S.FormCard>
					<S.FormCardHeader>
						<h5>Let's work together</h5>
						<p>Please leave a detailed message.</p>
					</S.FormCardHeader>
					<form name="contact" method="POST" data-netlify="true">

						<FormInput
							name='name'
							type='name'
							value={this.state.name}
							handleChange={this.handleChange}
							label='Name'
						/>
						<FormInput
							name='email'
							type='email'
							value={this.state.email}
							handleChange={this.handleChange}
							label='Email'
							required
						/>

						<p className="field-wrapper">
							<textarea
								name="message"
								type='textarea'
							></textarea>
							<label className="form-input-label">Leave a message</label>
						</p>
						<p>
							<S.FormButton type=" submit">Send Message</S.FormButton>
						</p>
					</form>
				</S.FormCard>
				<S.FormCardFooter>
					<div className="social-block">
						<a href="" title="Morgan Segura on LinkedIn">
							<TiSocialGithubCircular className="social-icon" />
						</a>
						<a href="" title="Morgan Segura on LinkedIn">
							<TiSocialTwitterCircular className="social-icon" />
						</a>
						<a href="" title="Morgan Segura on LinkedIn">
							<TiSocialLinkedinCircular className="social-icon" />
						</a>
					</div>
				</S.FormCardFooter>
			</Card>
		)
	}
}

export default ContactForm