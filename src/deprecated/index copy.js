// import React from "react"
// import { useMediaQuery } from "react-responsive"
// import Particles from "react-particles-js"
// import Layout from "../components/layout"
// import SEO from "../components/seo"
// import About from "./about"
// import Projects from "./projects"
// import Contact from "./contact"

// const IndexPage = () => {
//   const isDesktop = useMediaQuery({
//     query: "(min-device-width: 1224px)",
//   })
//   return (
//     <Layout>
//       <SEO title="Home" />

//       <div className="bg-transparent sm:static md:relative text-gray-400 w-full ">
//         <div className="h-screen flex items-center md:relative md:z-20 md:grid md:grid-cols-12 md:grid-rows-6">
//           {isDesktop && (
//             <Particles
//               className="row-span-4 row-start-3 col-span-3 col-start-1  bg-transparent"
//               params={{
//                 particles: {
//                   number: {
//                     value: 70,
//                     density: {
//                       enable: true,
//                       value_area: 1000,
//                     },
//                   },
//                   color: {
//                     value: "#383838",
//                   },
//                   shape: {
//                     type: "circle",
//                     stroke: {
//                       width: 0,
//                       color: "#383838",
//                     },
//                   },
//                   opacity: {
//                     value: 0.5,
//                     random: true,
//                     anim: {
//                       enable: false,
//                       speed: 1,
//                       opacity_min: 0.1,
//                       sync: false,
//                     },
//                   },
//                   size: {
//                     value: 3,
//                     random: true,
//                     anim: {
//                       enable: false,
//                       speed: 40,
//                       size_min: 0.1,
//                       sync: false,
//                     },
//                   },
//                   line_linked: {
//                     enable: true,
//                     distance: 200,
//                     color: "#383838",
//                     opacity: 0.4,
//                     width: 1,
//                   },
//                   move: {
//                     enable: true,
//                     speed: 1,
//                     direction: "none",
//                     random: false,
//                     straight: false,
//                     out_mode: "out",
//                     bounce: false,
//                     attract: {
//                       enable: true,
//                       rotateX: 4000,
//                       rotateY: 4000,
//                     },
//                   },
//                 },
//                 interactivity: {
//                   detect_on: "canvas",
//                   events: {
//                     onhover: {
//                       enable: false,
//                       mode: "repulse",
//                     },
//                     onclick: {
//                       enable: false,
//                       mode: "push",
//                     },
//                     resize: true,
//                   },
//                   modes: {
//                     grab: {
//                       distance: 400,
//                       line_linked: {
//                         opacity: 1,
//                       },
//                     },
//                     bubble: {
//                       distance: 400,
//                       size: 40,
//                       duration: 2,
//                       opacity: 8,
//                       speed: 3,
//                     },
//                     repulse: {
//                       distance: 200,
//                       duration: 0.4,
//                     },
//                     push: {
//                       particles_nb: 4,
//                     },
//                     remove: {
//                       particles_nb: 2,
//                     },
//                   },
//                 },
//                 retina_detect: true,
//               }}
//             />
//           )}
//           <div className="flex w-full justify-center md:static md:row-start-3 md:col-start-4 md:col-span-6 bg-transparent">
//             <div className="sm:w-auto">
//               <h3 className="font-sans text-gray-400 text-4xl md:text-5xl subpixel-antialiased max-w-max">
//                 Hi I'm
//               </h3>
//               <h1 className="font-title text-gray-500 font-bold text-7xl md:text-8xl -ml-2 subpixel-antialiased max-w-min">
//                 Pablo Godoy
//               </h1>
//               <h5 className="subpixel-antialiased text-gray-400 text-2xl md:text-3xl tracking-wider max-w-max">
//                 Fullstack web developer
//               </h5>
//             </div>
//           </div>
//           {isDesktop && (
//             <Particles
//               className="row-span-4 col-span-3 bg-transparent"
//               params={{
//                 particles: {
//                   number: {
//                     value: 70,
//                     density: {
//                       enable: true,
//                       value_area: 1000,
//                     },
//                   },
//                   color: {
//                     value: "#383838",
//                   },
//                   shape: {
//                     type: "circle",
//                     stroke: {
//                       width: 0,
//                       color: "#383838",
//                     },
//                   },
//                   opacity: {
//                     value: 0.5,
//                     random: true,
//                     anim: {
//                       enable: false,
//                       speed: 1,
//                       opacity_min: 0.1,
//                       sync: false,
//                     },
//                   },
//                   size: {
//                     value: 3,
//                     random: true,
//                     anim: {
//                       enable: false,
//                       speed: 40,
//                       size_min: 0.1,
//                       sync: false,
//                     },
//                   },
//                   line_linked: {
//                     enable: true,
//                     distance: 200,
//                     color: "#383838",
//                     opacity: 0.4,
//                     width: 1,
//                   },
//                   move: {
//                     enable: true,
//                     speed: 1,
//                     direction: "none",
//                     random: false,
//                     straight: false,
//                     out_mode: "out",
//                     bounce: false,
//                     attract: {
//                       enable: true,
//                       rotateX: 4000,
//                       rotateY: 4000,
//                     },
//                   },
//                 },
//                 interactivity: {
//                   detect_on: "canvas",
//                   events: {
//                     onhover: {
//                       enable: false,
//                       mode: "repulse",
//                     },
//                     onclick: {
//                       enable: false,
//                       mode: "push",
//                     },
//                     resize: true,
//                   },
//                   modes: {
//                     grab: {
//                       distance: 400,
//                       line_linked: {
//                         opacity: 1,
//                       },
//                     },
//                     bubble: {
//                       distance: 400,
//                       size: 40,
//                       duration: 2,
//                       opacity: 8,
//                       speed: 3,
//                     },
//                     repulse: {
//                       distance: 200,
//                       duration: 0.4,
//                     },
//                     push: {
//                       particles_nb: 4,
//                     },
//                     remove: {
//                       particles_nb: 2,
//                     },
//                   },
//                 },
//                 retina_detect: true,
//               }}
//             />
//           )}
//         </div>
//         <About />
//         <Projects />
//         <Contact />
//       </div>
//     </Layout>
//   )
// }

// export default IndexPage
