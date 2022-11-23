import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineArrowUp,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

export const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="m-auto max-w-[1240px] px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4"> Get in touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="w-full col-span-3 lg:col-span-2 h-full shadow-xl stroke-gray-400 rounded-xl p-4">
            <div className="h-full lg:p-4">
              {/* left */}
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="assets/contact.jpg"
                />
              </div>
              <div>
                <h2 className="py-2">Name here</h2>
                <p>Front-End developer</p>
                <p className="py-4">
                  I am availble for freelance or full-time position. Contact me
                  and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
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
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl stroke-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className=" uppercase text-sm py-2">Name</label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className=" uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className=" border-2 rounded-lg p-3 flex border-gray-300"
                      type="phone"
                    />
                  </div>
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Email</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Subject</label>
                  <input
                    className=" border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className=" flex flex-col py-2">
                  <label className=" uppercase text-sm py-2">Message</label>
                  <textarea
                    className=" border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <button className=" w-full text-gray-100 mt-4 p-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
          <div className=" flex justify-center   py-12">
            <Link href="/">
              <div className=" rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp className=" text-[#5651e5]" size={30} />
              </div>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Contact;
