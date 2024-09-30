import React from 'react'
import project from '../Assests/Images/icon-project.png'

const Projects = () => {
  return (
    <div>
      <div className="pb-16 lg:pb-20">
          <div className="flex items-center pb-6">
            <img src={project} alt="icon story" />
            <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
              My Projects
            </h3>
          </div>
          <div>

            <a href=" / " className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6">
              <span className="w-9/10 pr-8">
                <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                  TailwindCSS
                </h4>
                <p className="font-body font-light text-primary dark:text-white">
                  Rapidly build modern websites without ever leaving your HTML.
                </p>
              </span>
              <span className="w-1/10">
                <img src="/assets/img/chevron-right.png" className="mx-auto" alt="chevron right" />
              </span>
            </a>

            <a href=" / " className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6">
              <span className="w-9/10 pr-8">
                <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                  Maizzle
                </h4>
                <p className="font-body font-light text-primary dark:text-white">
                  Framework for Rapid Email Prototyping
                </p>
              </span>
              <span className="w-1/10">
                <img src="/assets/img/chevron-right.png" className="mx-auto" alt="chevron right" />
              </span>
            </a>

            <a href=" / " className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6">
              <span className="w-9/10 pr-8">
                <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                  Alpine.js
                </h4>
                <p className="font-body font-light text-primary dark:text-white">
                  Think of it like Tailwind for JavaScript.
                </p>
              </span>
              <span className="w-1/10">
                <img src="/assets/img/chevron-right.png" className="mx-auto" alt="chevron right" />
              </span>
            </a>

            <a href=" / " className="mb-6 flex items-center justify-between border border-grey-lighter px-4 py-4 sm:px-6">
              <span className="w-9/10 pr-8">
                <h4 className="font-body text-lg font-semibold text-primary dark:text-white">
                  PostCSS
                </h4>
                <p className="font-body font-light text-primary dark:text-white">
                  A tool for transforming CSS with JavaScript
                </p>
              </span>
              <span className="w-1/10">
                <img src="/assets/img/chevron-right.png" className="mx-auto" alt="chevron right" />
              </span>
            </a>

          </div>
        </div>
    </div>
  )
}

export default Projects
