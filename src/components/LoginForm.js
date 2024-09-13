import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ( {setIsLoggedIn}) => {

    const navigate=useNavigate();

    const [showPassword,setShowPassword]=useState(false);


    const [formData,setFormData]=useState({
        email:"",password:""
    })

    function changeHandler(event){
        setFormData((prev) =>(
            {
                ...prev,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }

  return ( 
    <form onSubmit={submitHandler} 
    className='flex flex-col w-full gap-y-4 mt-6'> 
        <label className='w-full'>
            <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] '>
                Email Address <sup className='text-pink-200'>*</sup>
            </p>
            <input required type="email" value={formData.email} 
            placeholder='Enter email address' onChange={changeHandler} name="email"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
        </label>
        <label className='w-full relative'> 
            <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] '>
                Password <sup className='text-pink-200'>*</sup>
            </p>
            <input required type={showPassword? ("text"):("password") } value={formData.password} 
            placeholder='Enter password' onChange={changeHandler} name="password"
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>

            <span onClick={() => setShowPassword((prev) => !prev)}
                className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword ? (<AiOutlineEyeInvisible
                 fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye
                    fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
            </span>

            <Link t0="#">
              <p className='tetx-xs mt-1 text-blue-100 max-w-max ml-auto'>
                Forgot Password
              </p>
            </Link>
        </label>
        <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]
        mt-6'> 
            Sign In
        </button>
    </form>
  )
}
export default LoginForm;
