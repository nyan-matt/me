import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  currentYear() {
    return new Date().getFullYear()
  }
  render() {
    return (
      <footer className="footer">
        <div className="container is-fluid has-background-light">
          <div className="columns">
            <div className="column is-12 has-text-centered">
              <h4 className="title">Still Reading?</h4>
              <p className="subtitle is-6">Read more about my background, what I’m listening to, reading, watching, or contact me!</p>
              <div className="buttons is-centered">
                <Link className="button is-rounded is-primary is-uppercase" to="/contact/">Contact</Link>
                <Link className="button is-rounded is-uppercase" to="/about/">About</Link>
              </div>
            </div>
          </div>  
        </div>

        <div className="container is-fluid has-background-primary has-text-white-ter footer-bg">
          <div className="columns is-multiline">
            <div className="column is-5">

            </div>
            <div className="column is-7">
              <div className="columns">
                <div className="column is-6">
                  <section>
                  <p className="is-uppercase is-family-secondary has-text-weight-bold">MATTHEW REA</p>
                  <p>Interested in assisting companies and startups with roadmap and concept visualization through research, design, and prototyping.</p>
                  <p className="has-margin-top-16">&copy; { this.currentYear()} All rights reserved</p>
                  </section>
              </div>
              <div className="column is-6">
                <section>
                <p className="is-uppercase is-family-secondary has-text-weight-bold">LINKS</p>
                    <ul className="footer-links">
                      <li><Link className="" to="/about/">About</Link></li>
                      <li><Link className="" to="/work/">Work</Link></li>
                      <li><Link className="" to="/blog/">Blog</Link></li>
                      <li><Link className="" to="/contact/">Contact</Link></li>
                    </ul>
                  <p className="is-uppercase is-family-secondary has-text-weight-bold">CONNECT</p>
                  <ul className="footer-links">
                    <li>
                      <a href="https://www.linkedin.com/in/mattrea">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/nyan-matt">
                        Github
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              </div>  
            </div>
            
          </div>
        </div>
        
      </footer>
    )
  }
}

export default Footer
