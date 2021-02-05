// import React, { useState } from "react"
import React from "react"
import { workdata } from "../data/index"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Works = () => {
  // const [isShown, setIsShown] = useState(false)

  const data = useStaticQuery(graphql`
    {
      memories: file(relativePath: { eq: "memories.png" }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      proshop: file(relativePath: { eq: "proshop.png" }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      valle: file(relativePath: { eq: "valle.png" }) {
        childImageSharp {
          fluid(maxHeight: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { valle, memories, proshop } = data
  const dataList = [
    valle.childImageSharp.fluid,
    memories.childImageSharp.fluid,
    proshop.childImageSharp.fluid,
    valle.childImageSharp.fluid,
  ]

  const works = workdata

  return (
    <div>
      {/* {isShown && <div>I'll appear when you hover over the button.</div>} */}
      {works.map((w, i) => (
        <div aria-hidden="true" key={i}>
          {/* onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)} */}
          <div>
            <Img fluid={dataList[i]} />
          </div>
          <h2>{`${w.name}`}</h2>
          <p>{w.description}</p>
          <button>
            <a href={`${w.url}`} target="_blank" rel="noreferrer">
              View site
            </a>
          </button>
        </div>
      ))}
    </div>
  )
}

export default Works
