import React, { useEffect, useRef } from "react"
import { animated as a, useSpring } from "react-spring"
import StyledFullBackground from "../components/FullBackground"
import Layout from "../components/layout"
import Works from "../components/works"
import data from "../data/index"

const calc1 = o => `translateY(${o * -0.6}px)`
const calc2 = o => `translateY(${o * -1.2}px)`
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
      <Layout>
        <StyledFullBackground>
          <a.h1
            style={{ color: `white`, transform: offset.interpolate(calc1) }}
          >
            Projects
          </a.h1>
        </StyledFullBackground>
        <a.div style={{ transform: offset.interpolate(calc2) }}>
          <Works works={data} />
        </a.div>
      </Layout>
    </div>
  )
}

export default Projects
