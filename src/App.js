
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Main } from "./Pages/Main";
import logo from './img/blob-g4cbd40147_640.png'

function App() {
  return (
    <>
    
      <header className="md:my-4 md:mr-3">
        <nav className="flex flex-row justify-between text-white body-font font-poppins">
          
          <span>
              <img className="w-15 mt-2 p-2 h-14 text-sm  md:w-18 md:h-16 md:mx-4 bg-transparent" src={logo} alt="web logo" />
            </span>
          <ul className="flex list-none gap-3  md:text-xl p-2 mt-4 md:justify-center ">
            <li><Link to='/' className="no-underline list-none text-pink-200 hover:text-indigo-400 md:m-5">Home</Link></li>
            <li><Link to='/main' className="no-underline list-none text-pink-200 hover:text-indigo-400  md:m-5">Services</Link></li>
            <li><Link to='/' className="no-underline list-none text-pink-200 hover:text-indigo-400  md:m-5">Contact</Link></li>
          </ul>
          <button className="rounded-md border-transparent bg-indigo-600 mx-2  mt-4 mb-3 text-sm py-1 md:py-2 md:px-4  md:mb-4 text-center font-medium  hover:bg-indigo-700 no-underline list-none"> 
          <Link to='/main'  className=" no-underline text-pink-200  hover:text-white p-2 text-sm ">Get started</Link></button>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      
    </>

  );
}
export default App;
