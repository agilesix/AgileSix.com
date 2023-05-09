import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

class Header extends React.Component {
  state = {
    navVisible: false,
  }

  setNavState() {
    this.setState({ navVisible: !this.state.navVisible })
  }

  render() {
    let navClass = this.state.navVisible ? "" : "hidden"

    return (
      <header className="p-6 bg-white dark:bg-blue-dark">
        <div
          className={
            "max-w-5xl mx-auto flex items-center justify-between flex-wrap"
          }
        >
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 165.35 49.35"
                fill="#003262"
                fillRule="evenodd"
                width="124"
                height="50"
                role="img"
                aria-labelledby="a6-logo-home"
              >
                <title id="a6-logo-home">agile six home</title>
                <g id="Rectangle_1_copy_2" data-name="Rectangle 1 copy 2">
                  <path
                    class="cls-1"
                    d="M117,19.53c-3.07-.2-4.48-1.07-4.48-2.64s1.56-2.39,4.39-2.39c2.29,0,4.24,.54,5.95,2.15l3.31-3.9c-2.78-2.44-5.61-3.17-9.36-3.17-4.39,0-10.14,1.95-10.14,7.52s5.41,7.12,9.94,7.47c3.41,.2,4.78,.88,4.78,2.54,0,1.76-2.1,2.93-4.34,2.88-2.68-.05-6.58-1.46-8.29-3.37l-2.92,4.25c3.51,3.66,7.31,4.29,11.11,4.29,6.87,0,10.33-3.66,10.33-7.91,0-6.39-5.75-7.42-10.29-7.71Zm14.14,14.79h5.95V10.16h-5.95v24.16Zm-.54-30.84c0,4.64,7.02,4.64,7.02,0s-7.02-4.64-7.02,0Zm26.36,18.64l7.9-11.66v-.2h-7.12l-4.73,8.15-4.73-8.15h-7.12v.2l7.9,11.66-8.38,12.05v.15h7.12l5.22-8.05,5.22,8.05h7.12v-.15l-8.38-12.05Z"
                  />
                </g>
                <g id="Rectangle_1_copy_2-2" data-name="Rectangle 1 copy 2">
                  <path
                    class="cls-1"
                    d="M20.18,13.58c-1.36-2.39-4.44-3.9-7.65-3.9C5.51,9.63,0,13.97,0,22.27s5.26,12.83,12.38,12.79c2.68-.05,6.43-1.42,7.8-4.25l.29,3.51h5.61V10.26h-5.7l-.19,3.32Zm-7.12,16.01c-3.95,0-7.12-2.73-7.12-7.32s3.17-7.27,7.12-7.27c9.36,0,9.36,14.59,0,14.59ZM49.25,7.82l-2.39,3.03c-1.66-1.12-3.61-1.37-5.51-1.37-6.73,0-12.19,4.68-12.19,12.2s4.68,12.1,12.19,12.1c2.97,0,6.09,1.51,6.09,4.83s-2.68,5.17-6.09,5.17-6.29-2.05-6.29-5.17h-5.9c0,6.49,5.22,10.74,12.19,10.74s12.04-4.1,12.04-10.74c0-3.07-.97-5.95-4.97-7.95,3.95-1.81,5.07-6,5.07-8.98,0-2.64-.68-5.03-2.53-7.12l2.68-3.42-4.39-3.32Zm-7.9,20.54c-3.46,0-6.29-2.49-6.29-6.69s2.83-6.78,6.29-6.78,6.24,2.64,6.24,6.78-2.83,6.69-6.24,6.69Zm15.94,5.95h5.95V10.16h-5.95v24.16Zm-.54-30.84c0,4.64,7.02,4.64,7.02,0s-7.02-4.64-7.02,0Zm11.85,30.84h5.9V.21h-5.9V34.32Zm22.58-24.79c-7.8,0-12.77,5.27-12.77,12.59,0,7.71,4.92,12.83,13.21,12.83,3.66,0,7.8-1.27,10.33-3.9l-3.8-3.76c-1.36,1.42-4.24,2.24-6.43,2.24-4.19,0-6.78-2.15-7.17-5.12h18.77c.93-9.91-4.09-14.88-12.14-14.88Zm-6.53,9.96c.88-3.12,3.51-4.69,6.73-4.69,3.41,0,5.85,1.56,6.24,4.69h-12.97Z"
                  />
                </g>
              </svg>
            </a>
          </div>
          <div className="block md:hidden">
            <button
              onClick={this.setNavState.bind(this)}
              className="flex items-center px-4 py-3 border text-blue-dark hover:text-white hover:bg-blue-dark"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <nav
            className={`${navClass} w-full block md:flex md:items-center md:w-auto`}
          >
            <div className="md:flex-grow md:mr-20">
              <Link
                to="/capabilities"
                className="block mt-4 md:inline-block md:mt-0 text-blue-dark border-transparent border-b-2 hover:border-blue-light"
              >
                Capabilities
              </Link>
              <Link
                to="/work"
                className="block mt-4 md:inline-block md:mt-0 text-blue-dark md:ml-5 border-transparent border-b-2 hover:border-blue-light"
              >
                Work
              </Link>
              <Link
                to="/about"
                className="block mt-4 md:inline-block md:mt-0 text-blue-dark md:ml-5 border-transparent border-b-2 hover:border-blue-light"
              >
                About
              </Link>
              <Link
                to="/team"
                className="block mt-4 md:inline-block md:mt-0 text-blue-dark md:ml-5 border-transparent border-b-2 hover:border-blue-light"
              >
                Team
              </Link>
              <Link
                to="/careers"
                className="block mt-4 md:inline-block md:mt-0 text-blue-dark md:ml-5 border-transparent border-b-2 hover:border-blue-light"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className="block mt-4 md:inline-block md:mt-0 text-blue-dark md:ml-5 border-transparent border-b-2 hover:border-blue-light"
              >
                Blog
              </Link>
            </div>
            <div>
              <a
                href="/contact"
                className="block md:inline-block px-4 py-3 leading-none border text-blue-dark text-center border-blue-dark hover:border-transparent hover:text-white hover:bg-blue-dark mt-4 md:mt-0"
              >
                Contact Us
              </a>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
