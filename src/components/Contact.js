import React, { Component } from 'react'
import swal from 'sweetalert' //https://github.com/t4t5/sweetalert

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      reason: '',
    }
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() =>
        swal(
          'Success!',
          'Thank you for your request. We will contact you shortly!',
          'success'
        )
      )

      .catch(error => swal('Oops!', error, 'error'))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { firstName, lastName, email, message, reason } = this.state
    return (
      <section id="contact-us" className="contact__form__container">
        <div className="container container--md">
          <form onSubmit={this.handleSubmit} className="contact__form">
            <div className="contact__form__head">
              <h3 className="contact__form__headline">
                We want to hear from you!
              </h3>
              <p className="contact__form__subheadline">
                Please leave as much detail as you can and we will contact you
                as soon as possible.
              </p>
            </div>
            <div className="row contact__form__inner">
              <div className="col-12 col-md-6">
                <p>
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  <label>Your Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p>
                  <label>Reason for contact:</label>
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
                </p>
              </div>
              <div className="col-12">
                <p>
                  <label>
                    Message: <i>Please leave a detailed message.</i>
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={this.handleChange}
                  />
                </p>
              </div>
            </div>
            <p className="d-flex justify-content-center mt-30">
              <button
                className="btn"
                type="submit"
                onClick={() => this.props.toggleModal(false)}
              >
                Send
              </button>
            </p>
          </form>
        </div>
      </section>
    )
  }
}
