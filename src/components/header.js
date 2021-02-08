// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from "./NavBar"

const Header = () => (
  <header>
    <NavBar/>
    {/* <div className="h-6">
      <h6 className="mx-2">
        <Link to="/">{siteTitle}</Link>
      </h6>
      <h6 className="mx-2">
        <Link to="/about">About</Link>
      </h6>
      <h6 className="mx-2">
        <Link to="/projects">Projects</Link>
      </h6>
      <h6 className="mx-2">
        <Link to="/contact">Contact</Link>
      </h6>
      <h6 className="mx-2">
        <Link to="/tail">tailwind</Link>
      </h6> 
      <h6 className="mx-2">
        <Link to="/observer">Observer</Link>
      </h6>
      <h6 className="mx-2">
        <Link to="/page-3">Page-3</Link>
      </h6> 
    </div>*/}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
