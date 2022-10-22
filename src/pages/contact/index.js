import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import githublogo from '../../img/github-icon.svg'
import linkedinlogo from '../../img/linkedin-logo.svg'
import twitterlogo from '../../img/twitter-icon.svg'
import figmalogo from '../../img/figma-icon.svg'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout path="/contact/">
         <section className="section">
        <div className="container">
          <div className="container content">
          <div className="columns">
            <div className="column is-12">
              <div className="banner-image"
                    style={{
                      backgroundImage: 'url(/img/shapes-bg-4.png)',
                      backgroundColor: '#333E48'
                    }}
                  >
                    <div className="banner-image-text has-border-radius">
                      <h1 className="landing-title has-text-white" data-sal="fade" data-sal-duration="500">Contact</h1>
                      <h2 className="landing-subtitle has-text-white" data-sal="fade" data-sal-duration="500" data-sal-delay="500">Send me a message</h2>
                    </div>
                  </div>
            </div>
          </div>
        </div>
          <div className="columns is-mobile is-multiline work">
            
            <div className="column is-8-desktop is-12-tablet is-12-mobile">
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
              <div className="column is-4-desktop is-12-tablet is-12-mobile">
                <p className="is-uppercase is-family-secondary has-text-weight-bold">CONNECT</p>
                  <ul className="contact-links">
                    <li className="is-block">
                      <img className="image is-24x24 is-inline" src={figmalogo} alt="figma logo" />
                      <a className="is-inline" href="https://www.figma.com/@mattrea">Follow on Figma</a>
                    </li>
                    <li className="is-block">
                      <img className="image is-24x24 is-inline" src={githublogo} alt="github logo" />
                      <a className="is-inline" href="https://github.com/nyan-matt">Follow on Github</a>
                    </li>
                    <li className="is-block">
                      <img className="image is-24x24 is-inline" src={linkedinlogo} alt="github logo" />
                      <a className="is-inline" href="https://www.linkedin.com/in/mattrea/">Connect on LinkedIn</a>
                    </li>
                    <li className="is-block">
                      <img className="image is-24x24 is-inline" src={twitterlogo} alt="twitter logo" />
                      <a className="is-inline" href="https://twitter.com/mattrea">Follow on Twitter</a>
                    </li>
                  </ul>
                
              </div>
          </div>
        </div>
        </section>
      </Layout>
    );
  }
}
