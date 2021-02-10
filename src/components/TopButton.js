import React from "react"
import { BiUpArrowCircle } from "react-icons/bi"

const TopButton = () => {
  return (
    <div>
      <div className="transform-gpu -rotate-90 z-90 flex items-center mb-5">
        <h3 className="p-0">TOP</h3>
        <BiUpArrowCircle className="transform-gpu rotate-90 p-0 text-2xl ml-1 mb-1 "/>
      </div>
    </div>
  )
}

export default TopButton
