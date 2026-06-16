"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Logo from "@/components/Logo/Logo";

export default function Footer() {
  return (
    <footer className="top-2 left-0 w-full bg-white border-t border-slate-100 p-4 py-6 relative">
      <div className="flex flex-col items-center">
        {/* logo text in black */}
        <Logo className="text-xl my-2" />
        <div className="justify-center flex space-x-4 mt-2">
          <Link
            href="https://github.com/dushaDev"
            target="_blank"
            className="text-primary text-2xl hover:text-slate-700 transition-colors duration-200"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dushan-madushanka-360252196"
            target="_blank"
            className="text-primary text-2xl hover:text-slate-700 transition-colors duration-200"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://web.facebook.com/byDushan"
            target="_blank"
            className="text-primary text-2xl hover:text-slate-700 transition-colors duration-200"
          >
            <FaFacebook />
          </Link>
        </div>
        <p className="text-xs text-slate-400 font-medium my-4">
          Copyright © DushaDev - All Rights Reserved
        </p>
      </div>
      <a
        href="#home"
        className="absolute top-4 right-6 text-slate-400 hover:text-primary transition-colors duration-200"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp size={28} />
      </a>
    </footer>
  );
}
