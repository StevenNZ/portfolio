import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { projectLists } from "../data";

const Projects = () => {
  return (
    <div className="max-w-[1200px] w-full h-full mx-auto flex justify-center flex-col text-center">
      <h1 className="text-xl text-center sm:text-3xl md:text-4xl font-bold pb-10">
        Projects
      </h1>

      {projectLists.map((project, index) => {
        const { id, name, github, image, desc, lang } = project;
        return (
          <div key={id} className="mb-24 lg:flex lg:flex-row lg:items-center">
            <img
              src={image}
              alt={name}
              className={`mb-3 w-[350px] sm:w-[400px] md:w-[450px] max-w-[450px] mx-auto ${
                id % 2 === 1 ? "order-2" : ""
              }`}
            />
            <div className=" lg:w-4/12 lg:mx-auto">
              <h2 className="font-bold text-lg md:text-xl mb-3">{name}</h2>
              <p className="mb-3 text-gray-700 md:text-xl">{desc}</p>
              <LanguageList languages={lang} />
              <div className="flex justify-center text-5xl">
                <a href={github} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const LanguageList = ({ languages }) => {
  return (
    <div className="flex justify-center mb-3 md:text-xl">
      {languages.map((lang) => (
        <p key={lang} className="mx-4 font-medium">
          {lang}
        </p>
      ))}
    </div>
  );
};

export default Projects;
