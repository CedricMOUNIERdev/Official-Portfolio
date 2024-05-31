// @ts-nocheck
import React from "react";
import { SectionWrapper } from "../atom/SectionWrapper";
import { Project } from "./Project";

export const ProjectSection = () => {
  const projects = [
    {
      name: "APPLI COMPTA",
      partApplication: "Front-End",
      description: "Vue.js 3 (with TypeScript)",
      url: "https://github.com/CedricMOUNIERdev/AppliCompta-Front-End",
      homepageUrl: "https://github.com/CedricMOUNIERdev",
    },
    {
      name: "APPLI COMPTA",
      partApplication: "Back-End",
      description: "DotNet 7 (with C#)",
      url: "https://github.com/CedricMOUNIERdev/AppliCompta-Back-End",
      homepageUrl: "https://github.com/CedricMOUNIERdev",
    },
  ];

  return (
    <SectionWrapper title="Projects">
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
