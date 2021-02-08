import React from "react"

const About = () => {
  return (
    <div className="h-screen md:w-auto md:grid md:grid-cols-3 md:gap-6">
      <h2
        className="font-title text-gray-500 text-7xl md:text-right md:text-8xl -ml-2 subpixel-antialiased
         md:self-center justify-self-end  md:max-w-sm"
      >
        Sobre mi
      </h2>
      <p className="text-lg self-center justify-self-start md:max-w-sm">
        Soy desarollador web con experiencia en MERN stack, diseño gráfico para
        web y UX/UI. Me apasiona el mundo del desarrollo web en especial el
        diseño de interfaces y experiencias de usuario. Vivo en Buenos aires y
        busco trabajar con personas igual de apasionadas por el desarrollo web
        que yo.
      </p>
    </div>
  )
}
export default About
