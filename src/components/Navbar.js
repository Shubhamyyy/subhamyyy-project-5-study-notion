import React from 'react'
import studylogo from '../assets/studylogo.jpg'
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = ({isLoggedIn,setIsLoggedIn}) => {

  

  return (
    <div className='flex justify-between items-ceter w-11/12 max-w-[1160px] py-4 mx-auto' >
      <Link to="/">
        <div className='flex gap-x-2'>
        <img src={studylogo} alt="Logo" width={30} height={12} loading="lazy"></img>
        <div className='text-green-400 font-bold text-2xl'>StudyWithEtoos</div>
        </div>
      </Link>

      <nav>
        <ul className='flex gap-3 text-white'>
          <li>
            <Link to="/">
            <button className='bg-richblack-200 text-white px-5 py-1 rounded-full font-semibold hover:bg-gray-200'>Home</button>
            </Link>
          </li>
          <li>
            <Link to="about">
            <button className='bg-richblack-200 text-white px-5 py-1 rounded-full font-semibold hover:bg-gray-200'>About</button>
            </Link>
          </li>
          <li>
            <Link to="testimony">
            <button className='bg-richblack-200 text-white px-5 py-1 rounded-full font-semibold hover:bg-gray-200'>Testimony</button>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Login,Sinup,Logout,Dashboard */}
      <div className='flex gap-x-4 items-center'>
        { !isLoggedIn &&
          <Link to="/login" >
            <button className='bg-green-600 text-white py-[6px] px-[12px] rounded-[8px]
            border border-richblack-700'>Log In</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup">
            <button className='bg-blue-600 text-white py-[6px] px-[12px] rounded-[8px]
            border border-richblack-700'>Sign Up</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button className='bg-red-400 text-white py-[6px] px-[12px] rounded-[8px]
            border border-richblack-700' onClick={ () => {
              setIsLoggedIn(false);
              toast.success("Logged Out")
            }}>Log out</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button className='bg-richblack-200 text-white py-[6px] px-[12px] rounded-[8px]
            border border-richblack-700'>Dashboard</button>
          </Link>
        }
      </div>
    </div>
  )
}

export default Navbar;
