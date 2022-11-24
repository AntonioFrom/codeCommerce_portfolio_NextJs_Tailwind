import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import navLogo from "../public/assets/navLogo.png"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={navLogo}
            alt="/"
            width="125"
            height="50"
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex z-[100]"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link href="/resume">
            <li className='ml-10 text-sm uppercase hover:border-b'>
                Resume
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden"  style={{ color: `${linkColor}`}}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full ">
              <Link href="/">
                <Image
                  src={navLogo}
                  alt="/"
                  width="87"
                  height="35"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let`s bulid together</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/anton-hai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg stroke-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillLinkedin />
                  </div>
                </a>
                <a
                  href="https://github.com/AntonioFrom"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg stroke-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <AiFillGithub />
                  </div>
                </a>
                <Link href="/#contact">
                <div onClick={() => setNav(!nav)} className="rounded-full shadow-lg stroke-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div></Link>
                <Link href="/resume">
                <div onClick={() => setNav(!nav)} className="rounded-full shadow-lg stroke-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
