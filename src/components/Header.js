import { Link } from 'react-router-dom'
import logo from '../img/blob-g4cbd40147_640.png'

export const Header = () => {
  return (
    <header className="md:my-4 md:mr-3">
    <nav className="flex flex-row justify-between text-white body-font font-poppins">
      <span>
          <img className="w-15 mt-2 p-2 h-14 text-sm  md:w-18 md:h-16 md:mx-4 bg-transparent" src={logo} alt="web logo" />
        </span>
      <ul className="flex list-none gap-3  md:text-xxl p-2 mt-4 md:justify-center md:mb-5">
        <li><Link to='/' className="no-underline list-none text-pink-200 hover:text-indigo-400 md:m-5">Home</Link></li>
        <li><Link to='/main' className="no-underline list-none text-pink-200 hover:text-indigo-400  md:m-5">Services</Link></li>
        <li><Link to='/' className="no-underline list-none text-pink-200 hover:text-indigo-400  md:m-5">Contact</Link></li>
      </ul>
    <div className='mt-3 mx-4 flex flex-nowrap items-center text-sm md:text-xxl '>
      <Link to='/main'  className=" overflow-hidden rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-center font-medium text-white  hover:bg-indigo-700 no-underline list-none">Get started</Link>
      </div>
    </nav>
  </header>
  )
}
