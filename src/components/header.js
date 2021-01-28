import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.component.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="navcontainer">
      <h6>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h6>
      <h6>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
      </h6>
      <h6>
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Projects
        </Link>
      </h6>
      <h6>
        <Link
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
      </h6>
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
