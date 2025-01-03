import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3dCard";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Anivault",
    desc: "Hover over this card to unleash the power of CSS perspective",
  },
  {
    id: 2,
    title: "Talk2Translate",
    desc: "Hover over this card to unleash the power of CSS perspective",
  },
  {
    id: 3,
    title: "Portfolio",
    desc: "Hover over this card to unleash the power of CSS perspective",
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
                  src="/coding-about.svg"
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
                  Live site →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Github
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
