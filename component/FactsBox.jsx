import React from 'react'

const Container = ({icon, heading, paragraph}) => {
  return (
     <div className=" border border-[#FF900E] rounded-lg w-[241.83px]">
        <img class='block mx-auto mt-[45.92px]'  src={icon} alt="image"/>
        <h4 class='block text-center text-[45px] font-semibold mt-2.5'>{heading}</h4>
        <p class='block text-center text-xl font-semibold mt-1 mb-[59.69px]'>{paragraph}</p>
    </div>
  )
}

export default Container
