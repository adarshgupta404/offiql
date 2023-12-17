import React, { useState } from 'react';
import { FaAlignRight } from "react-icons/fa6";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-5 md:py-7 md:rounded-md md:mx-6 lg:mx-20 bg-white shadow md:shadow-none md:flex md:items-center md:justify-between md:p-5 md:mt-10 ">
      <div className="flex justify-between items-center">
        <span className="text-2xl lg:text-4xl font-semibold text-blue-500 cursor-pointer">
          Facebook
        </span>

        <span className="text-3xl text-blue-500 cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
          {menuOpen ? <div><FaAlignRight/></div> : <div name="menu"><FaAlignRight/></div>}
        </span>
      </div>

      <ul className={`md:flex md:items-center z-[999] pb-4 md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 ${menuOpen ? 'opacity-100' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500`}>
        <li className="mx-4 my-6 md:my-0 text-gray-400 ">
          <button className="text-xl md:text-base lg:text-xl focus:text-black hover:text-black duration-500">Products</button>
        </li>
        <li className="mx-4 my-6 md:my-0 text-gray-400">
          <button className="text-xl md:text-base lg:text-xl focus:text-black hover:text-black duration-500">Solution</button>
        </li>
        <li className="mx-4 my-6 md:my-0 text-gray-400">
          <button className="text-xl md:text-base lg:text-xl focus:text-black hover:text-black duration-500">Industries</button>
        </li>
        <li className="mx-4 my-6 md:my-0 text-gray-400">
          <button className="text-xl md:text-base lg:text-xl focus:text-black hover:text-black duration-500">Pricing</button>
        </li>
        <li className="mx-4 my-6 md:my-0 text-gray-400 ">
          <button className="text-xl md:text-base lg:text-xl focus:text-black hover:text-black duration-500">Resource</button>
        </li>

        <button className="block md:hidden bg-[#534AEC] text-white duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
          Book a Demo
        </button>
        <h2 className=""></h2>
      </ul>
      <button className="hidden md:block text-xm lg:text-xl bg-[#534AEC] text-white  duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
          Book a Demo
        </button>
    </nav>
  );
};

export default Navbar;
