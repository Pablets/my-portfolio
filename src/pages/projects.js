import React from "react"
import Works from "../components/works"
import { useMediaQuery } from "react-responsive"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const Projects = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  })

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  return (
    <div ref={ref}>
      {isDesktop ? (
        <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeOut", duration: 1 }}
          className="mx-3.5"
        >
          <div className="md:grid md:grid-cols-12 mx-5 h-auto">
            <div className="md:text-right col-start-4 col-span-4 md:mb-20">
              <h2 className="min-w-max font-title text-gray-500 text-left font-semibold text-4xl md:text-5xl ml-0 mb-6 md:mb-0 w-auto subpixel-antialiased">
                My work
              </h2>
            </div>
          </div>
          <div>
            <div className="md:grid grid-cols-12 mx-3.5 md:w-auto h-auto">
              <div className="md:text-right col-start-4 col-span-8">
                <Works />
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="mx-3.5">
          <div className="md:grid md:grid-cols-12 mx-5 h-auto">
            <div className="md:text-right col-start-4 col-span-4 md:mb-20">
              <h2 className="min-w-max font-title text-gray-500 text-left font-semibold text-4xl md:text-5xl ml-0 mb-6 md:mb-0 w-auto subpixel-antialiased">
                My work
              </h2>
            </div>
          </div>
          <div>
            <div className="md:grid grid-cols-12 mx-3.5 md:w-auto h-auto">
              <div className="md:text-right col-start-4 col-span-8">
                <Works />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Projects
