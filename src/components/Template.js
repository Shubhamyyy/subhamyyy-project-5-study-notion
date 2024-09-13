import React from 'react'
import frame from '../assets/frame.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {FcGoogle} from 'react-icons/fc';

const Template = ({title,desc1,desc2,image,formType,setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] mx-auto gap-y-12 gap-x-12'>
        <div className='w-11/12 max-w-[450px]'>
            {/* className='w-11/12 max-w-[450] mx-0' */}
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.3rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem]'>
                <span className='text-richblack-100'>{desc1}</span>
                <br></br>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {formType === "signup"?
            (<SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-richblack-100 w-full'></div>
                <p className='text-richblack-100'>OR</p>
                <div className='h-[1px] bg-richblack-100  w-full'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px]
            font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] 
            gap-x-2 mt-6 '>
                <FcGoogle></FcGoogle>
                <p>Sign up with google</p>
            </button>
        </div>
        <div className='relative w-11/12 max-w-[450px] mt-10'>
            <img src={frame} atl="pattern" widht={558} height={504} loading='lazy'></img>
            <img src={image} atl="Students" widht={558} height={490} loading='lazy'
            className='absolute -top-4 right-4' ></img>
        </div>
    </div>
  )
}

export  default Template;
