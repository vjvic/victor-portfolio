"use client";
import React from "react";
<<<<<<< HEAD
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import { FaLocationArrow, FaSmile } from "react-icons/fa";
import animationData from "@/data/laptop.json";
import Lottie from "react-lottie";
import { BackgroundBeams } from "./ui/BackGroundBeams";
=======
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Button from "./ui/Button";
import animationData from "@/data/laptop.json";
import Lottie from "react-lottie";
>>>>>>> master

const Hero = () => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="pb-20 pt-36">
      <div className="flex relative my-20 z-10 w-full justify-center items-center px-4">
        <div className=" flex flex-col ">
          <p className="uppercase tracking-widest text-xs  text-blue-100 max-w-80">
            Crafting Engaging User Experiences, One Pixel at a Time.
          </p>

          <TextGenerateEffect
            className=" text-[40px] md:text-5xl lg:text-6xl"
<<<<<<< HEAD
            words="Hi, I'm Victor I Build Interfaces That Users Love."
=======
            words="Hi, I’m Victor — a developer with 2 years of experience"
>>>>>>> master
          />

          <p className=" md:tracking-wider mb-10 text-sm md:text-lg lg:text-2xl">
            Let’s Build Something Amazing Together!
          </p>

<<<<<<< HEAD
          <a href="about">
            <Button title="About Me" otherClass="w-[200px]" />
=======
          <a href="#about">
            <Button title="About Me" otherClass="w-[150px]" />
>>>>>>> master
          </a>
        </div>

        <div className="w-full hidden md:block">
          <Lottie options={options} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
