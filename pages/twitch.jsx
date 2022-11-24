import React from "react";
import Image from "next/image";
import projectImg1 from "../public/assets/projects/twitch.jpg";
import {IoMdRadioButtonOn} from "react-icons/io"
import Link from "next/link";

 const Twitch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] xl:h-[40vh] relative">
        <div className=" absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] xl:h-[40vh] bg-black/80 z-100">
          <Image
            className=" absolute z-[-1]"
            layout="fill"
            objectFit="cover"
            src={projectImg1}
            alt="/"
          />
          <div className=" absolute top-[70%] max-w-[1240px] z-10 p-2 text-white w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="py-2">Twitch app</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>
      </div>
      <div className=" max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
            This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted statically using Vercel.
            This is a mobile responsive recreation of Twitch.tv and features
            Next/Auth.js for authentication. Users may choose to be
            authenticated with either a Github account or a Google account. A
            few features to note with this project are lazy loading images using
            the Image component, built in routing, and Next/Auth Context.
            </p>
            <button className=" px-8 py-2 mt-4 mr-8  ">Demo</button>
            <button className=" px-8 py-2 mt-4 ">Code</button>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl stroke-gray-400">
            <div className=" p-2">
                <p className=" text-center font-bold pb-2">Technologies</p>
                <div className=" grid grid-cols-2 md:grid-cols-1">
                    <p className=" text-gray-600 py-2 flex items-center">
                        <IoMdRadioButtonOn className="pr-1"/> React
                    </p>
                    <p className=" text-gray-600 py-2 flex items-center">
                        <IoMdRadioButtonOn className="pr-1"/> Tailwind
                    </p>
                    <p className=" text-gray-600 py-2 flex items-center">
                        <IoMdRadioButtonOn className="pr-1"/> Javascript
                    </p>
                    <p className=" text-gray-600 py-2 flex items-center">
                        <IoMdRadioButtonOn className="pr-1"/> Github Auth
                    </p>
                    <p className=" text-gray-600 py-2 flex items-center">
                        <IoMdRadioButtonOn className="pr-1"/> Google Auth
                    </p>
                    <p className=" text-gray-600 py-2 flex items-center">
                        <IoMdRadioButtonOn className="pr-1"/> Next Auth
                    </p>
                </div>
            </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className=" underline cursor-pointer">Back</p>
      </Link>
    </div>
  );
};
export default Twitch;