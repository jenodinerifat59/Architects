import React from "react";
import Img1 from "../src/assets/Rectangle14.png"
import Img2 from "../src/assets/Rectangle15.png"
import Img3 from "../src/assets/Rectangle16.png"
import Img4 from "../src/assets/Rectangle17.png"
import Button from '../component/Button'

const Features = () => {
  return (
    <div className="flex justify-around items-center mt-32.5 gap-18.25">
        <div className="grid grid-cols-2 gap-6">
            <img className="h-85.5 w-85.5" src={Img1} alt="Features1"/>
            <img className="h-85.5 w-85.5" src={Img2} alt="Features"/>
            <img className="h-85.5 w-85.5" src={Img3} alt="Features"/>
            <img className="h-85.5 w-85.5" src={Img4} alt="Features"/>
        </div>
        <div>
            <h2 className="font-medium text-[45px] text-[#727272]">Quick list <span className="text-[#131313] font-bold">of Our</span> <br/> <span className="font-bold text-[#FF900E]">Features</span></h2>
            <p className="font-regular text-[16px] text-[#727272] mt-6">There are many variations of passages of Lorem Ipsum available,<br/> but the majority h ave suffered alteration in some form, by injected <br/> humour, or randomised words which don't look even</p>
            <Button className="block " text="Explore More"/>
        </div>
    </div>
  );
};

export default Features;
