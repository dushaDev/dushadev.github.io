"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="relative flex items-center justify-center min-h-screen py-16 bg-white md:px-20 lg:px-20">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl md:text-5xl font-black mb-12 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
            ABOUT ME
          </span>
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-orange-500/5 blur-[30px] z-0"></div>

            <div className="w-64 h-64 md:w-72 md:h-72 rounded-lg overflow-hidden border border-slate-200 shadow-md z-10 relative bg-white">
              <Image
                src="/pics/pic1.jpg"
                alt="Dushan"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-2xl font-bold text-slate-800">Hey there! 👋</p>
            <p className="text-lg mt-4 text-slate-600 leading-relaxed">
              I&apos;m <span className="text-primary font-semibold">Dushan Madushanka</span>, a dedicated{" "}
              <span className="text-primary font-semibold">Mobile Application Developer</span> and Software Engineering undergraduate. I specialize in building high-quality, performant, and user-friendly mobile experiences.
            </p>
            <p className="text-lg mt-4 text-slate-600 leading-relaxed">
              My core focus is on cross-platform and native mobile architectures (specifically <span className="text-primary font-semibold">Flutter</span> and <span className="text-primary font-semibold">Android</span>), integrating APIs, and building modern designs. When I&apos;m not writing code, you&apos;ll find me playing the <span className="text-primary">guitar</span> or exploring new music.
            </p>
            <p className="text-lg mt-4 text-slate-600 leading-relaxed">
              Always curious and eager to learn, I enjoy turning complex problems into elegant, simple digital solutions.
            </p>
            <p className="text-lg mt-6 font-semibold text-slate-700">
              Let&apos;s build something awesome together! 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
