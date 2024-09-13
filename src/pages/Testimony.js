import React from 'react'
import { useState } from 'react'
import Card from './Card';
import reviews from './data';

const Testimony = () => {
  const [index,setIndex]=useState(0);

  return (
    <div  className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 mt-50'>
        <Card review={reviews[index]} setIndex={setIndex}></Card>
    </div>
  )
}

export default Testimony;
