import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { projectLists } from "../data";

const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1000px] w-9/12 h-full mx-auto pt-24 flex justify-center items-center flex-col text-center lg:w-10/12">
        <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold pb-10 md:pb-16">
          Projects 🐱‍💻
        </h1>

        {projectLists.map((project) => {
          const { id, name, github, image, desc, lang } = project;
          return (
            <div
              key={id}
              className="bg-white mb-24 p-5 rounded-2xl shadow-2xl lg:flex lg:flex-row lg:items-center w-full max-w-[550px] lg:max-w-full dark:bg-[#212121]"
            >
              <img
                src={image}
                alt={name}
                className={`mb-3 lg:mb-0 lg:w-[450px] mx-auto ${
                  id % 2 === 1 ? "order-2" : ""
                }`}
              />
              <div className=" lg:w-4/12 lg:mx-auto">
                <h2 className="font-bold text-lg md:text-xl mb-3">{name}</h2>
                <p className="mb-3 text-gray-700 md:text-xl">{desc}</p>
                <LanguageList languages={lang} />
                <div className="flex justify-center text-5xl dark:text-[#e0e0e0] transition ease-in-out hover:scale-125 hover:duration-300">
                  <a href={github} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const LanguageList = ({ languages }) => {
  return (
    <div className="flex justify-center mb-3 md:text-xl">
      {languages.map((lang) => (
        <h3 key={lang} className="mx-4 font-medium">
          {lang}
        </h3>
      ))}
    </div>
  );
};

export default Projects;
