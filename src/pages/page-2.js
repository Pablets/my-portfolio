// import React, { useEffect, useRef } from "react"
import React from "react"

// import { animated as a, useSpring } from "react-spring"

// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.

// const calc1 = o => `translateY(${o * 0.5}px)`
// const calc2 = o => `translateY(${o * 0.3}px)`
// const calc3 = o => `translateY(${o * 0.1}px)`

const SecondPage = () => {
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
    // <div ref={ref}> reemplazo con el div vacío de abajo para no generar errores de lint.
    <div>
      {/* <a.div />
      <a.div />
      <a.div /> */}
    </div>
  )
}

export default SecondPage
