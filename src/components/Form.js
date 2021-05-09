import React from "react"
// import { navigate } from "gatsby-link"
import { useMediaQuery } from "react-responsive"
import { useForm } from "react-hook-form"
import { navigate } from "gatsby"

function encode(data) {
  const content = Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
  return content
}

const Form = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  })

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    // console.log({ ...data })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    })
    .then(() => navigate('/thank-you'))
    .catch(error => alert(error))
  }

  return (
    <div>
      <div className={`${isDesktop && "flex items-center"} py-1 px-0 `}>
        <div className="md:w-96 max-w-md ">
          <form
            id="contact"
            className="mt-8 space-y-6"
            method="post"
            data-netlify="true"
            netlify-honeypot="bot-field"
            name="contact"
            // action="/thanks/"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="rounded-md shadow-sm ">
              <div className="invissible ">
                <label>
                  <input type="hidden" name="form-name" value="contact" />
                </label>
                <label>
                  <input type="hidden" name="bot-field" />
                </label>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                {errors && (
                  <div className="flex ">
                    <div className="relative mx-2">
                      <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                        Name required
                        <svg
                          className="absolute text-black h-2 right-0 mr-3 top-full"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                          xmlSpace="preserve"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="current-name"
                  ref={register({ required: true })}
                  className="appearance-none rounded-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                {errors.email && (
                  <div className="flex ">
                    <div className="relative mx-2">
                      <div className="bg-black text-white text-xs rounded py-1 px-4 right-0 bottom-full">
                        Email required
                        <svg
                          className="absolute text-black h-2 right-0 mr-3 top-full"
                          x="0px"
                          y="0px"
                          viewBox="0 0 255 255"
                          xmlSpace="preserve"
                        >
                          <polygon
                            className="fill-current"
                            points="0,0 127.5,127.5 255,0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={register({
                    required: true,
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={3}
                  name="message"
                  type="textArea"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Leave a message"
                  ref={register({
                    required: false,
                  })}
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form
