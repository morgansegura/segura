import React from 'react'
import FormInput from '../FormInput'
import Button from '../Button'

import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'

/* CSS in JS */
import * as S from './styled'

class ContactForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            phone: '',
            name: '',
            reason: '',
        }
    }

    andleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ name: '', email: '', phone: '', reason: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target

        this.setState({ [name]: value })
    }

    render() {
        return (
            <S.FormWrapper>
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    autocomplete="off"
                >
                    <FormInput
                        name="name"
                        type="name"
                        value={this.state.name}
                        handleChange={this.handleChange}
                        label={`What's your name?`}
                        autocomplete="off"
                    />
                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Your contact email."
                        autocomplete="off"
                        // required
                    />

                    <p className="field-wrapper">
                        <textarea name="message" type="textarea"></textarea>
                        <label className="form-input-label">
                            What's on your mind?
                        </label>
                    </p>
                    <p>
                        <Button
                            className="button medium primary round--4"
                            type=" submit"
                        >
                            Send Message
                        </Button>
                    </p>
                </form>
            </S.FormWrapper>
        )
    }
}

export default ContactForm
