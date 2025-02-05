import React from "react";
import { HoverEffect } from "./ui/CardHover";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const skillsData = [
  { id: 1, title: "HTML", icons: <FaHtml5 /> },
  { id: 2, title: "CSS", icons: <FaCss3 /> },
  { id: 3, title: "JavaScript", icons: <FaJs /> },
  { id: 4, title: "ReactJS", icons: <FaReact /> },
  { id: 5, title: "NextJS", icons: <SiNextdotjs /> },
  { id: 6, title: "TypeScript", icons: <SiTypescript /> },
];

const Skills = () => {
  return (
    <section className="py-20  mx-auto" id="skills">
      <h2 className="heading">
        My <span className="text-purple">Skills</span>
      </h2>

      <HoverEffect items={skillsData} />
    </section>
  );
};

export default Skills;
