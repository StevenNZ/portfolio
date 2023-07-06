import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 text-black">
      <h1 className="w-full text-3xl font-bold text-[#00df9b]">Steven Li</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="fixed left-[90%] md:hidden">
        <AiOutlineMenu size={30} />
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-full h-full bg-white ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] top-0 w-full h-full ease-in-out duration-500 md:hidden"
        }
      >
        <div
          onClick={handleNav}
          className="flex justify-end mt-[33px] mr-[20px]"
        >
          <AiOutlineClose size={30} />
        </div>
        <ul className="mt-10">
          <li className="p-4 text-2xl text-center">Home</li>
          <li className="p-4 text-2xl text-center">About</li>
          <li className="p-4 text-2xl text-center">Projects</li>
          <li className="p-4 text-2xl text-center">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
