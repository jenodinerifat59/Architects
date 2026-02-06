import React from 'react'
import Button from '../component/Button'
import HeroImg from '../src/assets/hero.png'

const Hero = () => {
  return (
    <div>
      <h1 className="font-bold text-[64px] text-[#131313] text-center mt-29">Brand New <br/>
Group of Architects</h1>
<p className="font-regular text-4 text-center line-height-[26px] mt-8 text-[#727272]" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in <br/> some  form, by injected humour, or randomised words which don't look even</p>
<Button className="block mx-auto" text="Explore More"/>
 <img className="mt-12.5" src={HeroImg} alt="hero img"/>
    </div>
  )
}

export default Hero
