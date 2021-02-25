import React from "react"
import pdf from "../pdf/pg-resume.pdf"

const resume = () => {
  return (
    <div>
      <h1>pdf</h1>
      <button className='bg-gray-500 text-white padding' >
        <a href={pdf}>RESUME</a>
      </button>
    </div>
  )
}

export default resume
