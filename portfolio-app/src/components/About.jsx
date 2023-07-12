import React from "react";
import picture from "../assets/aboutpicture.svg";
import Typed from "react-typed";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-[1000px] w-10/12 h-full py-28 mx-auto flex justify-center flex-col text-left lg:flex-row lg:items-center">
        <img
          src={picture}
          alt="Steven Li"
          className="w-[400px] mx-auto object-contain"
        />
        <div className="lg:ml-12">
          <p className=" text-xl text-center sm:text-3xl md:text-4xl font-bold py-6 lg:text-start">
            About Me 👨‍💻
          </p>
          <div className="text-gray-700">
            <p>
              Based in Auckland, New Zealand, I'm a penultimate-year software
              engineering student passionate about pursuing a career as a
              full-stack developer. With a strong foundation in software
              engineering principles and a drive for continuous learning, I'm
              dedicated to honing my skills and utilising the latest
              technologies. Some well versed technical skills I possess are
              Java, React, and Javascript as shown in my projects. I'm eager to
              contribute to the tech industry and make a positive impact through
              my work.
            </p>
            <p className="pt-4">
              Some of my hobbies are{" "}
              <Typed
                strings={[
                  "Weightlifting 🏋️‍♂️",
                  "Travelling ✈️",
                  "Bouldering 🧗‍♂️",
                  "Video Games 🎮",
                  "Anime 🖥️",
                  "Badminton 🏸",
                  "Basketball 🏀",
                ]}
                typeSpeed={70}
                backSpeed={50}
                backDelay={1000}
                loop
                className=" font-medium"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
