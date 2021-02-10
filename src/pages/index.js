import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
// import { useMediaQuery } from "react-responsive"
// import Particles from "react-particles-js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"

const IndexPage = () => {
  const [background, setBackground] = useState(0)

  const changeBackground = () => {
    if (window.scrollY > 150) {
      const n = Number(((window.scrollY - 150) / 500).toFixed(1))
      setBackground(n)
    }
  }
  useEffect(() => window.addEventListener("scroll", changeBackground))

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="bg-transparent sm:static text-gray-400 w-full ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 2 }}
          className="h-screen flex items-center md:relative md:grid md:grid-cols-12 md:grid-rows-6"
        >
          <div className="w-full md:w-auto flex justify-center md:justify-self-start md:static md:row-start-3 md:col-start-4 md:col-span-8 bg-transparent">
            <div className="w-10/12">
              <h3 className="font-sans text-gray-400 text-4xl md:text-5xl subpixel-antialiased max-w-max w-auto md:w-full">
                Hi I'm
              </h3>
              <h1 className="font-title text-gray-500 font-bold text-7xl md:text-8xl -ml-2 subpixel-antialiased w-8/12 md:w-max">
                Pablo Godoy
              </h1>
              <h5 className="subpixel-antialiased text-gray-400 text-2xl md:text-3xl tracking-wider max-w-max">
                Fullstack web developer
              </h5>
            </div>
          </div>
        </motion.div>
        <About background={background} />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
