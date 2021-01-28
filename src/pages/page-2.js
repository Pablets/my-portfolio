import React, { useEffect, useRef } from "react"
import { animated as a, useSpring } from "react-spring"

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.

const calc1 = o => `translateY(${o * 0.5}px)`
const calc2 = o => `translateY(${o * 0.3}px)`
const calc3 = o => `translateY(${o * 0.1}px)`


const SecondPage = () => {
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
    <div
      style={{
        background: "tomato",
        position: "relative",
        width: "100vw",
        height: "3400px",
      }}
      ref={ref}
    >
      <a.div
        style={{
          background: "red",
          // position: "absolute",
          marginTop: "300px",
          width: "100vw",
          height: "100px",
          transform: offset.interpolate(calc1)
        }}
      />
      <a.div
        style={{
          background: "green",
          // position: "absolute",
          marginTop: "300px",
          width: "100vw",
          height: "100px",
          transform: offset.interpolate(calc2)
        }}
      />
      <a.div
        style={{
          background: "blue",
          // position: "absolute",
          marginTop: "300px",
          width: "100vw",
          height: "100px",
          transform: offset.interpolate(calc3),
        }}
      />
    </div>
  )
}

export default SecondPage
