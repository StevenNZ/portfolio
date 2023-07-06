import React from "react";
import picture from "../assets/aboutpicture.svg";

const About = () => {
  return (
    <div className="max-w-[1000px] mt-[-120px] w-full h-screen mx-auto flex justify-center flex-col text-center lg:flex-row lg:items-center ">
      <img
        src={picture}
        alt="Steven Li"
        className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] mx-auto"
      />
      <div className="lg:mr-16">
        <p className=" text-xl sm:text-3xl md:text-4xl font-bold pb-6">
          About Me 👨‍💻
        </p>
        <p className="sm:text-lg md:text-xl text-gray-700">
          Based in Auckland, New Zealand, I'm a penultimate-year software
          engineering student passionate about pursuing a career as a full-stack
          developer. As an enthusiastic individual, I thrive on problem-solving
          and constructing solutions that benefit others. With a strong
          foundation in software engineering principles and a drive for
          continuous learning, I am dedicated to honing my skills and utilising
          the latest technologies. Some well versed technical skills I possess
          are Java, React, and Javascript as displayed in the projects section.
          I am eager to contribute to the tech industry and make a positive
          impact through my work.
        </p>
      </div>
    </div>
  );
};

export default About;
