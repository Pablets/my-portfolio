import React from "react"
import { useMediaQuery } from "react-responsive"
import { useForm } from "react-hook-form"

const Form = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })
  const { register, handleSubmit } = useForm()
  const FAKE_GATEWAY_URL = "https://jsonplaceholder.typicode.com/posts"
  const onSubmit = data => {
    try {
      fetch(FAKE_GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
    } catch (error) {
      // handle server errors
    }
  }

  return (
    <div>
      <div
        className={`${
          isDesktop &&
          "min-h-screen flex items-center  justify-center py-12 px-4 sm:px-6 lg:px-8"
        }`}
      >
        <div className={`${isDesktop && "w-96"} max-w-md space-y-8`}>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="current-name"
                  ref={register({
                    required: "Name is required",
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={register({
                    required: "Email is required",
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Message:
                </label>
                <textarea
                  id="email-address"
                  rows={3}
                  name="email"
                  type="textArea"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Leave a message"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
