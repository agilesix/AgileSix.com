import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/img/agilesix-logo.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 700,
        padding: `2rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          <img 
            src={logo} 
            alt={siteTitle} 
            className={'logo'}
            style={{
              height: 40,
            }}
          />
        </Link>
      </h1>
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
