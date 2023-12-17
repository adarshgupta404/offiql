import React from "react";
import personimg from "./assets/Image-1.png"
import { FaArrowCircleRight } from "react-icons/fa";
const Welcome = () => {
  return (
    <>
      <div className="w-full px-5 sm:px-10 lg:px-20 pt-10 md:flex items-center justify-between">
        <div className=" md:w-1/2">
          <div className="inline-flex flex-col items-start justify-center relative p-3" style={{ background: 'linear-gradient(90deg, rgb(181.05,203.89,255) 0%, rgb(0,78.77,255) 100%)' }}>
            <div className="inline-flex items-center gap-[15px] relative">
              <div className="relative w-[24px] h-[24px] bg-[#d9d9d9]" />
              <div className="relative  [font-family:'Inter-Regular',Helvetica] font-normal text-white text-md sm:text-lg tracking-[5.50px] whitespace-nowrap">
                LEADS MANAGEMENT
              </div>
            </div>
          </div>
          <div className="flex flex-col py-8 w-full items-start relative">
            <p className="relative text-[2.5rem] leading-9 lg:leading-none lg:text-[4rem] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent">
              <div className="text-[#3b3a5d]">Welcome to your </div>
              <div className="text-[#407bff]">Facebook.</div>
            </p>
            <p className="relative pt-5 text-gray-500 [font-family:'Inter-Regular',Helvetica] font-normal text-paragraph-text text-lg">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <button className="bg-[#534AEC] flex justify-center items-center gap-3 text-white p-5 rounded-md mt-8">Try It Now <FaArrowCircleRight /></button>
          </div>
        </div>
        <div className="md:w-1/2 pb-5 flex items-center justify-center md:justify-end md:items-end">
            <img src={personimg} className="rounded-2xl object-cover float-right" alt="pimg" />
        </div>
      </div>
    </>
  );
};

export default Welcome;

{
  /* <div className="flex flex-col w-[609px] items-start gap-[38px] relative">
<div className="inline-flex flex-col items-start justify-center gap-[10px] px-[14px] py-[9px] relative flex-[0_0_auto] [background:linear-gradient(180deg,rgb(0,78.77,255)_0%,rgb(181.05,203.89,255)_100%)]">
  <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
    <div className="relative w-[20px] h-[24px] bg-[#d9d9d9]" />
    <div className="relative w-[323px] h-[17px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[20px] tracking-[5.50px] leading-[23.7px] whitespace-nowrap">
      LEADS MANAGEMENT
    </div>
  </div>
</div>
<div className="flex flex-col w-[609px] items-start gap-[38px] relative flex-[0_0_auto]">
  <p className="relative w-[609px] h-[147px] mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-transparent text-[65px] tracking-[0] leading-[77.0px]">
    <span className="text-[#3b3a5d]">Welcome to your </span>
    <span className="text-[#407bff]">Facebook.</span>
  </p>
  <p className="relative w-[566px] [font-family:'Inter-Regular',Helvetica] font-normal text-paragraph-text text-[18px] tracking-[0] leading-[30.6px]">
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
    texts.
  </p>
</div>
<button className="inline-flex flex-col items-center justify-center gap-[10px] px-[30px] py-[24px] relative flex-[0_0_auto] bg-[#5249ec] rounded-[5px] all-[unset] box-border">
  <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[20px] text-center tracking-[0] leading-[23.7px] whitespace-nowrap">
      Try It Now
    </div>
    <img className="relative w-[17px] h-[16px]" alt="Vector" src="vector.svg" />
  </div>
</button>
</div> */
}
