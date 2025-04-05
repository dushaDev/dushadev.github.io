"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="top-2 left-0 w-full bg-on-background p-4 shadow-[0_-4px_15px_6px_rgba(0,0,0,0.1)] py-5 relative">
      <div className="flex flex-col items-center">
        <h2 className="text-white text-xl font-light my-3">
          <span className="text-primary">{"{ "}</span>Dusha
          <span className="font-bold">
            <span className="text-primary">{"D"}</span>ev
          </span>
          <span className="text-primary">{" }"}</span>
        </h2>
        <div className="justify-center flex space-x-4 mt-3 sm:justify-center md:justify-start lg:justify-start">
          <Link
            href="https://github.com/dushaDev"
            target="_blank"
            className="text-primary text-3xl hover:text-white  transition-colors duration-200 ease-in-out"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dushan-madushanka-360252196"
            target="_blank"
            className="text-primary text-3xl hover:text-white transition-colors duration-200 ease-in-out"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://web.facebook.com/byDushan"
            target="_blank"
            className="text-primary text-3xl hover:text-white transition-colors duration-200 ease-in-out"
          >
            <FaFacebook />
          </Link>
        </div>
        <p className="text-sm text-gray-400 font-medium my-6">
          Copyright © DushaDev - All Rights Reserved
        </p>
      </div>
      <a
        href="#home"
        className="absolute top-4 right-6 text-white text-4xl hover:text-primary transition-colors duration-200 ease-in-out"
      >
        <IoIosArrowUp />
      </a>
    </footer>
  );
}
