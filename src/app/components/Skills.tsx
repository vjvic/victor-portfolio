import React from "react";
import { GlareCard } from "./ui/GlareCard";

const Skills = () => {
  return (
    <section className="py-20">
      <h2 className="heading">
        My <span className="text-purple">Skills</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4  mt-10 ">
        {[
          { id: 1, title: "test" },
          { id: 2, title: "test" },
          { id: 2, title: "test" },
          { id: 2, title: "test" },
          { id: 2, title: "test" },
          { id: 2, title: "test" },
        ].map((item) => (
          <GlareCard
            className="flex flex-col items-center justify-center"
            key={item.id}
          >
            <svg
              width="66"
              height="65"
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-white"
            >
              <path
                d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
                stroke="currentColor"
                strokeWidth="15"
                strokeMiterlimit="3.86874"
                strokeLinecap="round"
              />
            </svg>
          </GlareCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
