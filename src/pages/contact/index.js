import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import githublogo from '../../img/github-icon.svg'
import linkedinlogo from '../../img/linkedin-logo.svg'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    // const { title } = useSiteMetadata()
    return (
      <Layout>
        <section className="section">
        <div className="container">
          
          <div className="container content">
          <div className="columns">
            <div className="column is-12">
              <div
                className="banner-image"
                style={{
                  backgroundImage:'url(/img/contact-hero.png)'
                }}
              ></div>
            </div>
          </div>
        </div>
          <div className="columns is-mobile is-multiline work">
            <div className="column is-12">
              <h1 className="title is-size-3">Contact</h1>
            </div>
            <div className="column is-8">
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'name'}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'email'}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={'message'}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-rounded is-primary" type="submit">
                    Send
                  </button>
                </div>
              </form>
              </div>
              <div className="column is-4">
                <p className="is-uppercase is-family-secondary has-text-weight-bold">CONNECT</p>
                  <ul className="contact-links">
                    <li className="is-block">
                      <img className="image is-24x24 is-inline" src={githublogo} alt="github logo" />
                      <a className="is-inline" href="/">Follow on Github</a>
                    </li>
                    <li className="is-block">
                      <img className="image is-24x24 is-inline" src={linkedinlogo} alt="github logo" />
                      <a className="is-inline" href="/">Connect on LinkedIn</a>
                    </li>
                  </ul>
                
              </div>
          </div>
        </div>
        </section>
      </Layout>
    )
  }
}
