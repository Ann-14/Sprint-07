import { Link } from "react-router-dom";
// import { WelcomeBackground, } from "../styles/StyledComponents"
import heroimg from "../img/pexels-fauxels-3184306.jpg";

export const Home = () => {
  return (
    <>
      <section className=" flex  flex-col md:flex-row ">
      
          {/* columna texto */}
          <div className="w-full md:w-1/2 h-9 pt-16 p-4 text-center flex flex-col gap-4  md:mt-10">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-pink-100 text-center ">
              Get the help you need, every step of the way
            </h1>
            <p className="  text-xl lg:text-3xl md:p-4 text-pink-200">
              Upgrade YOUR business for better future. Create or upgrade your
              websites and spend less with Essentials.
            </p>
          </div>
          {/* Columna imagen */}
          <div className="md:w-1/2 mt-4 p-8">
            <div className="mt-48 md:mt-0 ">
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
              <Link
                to="/main"
                className="inline-block rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-center font-medium text-white  hover:bg-indigo-700 no-underline list-none"
              >
                Shop Collection
              </Link>
              <Link
                to="/main"
                className="inline-block rounded-md border bg-transparent  py-2 px-4 text-center font-medium no-underline list-none text-indigo-700 hover:text-white "
              >
                Learn more
              </Link>
            </div>
          </div>
        
      </section>
    </>
  );
};
