import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-gray-800 sticky top-[100vh] mt-4">
    <div className="max-w-6xl  text-gray-800 flex  justify-left">
      {/* <!-- Col-2 --> */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        {/* <!-- Col Title --> */}
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          Core Concepts
        </div>
        {/* <!-- Links --> */}
        <Link
          to="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline"
        >
          Utility-First
        </Link>
        <Link
          to="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline"
        >
          Responsive Design
        </Link>
        <Link
          to="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline"
        >
          Hover, Focus, & Other States
        </Link>
        <Link
          to="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline"
        >
          Dark Mode
        </Link>
      </div>
      {/* <!-- Col-3 --> */}
      <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12  ">
        {/* <!-- Col Title --> */}
        <div className="text-xs uppercase text-gray-400 font-medium mb-6">
          Community
        </div>
        {/* <!-- Links --> */}
        <Link
          to="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline"
        >
          GitHub
        </Link>
        <Link
          to="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline"
        >
          Discord
        </Link>
        <Link
          to="#"
          className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline"
        >
          YouTube
        </Link>
      </div>
    </div>
    {/* <!-- Copyright Bar --> */}
    <div className="pt-2">
      <div
        className="flex pb-5 px-3 m-auto pt-5 
      border-t border-gray-500 text-gray-400 text-sm 
      flex-col md:flex-row max-w-6xl"
      >
        <div className="mt-2">
          © Copyright 2023. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
  )
}
