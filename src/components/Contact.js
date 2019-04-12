import React, { Component } from 'react'
import swal from 'sweetalert' //https://sweetalert.js.org/guides/
import { toggleFlip } from '../helpers/helpers'
import SimpleReactValidator from 'simple-react-validator'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.validator = new SimpleReactValidator()
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        if (this.validator.allValid()) {
          swal(
            'Success!',
            'Thank you for your request. We will contact you shortly!',
            'success'
          ).then(() => {
            this.setState({
              name: '',
              email: '',
              message: '',
            })
            toggleFlip()
          })
        } else {
          this.validator.showMessages()
          // rerender to show messages for the first time
          this.forceUpdate()
        }
      })
      .catch(error => swal('Oops!', error, 'error'))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <section id="contact-us" className="contact__form__container">
        {/*<div className="contact__form__head">
          <div className="container">
            <h3 className="contact__form__headline">
              We want to hear from you!
            </h3>
            <p className="contact__form__subheadline">
              Please leave as much detail as you can and we will contact you as
              soon as possible.
            </p>
          </div>
        </div>*/}
        <div className="">
          <form
            netlify-honeypot="bot-field"
            className="contact__form"
            noValidate
          >
            <div className="row contact__form__inner">
              <div className="form-control col-12">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  'name',
                  name,
                  'required|alpha_num_dash_space'
                )}
              </div>
              <div className="form-control col-12">
                <label>Your Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
                {this.validator.message('email', email, 'required|email')}
              </div>
              {/* 
              <div className="form-control col-12 col-md-6">
                <label>Reason for contact</label>
                <select
                  name="reason"
                  value={reason}
                  onChange={this.handleChange}
                >
                  <option value="placeholder" />
                  <option value="general-question">General Question</option>
                  <option value="full-menu">Request full menu</option>
                  <option value="location-info">Location information</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
               */}
              <div className="form-control col-12">
                <label>Message</label>
                <textarea
                  required
                  name="message"
                  value={message}
                  onChange={this.handleChange}
                />
                {this.validator.message(
                  'message',
                  message,
                  'required|min:20|max:120'
                )}
              </div>
              <div className="col-12">
                <div className="d-flex justify-content-center mt-15">
                  <button
                    className="m-auto btn btn--sm btn__round btn--cta"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Fire Away!
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
