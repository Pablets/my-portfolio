import React from "react"
import Particles from "react-particles-js"

const About = () => {
  return (
    <div className="relative h-screen mx-3.5 md:w-auto md:grid md:grid-cols-12 md:grid-rows-3 md:gap-6">
      <div className="row-start-2 col-span-3 ">
        <h2 className="min-w-max font-title text-gray-500 text-left font-semibold md:text-5xl ml-2 subpixel-antialiased">
          Sobre mi
        </h2>
      </div>
      <div className="row-start-2 col-span-4">
        <p className="min-w-min text-lg justify-self-start">
          Soy desarollador web con experiencia en MERN stack, diseño gráfico
          para web y UX/UI. Me apasiona el mundo del desarrollo web en especial
          el diseño de interfaces y experiencias de usuario. Vivo en Buenos
          aires, actualmente me desarrollo como QA en el Ministerio de
          Desarrollo Productivo del gobierno de la ciudad de Buenos Aires.
        </p>
      </div>
      <Particles
        className="row-start-2 bg-transparent absolute top-0 right-0 z-0 h-auto w-max"
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
    </div>
  )
}
export default About
