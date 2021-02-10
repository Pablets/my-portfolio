import React from "react"
import Form from "../components/Form"

const Contact = () => {
  return (
    <div className="mx-5 md:grid md:grid-cols-12 h-screen ">
      <div className="min-h-screen flex flex-col px-4 md:px-0 md:col-start-4 md:col-span-8 justify-center ">
        <div>
          <h2 className="font-title font-semibold text-4xl text-gray-500">
            Contact me
          </h2>
          <Form />
        </div>
      </div>
    </div>
  )
}
export default Contact
