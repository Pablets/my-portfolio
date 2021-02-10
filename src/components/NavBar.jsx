import React from "react"

const NavBar = () => {
  return (
    <div className="right-0 fixed z-50 w-full">
      <div className="w-full m-0 p-0 bg-transparent ">
        <div className="max-w-7xl mx-auto px-4 sm:px-2">
          {/* Acá se cambia la altura de la navbar */}
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#anchor">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
