import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <section>
      <div className="flex justify-between items-center h-24 mx-auto px-8 text-black bg-white shadow-md">
        <h1 className="w-full text-3xl font-bold">Steven Li</h1>
        <ul className="hidden md:flex md:text-xl md:font-medium">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
          <li className="p-4">Projects</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="flex left-[90%] md:hidden">
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
            className="flex justify-end mt-[33px] mr-[30px]"
          >
            <AiOutlineClose size={30} />
          </div>
          <div className="flex h-5/6 justify-center items-center">
            <ul className="mt-10">
              <li className="p-4 text-2xl text-center font-medium">Home</li>
              <li className="p-4 text-2xl text-center font-medium">About</li>
              <li className="p-4 text-2xl text-center font-medium">Projects</li>
              <li className="p-4 text-2xl text-center font-medium">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
