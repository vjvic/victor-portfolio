import React from "react";
import { WavyBackground } from "./ui/WavyBackground";
import Button from "./ui/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-40">
      <WavyBackground className="absolute max-w-4xl mx-auto pb-40 flex flex-col justify-center items-center gap-2 ">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Let&apos;s Build Something{" "}
          <span className="text-purple">Great Together</span>
        </p>

        <a href="mailto:victorsulit0@gmail.com" className="my-6">
<<<<<<< HEAD
          <Button title="Say Hello 👋" otherClass="w-[200px]" />
=======
          <Button title="Say Hello 👋" otherClass="w-[150px]" />
>>>>>>> master
        </a>

        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Victor Sulit Jr.
        </p>

        <div className="flex gap-5 text-2xl mt-3">
          <a
            href="https://github.com/vjvic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-sulit-jr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </WavyBackground>
    </footer>
  );
};

export default Footer;
