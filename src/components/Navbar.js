import React from 'react'
import { Link } from 'gatsby'


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" title="home">
              <img src={`../../img/logo.png`} alt="logo" className="nav-logo" />
            </Link>
            <Link to="/" className="navbar-item" title="home">
              Matthew Rea
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end">
              <Link className="navbar-item" activeClassName="is-active" partiallyActive={true} to="/about/">
                About
              </Link>
              <Link className="navbar-item" activeClassName="is-active" partiallyActive={true} to="/work/">
                Work
              </Link>
              <Link className="navbar-item" activeClassName="is-active" partiallyActive={true} to="/blog/">
                Blog
              </Link>
              <Link className="navbar-item" activeClassName="is-active" to="/contact/">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
