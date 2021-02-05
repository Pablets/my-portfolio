import React, { useEffect, useRef } from "react"
import { animated as a, useSpring } from "react-spring"
import Works from "../components/works"

const calc1 = o => `translateY(${o * -0.1}px)`
const calc2 = o => `translateY(${o * -0.15}px)`
// const calc3 = o => `translateY(${o * 0}px)`

const Projects = () => {
  const ref = useRef()
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div ref={ref}>
      <a.h1 style={{transform: offset.interpolate(calc1) }}>
        Projects
      </a.h1>
      <a.div style={{ transform: offset.interpolate(calc2) }}>
        <div>
          <Works />
        </div>
      </a.div>
    </div>
  )
}
export default Projects
