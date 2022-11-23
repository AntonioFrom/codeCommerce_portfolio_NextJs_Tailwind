import Image from "next/image";
import Link from "next/link";
import React from "react";
import projectImg1 from "../public/assets/projects/property.jpg";
import projectImg2 from "../public/assets/projects/crypto.jpg";
import projectImg3 from "../public/assets/projects/netflix.jpg";
import projectImg4 from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

export const Projects = () => {
  return (
    <div className="w-full ">
      <div className=" max-w-[1240px] mx-auto  px-2 py-16">
        <p className="uppercase tracking-widest text-[#5651e5] text-xl">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem title='Property Finder' backgroundImage={projectImg1} projectURL="/property/"/>
          <ProjectItem title='Crypto App' backgroundImage={projectImg2} projectURL="/crypto/"/>
          <ProjectItem title='Netflix App' backgroundImage={projectImg3} projectURL="/netflix/"/>
          <ProjectItem title='Twitch App' backgroundImage={projectImg4} projectURL="/twitch/"/>
        </div>
      </div>
    </div>
  );
};
export default Projects;
