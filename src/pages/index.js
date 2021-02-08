import React from "react"
import { useMediaQuery } from "react-responsive"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

const IndexPage = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  return (
    <Layout>
      <SEO title="Home" />
      <div className="bg-gray-100 text-gray-400">
        {/* border-red-700 border-wider border-solid border-2  */}
        <div className="bg-transparent flex-col h-screen flex justify-center items-center">
          <div className="w-80 md:w-auto	">
            <h3 className="font-sans text-gray-400 text-4xl md:text-5xl subpixel-antialiased">
              Hi I'm
            </h3>
            <h1 className="font-title text-gray-500 font-bold text-7xl md:text-8xl -ml-2 subpixel-antialiased">
              Pablo Godoy
            </h1>
            <h5 className="subpixel-antialiased text-gray-400 text-2xl md:text-3xl tracking-wider">
              Fullstack web developer
            </h5>
          </div>
        </div>
        <About />
        <Projects />
        {isDesktop && <Contact />}
      </div>
    </Layout>
  )
}

export default IndexPage
