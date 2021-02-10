import React from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useMediaQuery } from "react-responsive"

const About = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })

  const variant = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -500, opacity: 0 },
  }

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  })

  // if(!isDesktop){
  //   inView = true;
  // }

  return (
    <div>
      {isDesktop ? (
        <div ref={ref}>
          <AnimateSharedLayout>
            <div className="sm:static md:relative h-screen mx-3.5 md:mx-0 md:w-auto md:grid md:grid-cols-12 md:grid-rows-6 md:gap-6">
              <motion.div
                animate={inView ? "visible" : "hidden"}
                transition={{ ease: "easeOut", duration: 1 }}
                variants={variant}
                className="row-auto row-start-2 col-start-4"
              >
                <h2 className="min-w-max font-title text-gray-500 text-left font-semibold md:text-5xl subpixel-antialiased">
                  About me
                </h2>
              </motion.div>
              <motion.div
                animate={inView ? "visible" : "hidden"}
                transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
                variants={variant}
                className="mx-5 md:mx-0 row-start-3 row-auto col-start-4 col-span-4 w-auto md:w-11/12"
              >
                <p className="min-w-min text-gray-500 text-lg justify-self-start">
                  I'm a web developer with experiencie in MERN stack & UI/UX.
                  I'm from Buenos Aires, doing QA in Productive Development
                  Ministery of Buenos Aires Goverment. I'm passionate about what
                  I do and what I can achieve.
                </p>
                <p className="min-w-min text-gray-500 text-lg justify-self-start">
                  I belive that my most important skill its the continous desire
                  of keep learning all the time.
                </p>
                <p className="min-w-min text-gray-500 text-lg justify-self-start">
                  Hope to work with you.
                </p>
              </motion.div>
            </div>
          </AnimateSharedLayout>
        </div>
      ) : (
        <div>
          <div className="sm:static md:relative h-screen mx-3.5 md:mx-0 md:w-auto md:grid md:grid-cols-12 md:grid-rows-6 md:gap-6">
            <div className="mx-5 md:row-auto md:row-start-2 md:col-start-4 ">
              <h2 className="min-w-max font-title text-gray-500 text-left font-semibold text-4xl md:text-5xl ml-0 mb-6 md:mb-0 w-auto subpixel-antialiased">
                About me
              </h2>
            </div>
            <div className="mx-5 md:mx-0 md:row-start-3 md:row-auto md:col-start-4 md:col-span-4 w-auto md:w-11/12">
              <p className="min-w-min text-gray-500 text-lg justify-self-start">
                I'm a web developer with experiencie in MERN stack & UI/UX. I'm
                from Buenos Aires, doing QA in Productive Development Ministery
                of Buenos Aires Goverment. I'm passionate about what I do and
                what I can achieve.
              </p>
              <p className="min-w-min text-gray-500 text-lg justify-self-start">
                I belive that my most important skill its the continous desire
                of keep learning all the time.
              </p>
              <p className="min-w-min text-gray-500 text-lg justify-self-start">
                Hope to work with you.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
