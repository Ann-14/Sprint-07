import { Link } from "react-router-dom"
// import { WelcomeBackground, } from "../styles/StyledComponents"
import heroimg from '../img/pexels-fauxels-3184306.jpg'

export const Home = () => {

  return (
    <>

      <div class="flex  flex-col md:flex-row">
        {/* columna texto */}
          <div className="w-full md:w-1/2 h-9 pt-16 p-4 text-center  ">
            <h1 className="font text-4xl lg:text-6xl font-bold tracking-tight text-pink-100 text-center">
              Get the help you need, every step of the way
            </h1>
            <p className="mt-4 text-xl lg:text-3xl md:p-4 text-pink-200">
              Upgrade YOUR business for better future. Create or upgrade your websites and spend less with Essentials.
            </p>
          </div>
          
          {/* Columna imagen */}
          <div className="mt-48 md:mt-0 p-8 md:w-1/2">
            <div className="mt-10 md:mt-0">
              {/* Decorative image  */}
              <div className="h-100 w-100 overflow-hidden rounded-lg">
                <img
                  src={heroimg}
                  alt="office working"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="flex mt-4 gap-3 ">
              <Link to='/main'

                className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-center font-medium text-white  hover:bg-indigo-700 no-underline list-none"
              >
                Shop Collection
              </Link>
              <Link to='/main'

                className="inline-block rounded-md border bg-transparent  py-2 px-4 text-center font-medium no-underline list-none text-indigo-700 hover:text-white "
              >
                Learn more
              </Link>
            </div>
          </div>
        
      </div>
{/* Test */}



<footer className="bg-gray-800 pt-10 sm:mt-10 bottom-0 mt-auto">
    <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      
        

        {/* <!-- Col-2 --> */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
            {/* <!-- Col Title --> */}
            <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                Core Concepts
            </div>

            {/* <!-- Links --> */}
            <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline">
                Utility-First
            </Link>
            <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline">
                Responsive Design
            </Link>
            <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline">
                Hover, Focus, & Other States
            </Link>
            <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline">
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
            <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline">
                GitHub
            </Link>
            <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline">
                Discord
            </Link>
            <Link to="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700 no-underline">
                YouTube
            </Link>
        </div>
    </div>

    {/* <!-- Copyright Bar --> */}
    <div class="pt-2">
        <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
            <div class="mt-2">
                © Copyright 1998-year. All Rights Reserved.
            </div>

            {/* <!-- Required Unicons (if you want) --> */}
           
        </div>
    </div>
</footer>






    
      </>
  )
}


