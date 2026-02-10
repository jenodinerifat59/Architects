import React from 'react'
import FactsBox from '../component/FactsBox'
import Img1 from '../src/assets/Group22.png'
import Img2 from '../src/assets/Group28.png'
import Img3 from '../src/assets/Group29.png'
import Img4 from '../src/assets/Group30.png'

const Facts = () => {
  return (
   <div>
    <h2 className='font-bold text-[45px] mb-6 '>Some Facts</h2>
    <p className='font-normal text-lg mb-25'>There are many variations of passages of Lorem Ipsum available, but <br/> the majority have suffered alteration.</p>
    <div className="grid grid-cols-4 gap-[124.17px]">
        <FactsBox icon={Img1} heading='54' paragraph='Awards Winnings'/>
        <FactsBox icon={Img2} heading='1458' paragraph='Project Finished'/>
        <FactsBox icon={Img3} heading='590' paragraph='Clients Worked'/>
        <FactsBox icon={Img4} heading='22578' paragraph='Email Send'/>
    </div>
   </div>
  )
}

export default Facts
