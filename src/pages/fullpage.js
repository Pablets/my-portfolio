import React from "react"
import About from "./about"
import Contact from "./contact"
import IndexPage from "./index"
import Projects from "./projects"

const fullpage = () => {
  return (
    <>
      <IndexPage />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default fullpage
