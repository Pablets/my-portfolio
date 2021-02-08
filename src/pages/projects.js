// import React, { useEffect, useRef } from "react"
import React from "react"
import Particles from "react-particles-js"
// import { animated as a, useSpring } from "react-spring"
import Works from "../components/works"

// const calc1 = o => `translateY(${o * -0.1}px)`
// const calc2 = o => `translateY(${o * -0.15}px)`
// const calc3 = o => `translateY(${o * 0}px)`

const Projects = () => {
  // const ref = useRef()
  // const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  // const handleScroll = () => {
  //   const posY = ref.current.getBoundingClientRect().top
  //   const offset = window.pageYOffset - posY
  //   set({ offset })
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // })

  return (
    // <div ref={ref} className="border-red-500 border-2 m-auto">
    <div className="relative mx-3.5 md:w-auto md:grid md:grid-cols-12 md:gap-6">
      <Particles
        className="bg-transparent absolute z-0 h-screen w-full "
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#383838",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#383838",
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#383838",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 4000,
                rotateY: 4000,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="col-span-3 md:text-right">
        <h2
          className="font-title text-gray-500 text-left font-semibold md:text-5xl ml-2 subpixel-antialiased
          md:min-w-min"
        >
          My work
        </h2>
      </div>
      <div className="col-span-8 relative">
        <Works />
      </div>
    </div>
  )
}
export default Projects
