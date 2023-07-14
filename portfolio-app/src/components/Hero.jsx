import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { languages } from "../data";
import { Tooltip } from "react-tooltip";

const Hero = () => {
  return (
    <section className="text-black lg:min-h-screen lg:flex lg:flex-col lg:justify-center">
      <div className="max-w-[1000px] w-10/12 h-full pt-[166px] mx-auto flex justify-center flex-col text-center lg:flex-row lg:items-center">
        <div className="order-1 lg:order-2 mx-auto mb-7">
          <div
            className="profile-picture w-[250px] h-[250px] sm:min-w-[300px] sm:min-h-[300px] md:min-w-[350px] md:min-h-[350px] border-2 border-[#121212] dark:border-[#e0e0e0]"
            title="Picture of Me!"
          ></div>
        </div>
        <div className="order-2 lg:order-1 lg:mr-20">
          <h1 className=" text-2xl sm:text-3xl md:text-4xl font-bold pb-6">
            Software Engineering Student 👋
          </h1>
          <p className="sm:text-lg md:text-xl text-gray-600">
            Hi, I'm Steven Li. A passionate software engineering student with a
            knack for programming and problem-solving. Explore my projects to
            see my skills and let's connect to discuss exciting opportunities.
          </p>
          <div className="text-4xl flex justify-center gap-5 py-6 dark:text-[#e0e0e0]">
            <a
              href="https://www.linkedin.com/in/steven-li-/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="transition ease-in-out hover:text-[#89CFF0] hover:duration-300" />
            </a>
            <a
              href="https://github.com/StevenNZ"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="transition ease-in-out hover:text-[#89CFF0] hover:duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] w-10/12 h-full pb-[106px] pt-[50px] mx-auto flex justify-center flex-col text-center lg:flex-row lg:items-center lg:justify-start">
        <div className="w-full flex justify-center lg:w-auto">
          <h2 className="text-xl w-36 pb-2 border-b-2 border-gray-300 lg:border-0 lg:mr-4 dark:border-gray-600">
            Technical Skills
          </h2>
        </div>
        <ul className="flex flex-wrap justify-center py-2">
          {languages.map((language, index) => {
            return (
              <li
                className="m-2 p-4 rounded-full bg-white shadow-2xl dark:bg-gray-700 transition ease-in-out hover:scale-125 hover:duration-300"
                key={index}
                data-tooltip-id={index + 1}
                data-tooltip-content={language.lang}
              >
                <img
                  src={language.image}
                  alt={language.lang}
                  className="w-[40px] h-[40px]"
                />
                <Tooltip id={index + 1} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Hero;
