import React from "react"
import Layout from "../components/layout"
// import StyledFullBackground from "../components/FullBackground"
import StyledFullBackground from "../components/FullBackground"
// import styles from "./index.module.css"

const About = () => {
  return (
      <Layout>
        <StyledFullBackground>
          <>
            <h1 style={{ color: "white", paddingTop: "40px" }}>
              Hola que tal esto es un about
            </h1>
          </>
        </StyledFullBackground>
      </Layout>
  )
}

export default About
