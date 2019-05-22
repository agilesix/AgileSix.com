import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/img/agilesix-logo.png"

const Header = ({ siteTitle }) => (
  <header>
    <div className={'wrapper'}>
      <div className={'logo-container'}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            <img 
              src={logo} 
              alt={siteTitle} 
              className={'logo'}
            />
          </Link>
        </h1>
      </div>
      <div className={'nav-container'}>
        <a href="https://agilesix.workable.com">We're hiring!</a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
