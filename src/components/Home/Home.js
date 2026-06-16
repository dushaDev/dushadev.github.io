"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative flex items-center justify-center pt-6 pb-12 md:pt-32 md:pb-16 md:px-20 lg:px-20 overflow-hidden bg-background">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10 gap-12 max-w-6xl">
        {/* Bio Details */}
        <div className="text-center md:text-left md:w-3/5">
          <h2 className="text-lg md:text-xl font-light text-slate-500 mb-2">Hello, I'm</h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-tight mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 mr-2">
              DUSHAN
            </span>
            <span className="text-slate-900">MADUSHANKA</span>
          </h1>

          <div className="mb-6">
            <p className="text-lg md:text-xl text-primary font-bold font-mono">
              &gt; Mobile Application Developer
            </p>
          </div>

          <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4 max-w-xl mb-8">
            <p>
              I&apos;m a Software Engineering undergraduate specializing in building high-quality, performant, and user-friendly mobile experiences.
            </p>
            <p>
              My core focus lies in cross-platform and native mobile architectures, primarily <span className="text-primary font-semibold">Flutter</span>,<span className="text-primary font-semibold">React Native</span> and <span className="text-primary font-semibold">Android Native</span>. I love integrating APIs, designing sleek interfaces, and transforming complex problems into simple, elegant digital solutions.
            </p>

          </div>

          <div className="mt-8 flex flex-row flex-wrap items-center gap-6 justify-center md:justify-start">
            <div className="flex flex-row gap-4">
              <a
                href="https://drive.google.com/file/d/1n--ewgHiY6CKVkJFCJv0YEMcbYIDVX6a/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 text-sm">
                  Download CV
                </button>
              </a>
              <Link href="#contact">
                <button className="px-6 py-2.5 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold rounded-full transition-all duration-300 text-sm">
                  Contact Me
                </button>
              </Link>
            </div>

            <div className="flex space-x-5 items-center">
              <Link
                href="https://github.com/dushaDev"
                target="_blank"
                className="text-slate-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dushan-madushanka-360252196"
                target="_blank"
                className="text-slate-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://web.facebook.com/byDushana"
                target="_blank"
                className="text-slate-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
              >
                <FaFacebook size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-2/5 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
            <Image
              src="/pics/pic0.webp"
              alt="Dushan"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* Gradient fade on the bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent pointer-events-none rounded-b-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
