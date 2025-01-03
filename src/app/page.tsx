import React from "react";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaCode, FaHome } from "react-icons/fa";
import Projects from "./components/Projects";
import { FaWebAwesome } from "react-icons/fa6";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const navItems = [
  { name: "Home", link: "#", icon: <FaHome /> },
  { name: "Projects", link: "#projects", icon: <FaWebAwesome /> },
  { name: "Skill", link: "#skills", icon: <FaCode /> },
];

const Home = () => {
  return (
    <main
      className="relative bg-black-100 flex justify-center 
    items-center flex-col overflow-hidden 
    mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
