import React from "react"
import { useMediaQuery } from "react-responsive"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"

const NavBar = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  // const data = useStaticQuery(graphql`
  //   {
  //     logo: file(relativePath: { eq: "logo-dark.png" }) {
  //       childImageSharp {
  //         fluid(maxHeight: 200, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  // const source = data.logo.childImageSharp.fluid

  return (
    <div className="right-0 fixed z-50 w-full">
      <div className="w-full m-0 p-0 bg-transparent ">
        <div className="max-w-7xl mx-auto px-4 sm:px-2">
          {/* Acá se cambia la altura de la navbar */}
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#anchor ">
                {isDesktop && (
                  <span className="font-black tracking-wide text-3xl text-gray-600">{`</p>`}</span>
                )}
                {/* <Img  className="h-14 w-14 sm:h-14 p-10 "  fluid={source} /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
