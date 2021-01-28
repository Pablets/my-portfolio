import React, { useEffect, useRef } from "react"
import { animated as a, useSpring } from "react-spring"

const calc1 = o => `translateY(${o * 0.05}px)`
const calc2 = o => `translateY(${o * 0.07}px)`
// const calc3 = o => `translateY(${o * 0.1}px)`

const ParallaxContainer = ({ children }) => {
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

  return <div ref={ref}>{children}</div>
}

export default ParallaxContainer
