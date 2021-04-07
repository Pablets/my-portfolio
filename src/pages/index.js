import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import TopButton from "../components/TopButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import pdf from "../pdf/pablo-godoy-resume.pdf"

const IndexPage = () => {
  const [top, setTop] = useState(false)

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setTop(true)
    } else {
      setTop(false)
    }
  }

  useEffect(() => window.addEventListener("scroll", handleScroll))

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  const topVariants = {
    visible: { x: 500 },
    hidden: { x: 0 },
  }

  return (
    <Layout>
      <SEO
        title="Pablo Godoy portfolio"
        description={`Full stack developer currently working with MERN stack.`}
        author={`Pablo Godoy`}
        url={"https://www.p-godoy.com/"}
        image={"https://www.p-godoy.com/images/p-godoy-img.jpg"}
      />
      <div id="top" className="bg-transparent sm:static text-gray-400 w-full ">
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
              <a className="hidden" href={pdf}>
                resume
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={top ? "hidden" : "visible"}
          transition={{ ease: "easeOut", duration: 1 }}
          variants={topVariants}
          className="fixed bottom-4 right-3"
        >
          {isDesktop ? (
            <AnchorLink to="/#top" title="Check out our team!">
              <TopButton />
            </AnchorLink>
          ) : (
            <div></div>
          )}
        </motion.div>

        <About />
        <Projects />
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
