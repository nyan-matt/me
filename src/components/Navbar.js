import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = (path) => {
  const [isActive, setIsActive] = useState(false);
  const isHome = ( path.path === '/' ? true : false )
  console.log(path.path)
  return (
    <nav
      className={ isHome ? 'navbar is-primary' : 'navbar' }
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="home">
              Matthew Rea
            </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            data-target="navMenu"
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div id="navMenu" className={`${isHome ? 'navbar-menu is-primary' : 'navbar-menu'} ${isActive && "is-active"}`}>
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
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
  );
};

export default Navbar;
