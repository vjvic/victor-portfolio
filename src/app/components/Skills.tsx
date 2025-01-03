import React from "react";
import { HoverEffect } from "./ui/CardHover";
<<<<<<< HEAD
import { FaCss3, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
=======
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
>>>>>>> master

const skillsData = [
  { id: 1, title: "HTML", icons: <FaHtml5 /> },
  { id: 2, title: "CSS", icons: <FaCss3 /> },
  { id: 3, title: "JavaScript", icons: <FaJs /> },
  { id: 4, title: "ReactJS", icons: <FaReact /> },
  { id: 5, title: "NextJS", icons: <SiNextdotjs /> },
<<<<<<< HEAD
  { id: 6, title: "Java", icons: <FaJava /> },
=======
  { id: 6, title: "TypeScript", icons: <SiTypescript /> },
>>>>>>> master
];

const Skills = () => {
  return (
<<<<<<< HEAD
    <section className="py-20  mx-auto">
=======
    <section className="py-20  mx-auto" id="skills">
>>>>>>> master
      <h2 className="heading">
        My <span className="text-purple">Skills</span>
      </h2>

      <HoverEffect items={skillsData} />
    </section>
  );
};

export default Skills;
