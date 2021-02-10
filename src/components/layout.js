/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
//
import React from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"
// import { useStaticQuery, graphql } from "gatsby"
// import { useMediaQuery } from "react-responsive"

import Header from "./header"

const Layout = ({ children, inView }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Header />
      <main className="bg-transparent text-white">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
