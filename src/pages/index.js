import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <>
      {/* border-red-700 border-wider border-solid border-2  */}
      <div className="bg-transparent flex-col h-screen flex justify-center items-center">
        <div className="w-80 md:w-auto	">
          <h3 className="font-sans text-4xl md:text-5xl subpixel-antialiased">
            Hi I'm
          </h3>
          <h1 className="font-title font-semibold text-7xl md:text-8xl -ml-2 subpixel-antialiased">
            Pablo Godoy
          </h1>
          <h5 className="subpixel-antialiased text-2xl md:text-3xl tracking-wider">
            Fullstack web developer
          </h5>
        </div>
      </div>
    </>
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
