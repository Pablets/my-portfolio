import { Link } from "gatsby"
import React from "react"

const ThankYou = () => {
  return (
    <div className="h-screen flex justify-center w-full">
      <div className="flex flex-col justify-center max-w-sm mx-6">
        <h1 className="mb-8 font-title font-bold text-gray-500 text-6xl">
          Thank you!
        </h1>
        <h2 className="text-gray-400 text-2xl">
          An email was send to Pablo Godoy. He'll be in contact whit you soon.
        </h2>
        <button className="w-full text-right mt-7">
          <Link
            to="/"
            className="inline-block text-2xl bg-gray-200 p-2 rounded text-gray-500 "
          >
            <span className="">{`</Home>`}</span>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default ThankYou
