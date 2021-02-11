// import React, { useState } from "react"
import React from "react"
import { workdata } from "../data/index"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiNodeDotJs,
  SiMongodb,
  SiGatsby,
  SiTailwindcss,
} from "react-icons/si"
import { AiOutlinePlusCircle } from "react-icons/ai"

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
    <div className="flex flex-initial flex-wrap">
      {/* {isShown && <div>I'll appear when you hover over the button.</div>} */}
      {works.map((w, i) => (
        <div
          className="mb-10 max-w-lg min-w-96 w-96 bg-gray-200 p-6 ring-gray-300 ring-1 rounded shadow-2xl m2 md:mr-10"
          aria-hidden="true"
          key={i}
        >
          {/* onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)} */}
          <h2 className="text-xl mb-3 md:mb-6 -mt-3 md:mt-0 text-left">{`${w.name}`}</h2>
          <div className="">
            <Img className="-mx-6 mt-0 md:mt-6" fluid={dataList[i]} />
          </div>
          <p className="mt-3 text-left h-32 md:h-24">{w.description}</p>

          <div className="mt-3 grid grid-cols-2">
            <div className="text-left align-middle">
              {w.skills.includes("html") && (
                <SiHtml5 className="inline-block text-3xl my-2 px-1 react-icons " />
              )}
              {w.skills.includes("css") && (
                <SiCss3 className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("javascript") && (
                <SiJavascript className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("postgres") && (
                <SiPostgresql className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("react") && (
                <SiReact className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("redux") && (
                <SiRedux className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("node") && (
                <SiNodeDotJs className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("mongo") && (
                <SiMongodb className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("gatsby") && (
                <SiGatsby className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
              {w.skills.includes("tailwind") && (
                <SiTailwindcss className="inline-block text-3xl my-2 px-1 react-icons" />
              )}
            </div>
            <div className="flex justify-self-end text-right align-middle border-2 rounded bg-gray-300 hover:border hover:border-gray-400 max-w-max ">
              <Link
                to={`/${w.url}`}
                rel="noreferrer"
                className="w-auto p-2 rounded hover:text-gray-500 flex flex-row justify-center items-center"
              >
                <p className="text-lg mr-1">More info</p>
                <AiOutlinePlusCircle className="text-2xl " />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Works
