import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiSunFill } from "react-icons/ri";
import { HashLink as Link } from "react-router-hash-link";
import { links } from "../data";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [nav, setNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-300 z-10 ${
        visible
          ? "opacity-100"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="flex fixed justify-between items-center h-24 w-full mx-auto px-8 text-black bg-white shadow-md dark:bg-[#212121] dark:text-[#e0e0e0] dark:border-b-[1px] dark:border-[#00000093]">
        <h1 className="w-auto text-3xl font-bold mr-8 tracking-wider">
          Steven Li
        </h1>
        {!darkMode ? (
          <BsFillMoonStarsFill
            className="text-2xl ml-auto md:mr-auto md:ml-0 cursor-pointer transition ease-in-out hover:scale-125 hover:text-[#7c85a8] hover:duration-300"
            onClick={toggleDarkMode}
          />
        ) : (
          <RiSunFill
            className="text-3xl ml-auto md:mr-auto md:ml-0 text-white cursor-pointer transition ease-in-out hover:scale-125 hover:text-[#fdb813] hover:duration-300"
            onClick={toggleDarkMode}
          />
        )}
        <ul className="hidden md:flex md:text-xl md:font-medium">
          {links.map((link, index) => {
            return (
              <li key={index} className="p-4">
                <Link
                  smooth
                  to={link.id}
                  className="transition ease-in-out hover:text-[#89CFF0] hover:duration-300"
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div onClick={handleNav} className="flex left-[90%] md:hidden ml-8">
          <AiOutlineMenu
            size={30}
            className="cursor-pointer transition ease-in-out hover:scale-125 hover:text-[#89CFF0] hover:duration-300"
          />
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-full h-full bg-white ease-in-out duration-500 md:hidden dark:bg-[#121212]"
              : "fixed left-[-100%] top-0 w-full h-full ease-in-out duration-500 md:hidden"
          }
        >
          <div
            onClick={handleNav}
            className="flex justify-end mt-[33px] mr-[30px]"
          >
            <AiOutlineClose
              size={30}
              className="cursor-pointer transition ease-in-out hover:scale-125 hover:text-[#b65c5c] hover:duration-300"
            />
          </div>
          <div className="flex h-5/6 justify-center items-center">
            <ul className="mt-10">
              <li
                className="p-4 text-2xl text-center font-medium"
                onClick={handleNav}
              >
                <Link smooth to="#home">
                  Home
                </Link>
              </li>
              <li
                className="p-4 text-2xl text-center font-medium"
                onClick={handleNav}
              >
                <Link smooth to="#about">
                  About
                </Link>
              </li>
              <li
                className="p-4 text-2xl text-center font-medium"
                onClick={handleNav}
              >
                <Link smooth to="#projects">
                  Projects
                </Link>
              </li>
              <li
                className="p-4 text-2xl text-center font-medium"
                onClick={handleNav}
              >
                <Link smooth to="#contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
