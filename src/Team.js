import React from "react";
import hands from "./assets/Mask group.png";
import pig from "./assets/Icon (2).png";
import cash from "./assets/Group 10.png";
import house from "./assets/Group 59.png";
import map from "./assets/Group 9.png";
import people from "./assets/Frame.png";
import {FaArrowCircleRight} from "react-icons/fa"
import clouds from "./assets/clouds.png"
import plant from "./assets/--Plant--inject-279.png";
const Team = () => {
  return (
    <>
      <div className="flex justify-center text-center items-center py-10 w-full">
        <div className="relative w-full md:h-40">
            <img src={clouds} alt="" className="absolute z-0 object-cover w-full" />
          <div className="text-3xl relative z-40 md:text-[2.25rem] font-bold text-[#407BFF]">
            Why Choose Our Wxyz
          </div>
          <div className="text-3xl relative z-40  md:text-[2.25rem] font-bold text-[#407BFF]">
            {" "}
            Management Software
          </div>
        </div>
      </div>
      <div className="relative z-40">
        <div className="Team-made pl-6 px-4 md:px-24 lg:px-36 pb-20">
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="sm:w-1/2 mt-5 md:mt-0 order-2 sm:order-1">
              <div className="text-3xl md:text-4xl pb-6 font-semibold text-blue-500">
                Teamwork Made Easier
              </div>
              <div className="text-xl">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-2 flex sm:justify-end justify-center">
              <img
                src={hands}
                className="w-64 md:w-96 sm:float-right"
                alt="hands"
              />
            </div>
          </div>
        </div>

        <div className="Team-made pl-6 px-4 md:px-24 lg:px-36">
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="sm:w-1/2 mt-5 md:mt-0 order-2 sm:order-2">
              <div className="text-3xl md:ml-5 md:text-4xl pb-6 font-semibold text-blue-500">
                Budget Friendly
              </div>
              <div className="text-xl md:ml-5">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-1 flex sm:justify-start justify-center">
              <img
                src={pig}
                className="w-64 md:w-96  sm:float-left"
                alt="hands"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-40 mt-20">
        
        <div className="Team-made pl-6 px-4 md:px-24 lg:px-36 pb-20">
        <img
          className="absolute z-10  object-cover top-28 left-0 w-54"
          src={plant}
          alt="plant"
        />
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="sm:w-1/2 mt-5 md:mt-0 order-2 sm:order-1">
              <div className="text-3xl md:text-4xl pb-6 font-semibold text-blue-500">
                Higher sales productivity from all your teams
              </div>
              <div className="text-xl">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-2 flex sm:justify-end justify-center">
              <img
                src={house}
                className="w-64 md:w-96 sm:float-right"
                alt="hands"
              />
            </div>
          </div>
        </div>
        
        <div className="Team-made pl-6 px-4 md:px-24 lg:px-36">
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="sm:w-1/2 mt-5 md:mt-0 order-2 sm:order-2">
              <div className="text-3xl md:text-4xl pb-6 font-semibold text-blue-500">
                Grows as Your Business Grows
              </div>
              <div className="text-xl">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-1 flex sm:justify-start justify-center">
              <img
                src={cash}
                className="w-64 md:w-96  sm:float-left"
                alt="hands"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <div className="Team-made z-50 pl-6 px-4 md:px-24 lg:px-36 pb-20">
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="sm:w-1/2 mt-5 md:mt-0 order-2 sm:order-1">
              <div className="text-3xl md:text-4xl pb-6 font-semibold text-blue-500">
                From leads to successful sales
              </div>
              <div className="text-xl">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit Neque porro quisquam est qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-2 flex sm:justify-end justify-center">
              <img
                src={map}
                className="w-64 md:w-96 sm:float-right"
                alt="hands"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute z-10  object-cover left-0 top-28 w-54"
          src={plant}
          alt="plant"
        />
        <div className="Team-made pl-6 px-4 md:px-24 lg:px-36 pb-20">
          <div className="w-full flex flex-wrap justify-center items-center">
            <div className="sm:w-1/2 mt-5 md:mt-0 order-2 sm:order-2">
              <div className="text-3xl md:ml-5 md:text-4xl pb-6 font-semibold text-blue-500">
                Best Support which you desire for
              </div>
              <div className="text-xl md:ml-5">
                If you are looking for the best support, you have come to the
                right place. We are here to provide you with the assistance you
                need.
              </div>
            </div>
            <div className="sm:w-1/2 order-1 sm:order-1 flex sm:justify-start justify-center">
              <img
                src={people}
                className="w-64 md:w-96  sm:float-left"
                alt="hands"
              />
            </div>
            <img
          className="absolute z-10  object-cover transform scale-x-[-1] bottom-10 right-0 w-54"
          src={plant}
          alt="plant"
        />
          </div>
          
        </div>
        
      </div>
      
      <div className="flex justify-center mb-10">
      <button className="bg-[#534AEC] flex justify-center items-center gap-3 text-white p-5 rounded-md mt-8">Try It Now <FaArrowCircleRight /></button>

      </div>
    </>
  );
};

export default Team;
