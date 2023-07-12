import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import picture from "../assets/profilepicture.jpg";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[1000px] w-10/12 h-screen mx-auto flex justify-center flex-col text-center lg:flex-row lg:items-center">
        <img
          src={picture}
          alt="Steven Li"
          className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] mx-auto mb-7 border-2 border-black rounded-full order-1 lg:order-2"
        />
        <div className="order-2 lg:order-1 lg:mr-16">
          <p className=" text-2xl sm:text-3xl md:text-4xl font-bold pb-6">
            Software Engineering Student 👋
          </p>
          <p className="sm:text-lg md:text-xl text-gray-700">
            Hi, I'm Steven Li. A passionate software engineering student with a
            knack for programming and problem-solving. Explore my projects to
            see my skills and let's connect to discuss exciting opportunities.
          </p>
          <div className="text-5xl flex justify-center gap-5 pt-6">
            <a
              href="https://www.linkedin.com/in/steven-li-/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/StevenNZ"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
