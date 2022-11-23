import React from "react";
import Image from "next/image";
export const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
            <p className="uppercase tracking-widest text-[#5651e5]">ABOUT</p>
            <h2 className="py-4">Who I am</h2>
            <p className="py-2 to-gray-600">
            Hi. My name is Anton Hai. I am 39 years old and I decided to change my life and become a web developer.
            </p>
            <p className="py-2 to-gray-600">
            "Starting life from scratch" is a very romanticized concept, but in fact, I had to put in a lot of effort to achieve the result. If you choose me as a programmer for your project or company, you will get an employee who knows how to achieve goals, is easily trained, has experience in various industries and professions. Download my resume in the contacts section. 
            </p>
            <p className="py-2 to-gray-600 underline cursor-pointer">
                Check out some of my latest project
            </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl stroke-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src="/assets/about.jpg"alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
