import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

  const navigate=useNavigate();

  const [showPassword,setShowPassword]=useState(false);
  const [showPassword1,setShowPassword1]=useState(false);
  const [accountType,setAccountType]=useState("student");
  

  const [formData,setFormData]=useState({
    firstName:"",lastName:"",email:"",password:"",confirmPassword:""
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
  if(formData.password != formData.confirmPassword)
  {
    toast.error("Password Not Matched");
    return;
  }
  setIsLoggedIn(true);
  toast.success("Acount Created");
  navigate("/dashboard")
}

  return (
    <div>
      <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
         className={`${ accountType === "student" ?
          ("bg-richblack-900 text-richblack-5"):
          ("bg-transparent text-richblack-200")
         } py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setAccountType("student")} >
          Student
        </button>
        <button 
        className={`${ accountType === "instructor" ?
          ("bg-richblack-900 text-richblack-5"):
          ("bg-transparent text-richblack-200")
         } py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>
      <form  onSubmit={submitHandler} className='flex flex-col gap-3'>
        <div className='flex gap-x-4'>
          <label className='w-full'>
          <p 
          className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] ' >First Name <sup  className='text-pink-200'>*</sup></p>
          <input required type="text" name="firstName" value={formData.firstName}
          onChange={changeHandler} placeholder='Enter First Name'
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>
          </input>
          </label>

          <label  className='w-full'>
          <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] '
          >Last Name <sup  className='text-pink-200'>*</sup></p>
          <input required type="text" name="lastName" value={formData.lastName}
          onChange={changeHandler} placeholder='Enter Last Name'
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>
          </input>
          </label>
        </div>

        <label>
          <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] '
          >Email Address<sup  className='text-pink-200'>*</sup></p>
          <input required type="email" name="email" value={formData.email}
          onChange={changeHandler} placeholder='Enter Email Address'
          className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>
          </input>
        </label>

        <div className='flex gap-x-4'>
          <label className='w-full relative'>
            <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] '
            >Create Password<sup  className='text-pink-200'>*</sup></p>
            <input required type={showPassword? ("text"):("password") }
            name="password" value={formData.password}
            onChange={changeHandler} placeholder='Enter Your Password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>
            </input>

            <span onClick={() => setShowPassword((prev) => !prev)}
              className='absolute right-3 top-[38px] cursor-pointer'>
            {showPassword ? (<AiOutlineEyeInvisible
                 fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye
                    fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
            </span>
          </label>

          <label className='w-full relative'>
            <p className='text-richblack-5 mb-1 leading-[1.375rem] text-[0.875rem] '
            >Confirm Password<sup  className='text-pink-200'>*</sup></p>
            <input required type={showPassword? ("text"):("password") }
             name="confirmPassword" value={formData.confirmPassword}
            onChange={changeHandler} placeholder='Confirm password'
            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'>
            </input>

            <span onClick={() => setShowPassword1((prev) => !prev)}
              className='absolute right-3 top-[38px] cursor-pointer'>
            {showPassword1 ? (<AiOutlineEyeInvisible
                 fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>):(<AiOutlineEye
                    fontSize={24} fill='#AFB2BF'></AiOutlineEye>)}
            </span>
        </label>
        </div>

        <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]
        mt-6 w-full'>
          Create account
        </button>

      </form>
    </div>
  )
}

export default SignupForm;
