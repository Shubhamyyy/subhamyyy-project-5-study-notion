import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import reviews from './data';

const Card = ({review,setIndex}) => {
    function decIndex(){
        setIndex((review.id-2+reviews.length)%(reviews.length));
    }
    function incIndex(){
        setIndex((review.id)%(reviews.length));
    }
    function randIndex(){
        let randomIndex=Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }
  return (
    <div className='flex flex-col relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto mt-20 ml-10'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
             src={review.image}></img>
             <div className='w-[140px] h-[140px] bg-black rounded-full absolute top-[-6px] z-[-10]
             left-[10px]'></div>
        </div>
        <div className='text-center mt-7'>
            <p className='fint-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center mt-7'>
            <p className='bg-blue'>{review.job}</p>
        </div>
        <div className='mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className='text-center mt-4 text-slate'> 
            {review.text}
        </div>
        <div className='mx-auto mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>
        <div className='mt-4 text-3xl flex gap-3 font-bold mx-auto'>
            <button onClick={decIndex}> 
                <FiChevronLeft></FiChevronLeft>
            </button>
            <button onClick={incIndex}>
                <FiChevronRight></FiChevronRight>
            </button >
        </div>
        <div>
            {/* <button className='bg-violet' onClick={randIndex}>
                Surprise me
            </button> */}
        </div>
    </div>
  )
}

export default Card;