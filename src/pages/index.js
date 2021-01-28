import React from "react"
// import styles from "./index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledFullBackground from "../components/FullBackground"
// import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StyledFullBackground>
      <>
        <div>
          <h3 style={{ color: "white" }}>Hi I'm</h3>
          <h1 style={{ color: "white" }}>Pablo Godoy</h1>
          <h5 style={{ color: "white" }}>Fullstack web developer</h5>
        </div>
      </>
    </StyledFullBackground>
  </Layout>
)

export default IndexPage
