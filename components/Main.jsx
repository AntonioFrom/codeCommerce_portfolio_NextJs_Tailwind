import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest to-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 to-gray-700">
            Hi, I'm <span className="text-[#5651e5] uppercase">Anton </span>
          </h1>
          <h1 className="py-4 to-gray-700 ">A Front-End Web Developer</h1>
          <p className=" p-4 to-gray-600 max-w-[70%] m-auto">
            I'm front-end web developer specializing in build exceptional
            digital experiences. Currently, i'm focused on build responsive
            front-end web applications while learning back-end technologies.
          </p>
          <div className="flex items-center justify-center max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg stroke-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiFillLinkedin />
            </div>
            <div className="rounded-full shadow-lg stroke-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiFillGithub />
            </div>
            <div className="rounded-full shadow-lg stroke-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg stroke-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
