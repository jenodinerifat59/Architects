import React from 'react'
import Box from '../component/Box'
import Rectangle from '../src/assets/Rectangle.png'
import Button from '../component/Button'

const Love = () => {
  return (
    <div className=" grid grid-cols-2 gap-13.5 mt-32.5 pb-42">
      <div>
         <h2 className='relative pl-5 font-bold text-[45px] '><span className='absolute left-0 top-1/2 -translate-y-1/2 h-28 w-1 bg-orange-500'></span>Features you will <br/> love & enjoy</h2>
       <p className='max-w-140 font-normal text-4 mt-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
      <div className='mt-7.5'>
        <Box heading='Dexktop & Mobile Version' paragraph='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........'/>
        <Box heading='Drag & Drop Builder' paragraph='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........'/>
        <Box heading='Awesome Modern Design' paragraph='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........'/>
        <Box heading='Super Easy to Edit' paragraph='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........'/>
        
      </div>
      </div>
      <div className='relative'>
        <img src={Rectangle} alt='love img'/>
        <button className="absolute left-[-92px] bottom-[-20px] text-white font-medium text-[25px] bg-[#FF900E] py-10.5 px-11.5 rounded-lg"><span className="font-bold text-white text-[65px] ">10+Year</span> <br/> Experience</button>
      </div>
    </div>
  )
}

export default Love
