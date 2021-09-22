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
              <svg width="124" height="50" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M87.603 27.778c-2.265-.146-3.308-.8-3.308-1.963 0-1.128 1.154-1.783 3.239-1.783 1.689 0 3.127.397 4.385 1.602l2.447-2.91c-2.05-1.818-4.135-2.367-6.909-2.367-3.238 0-7.478 1.454-7.478 5.604 0 4.072 3.99 5.312 7.34 5.562 2.515.146 3.523.655 3.523 1.894 0 1.309-1.55 2.186-3.204 2.144-1.98-.035-4.858-1.093-6.116-2.513l-2.161 3.167c2.592 2.73 5.393 3.203 8.2 3.203 5.074 0 7.625-2.729 7.625-5.89.007-4.769-4.24-5.534-7.583-5.75zM98 38.798h4.386v-18.01H98v18.01zm-.396-22.988c0 3.453 5.178 3.453 5.178 0 0-3.46-5.178-3.46-5.178 0zm20.211 13.896l5.824-8.695v-.146h-5.255l-3.488 6.077-3.489-6.077h-5.254v.146l5.824 8.695-6.186 8.988v.111h5.254l3.851-6 3.85 6H124v-.111l-6.185-8.988z"
                    fill="#00B7EF"
                  />
                  <path
                    d="M14.894 23.336c-1.008-1.782-3.274-2.91-5.65-2.91C4.065 20.391 0 23.63 0 29.811c0 6.293 3.885 9.565 9.14 9.53 1.98-.034 4.746-1.058 5.754-3.167l.215 2.617h4.135V20.865h-4.211l-.14 2.471zM9.639 35.27c-2.911 0-5.254-2.04-5.254-5.458 0-3.419 2.336-5.424 5.255-5.424 6.908.007 6.908 10.882 0 10.882zm27.23-16.221l-1.765 2.255c-1.223-.835-2.662-1.016-4.066-1.016-4.962 0-8.993 3.495-8.993 9.092 0 5.604 3.454 9.023 8.993 9.023 2.196 0 4.497 1.127 4.497 3.599 0 2.471-1.98 3.857-4.497 3.857-2.516 0-4.642-1.525-4.642-3.857h-4.35c0 4.838 3.85 8.006 8.992 8.006 5.143 0 8.882-3.056 8.882-8.006 0-2.29-.723-4.435-3.67-5.932 2.913-1.343 3.74-4.476 3.74-6.69 0-1.963-.5-3.745-1.87-5.312l1.98-2.548-3.23-2.471zm-5.824 15.309c-2.55 0-4.642-1.852-4.642-4.985s2.085-5.054 4.642-5.054c2.516 0 4.601 1.963 4.601 5.054s-2.085 4.985-4.6 4.985zM42.408 15.81c0 3.453 5.178 3.453 5.178 0 0-3.46-5.178-3.46-5.178 0zm.396 22.988h4.386v-18.01h-4.386v18.01zm8.347 0h4.35V13.374h-4.35v25.424zm16.833-18.476c-5.755 0-9.424 3.926-9.424 9.384 0 5.75 3.635 9.566 9.75 9.566 2.697 0 5.755-.947 7.624-2.91l-2.807-2.799c-1.008 1.058-3.128 1.67-4.747 1.67-3.093 0-4.997-1.6-5.289-3.821h13.851c.681-7.38-3.023-11.09-8.958-11.09zm-4.823 7.421c.646-2.325 2.592-3.495 4.962-3.495 2.516 0 4.316 1.163 4.6 3.495h-9.562z"
                    fill="#555"
                  />
                  <path
                    d="M45.007 13.186c-1.452 0-2.627 1.19-2.627 2.652 0 1.462 1.175 2.653 2.627 2.653 1.453 0 2.628-1.19 2.628-2.653 0-1.462-1.175-2.652-2.628-2.652z"
                    fill="#555"
                  />
                  <path
                    d="M54.835 4.282c-1.453 0-2.627 1.19-2.627 2.652 0 1.462 1.174 2.652 2.627 2.652 1.452 0 2.627-1.19 2.627-2.652 0-1.462-1.182-2.652-2.627-2.652z"
                    fill="#687278"
                  />
                  <path
                    d="M66.6.174c-1.452 0-2.626 1.19-2.626 2.653 0 1.461 1.174 2.652 2.627 2.652 1.452 0 2.627-1.19 2.627-2.652 0-1.462-1.175-2.653-2.627-2.653z"
                    fill="#677F8C"
                  />
                  <path
                    d="M78.478 0c-1.452 0-2.627 1.19-2.627 2.652a2.636 2.636 0 0 0 2.627 2.653c1.453 0 2.627-1.19 2.627-2.653C81.098 1.19 79.924 0 78.478 0z"
                    fill="#658EA3"
                  />
                  <path
                    d="M90.335 4.282c-1.453 0-2.627 1.19-2.627 2.652 0 1.462 1.174 2.652 2.627 2.652 1.452 0 2.627-1.19 2.627-2.652 0-1.462-1.182-2.652-2.627-2.652z"
                    fill="#5F9EBD"
                  />
                  <path
                    d="M100.28 13.186c-1.453 0-2.627 1.19-2.627 2.652 0 1.462 1.174 2.653 2.627 2.653 1.452 0 2.627-1.19 2.627-2.653 0-1.462-1.175-2.652-2.627-2.652z"
                    fill="#00AEEF"
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
