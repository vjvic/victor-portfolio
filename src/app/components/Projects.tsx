import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3dCard";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Anivault",
    desc: `Anivault is an anime website built with JikanAPI, Next.js, TypeScript,Tailwind CSS, ShadCN, and React Query.
     It allows users to browse and track anime content with a clean, responsive design. I created this project
      to enhance my skills in frontend development and API integration.`,
    githubLink: "https://github.com/vjvic/anivault ",
    liveSite: "https://anivault-animesapp.vercel.app/ ",
    img: "/anivault-project.png",
  },
  {
    id: 2,
    title: "Talk2Translate",
    desc: `Talk2Translate is a small voice translation app built with Next.js, TypeScript, Tailwind CSS, and the OpenAI API. 
    It provides real-time voice translations with a responsive design. I created this app as part of my learning journey to improve my skills in AI integration and web development.`,
    githubLink: "https://github.com/vjvic/talk2translate/tree/main",
    liveSite: "https://talk2translate.vercel.app/",
    img: "/talk2translate-project.png",
  },
  {
    id: 3,
    title: "Portfolio",
    desc: `My Portfolio is a personal website built with Next.js, TypeScript, Tailwind CSS, and Aceternity UI. It showcases my work and projects, and I created it as part of my ongoing journey to improve my skills in web development and UI design.`,
    githubLink: "https://github.com/vjvic/talk2translate/tree/main",
    liveSite: "https://talk2translate.vercel.app/",
    img: "/portfolio-project.png",
  },
];

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <h2 className="heading">
        My <span className="text-purple">Projects</span>
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-20 mt-10">
        {projectsData.map((item) => (
          <CardContainer className="inter-var" key={item.id}>
            <CardBody
              className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
             dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.desc}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={item.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  <a href={item.liveSite}>Live site →</a>
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <a href={item.githubLink}>Github</a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
