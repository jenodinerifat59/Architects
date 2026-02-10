import React from 'react'
import Img from '../component/Img'
import Google from '../src/assets/googleLogo.png'
import Spotify from '../src/assets/spotifyLogo.png'
import Amazon from '../src/assets/AmazonLogo.png'
import Telerama from '../src/assets/TeleramaLogo.png'
import Figma from '../src/assets/figmaLogo.png'

const Sponspors = () => {
  return (
    <div className="mt-45 text-center">
     <h2 className='font-bold text-[45px]'>Our Sponspors</h2>
     <p className='font-normal text-lg mt-6'>There are many variations of passages of Lorem Ipsum available, but <br/> the majority have suffered alteration.</p>
     <div className='grid grid-cols-5 justify-center mt-12.5 pb-30'>
        <Img className="brightness-0" src={Spotify} alt='footer'/>
        <Img className="brightness-0" src={Amazon} alt='footer'/>
        <Img className="brightness-0" src={Google} alt='footer'/>
        <Img className="brightness-0" src={Telerama} alt='footer'/>
        <Img className="brightness-0" src={Figma} alt='footer'/>
     </div>
     <div className='bg-[#FFF4E7] mb-10'>
        <p className='py-9 text-xl font-light'>All rights reserved copyright@2023 startup landing page design</p>
     </div>
    </div>
  )
}

export default Sponspors
