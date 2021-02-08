// import React, { useEffect, useRef } from "react"
import React from "react"
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
    <div className="md:w-auto md:grid md:grid-cols-3 md:gap-6">
      <div className="col-span-1 md:text-right flex flex-col">
        <h2
          className="font-title text-gray-500 text-7xl md:text-8xl subpixel-antialiased
          md:self-end justify-self-end  md:max-w-sm"
        >
          My work
        </h2>
      </div>
      <div className="col-span-2">
        <Works />
      </div>
    </div>
  )
}
export default Projects
