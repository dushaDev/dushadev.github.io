"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);

const images = ["/pics/pic0.webp", "/pics/pic1.jpg", "/pics/pic2.jpg", "/pics/pic3.jpg"];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const containerRef = useRef(null);

  const textRef = useRef(null);
  const phases = [
    "Undergraduate in Software Engineering",
    "Full Stack Developer",
    "UI/UX Enthusiast",
  ];

  useEffect(() => {
    let currentIndex = 0;
    if (!textRef.current) return;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    function animate() {
      // Loop through phases
      phases.forEach((text) => {
        tl.to(textRef.current, {
          duration: 1,
          text: text,
          ease: "none",
        })
          .to({}, { duration: 2 }) // Wait
          .to(textRef.current, {
            duration: 0.5,
            text: "",
            ease: "none",
          });
      });
    }

    animate();

    return () => tl.kill();
  }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen text-white md:px-20 lg:px-20 overflow-hidden"
      ref={containerRef}
    >
      {/* Background Planet Glow (CSS) - Removed as per request */}
      {/* <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-[-1]"></div> */}

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10">
        <div className="text-center md:text-left md:w-3/5 mt-10 md:mt-0" ref={leftRef}>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
              DUSHAN
            </span>
            <br />
            <span className="text-white">MADUSHANKA</span>
          </h1>

          <div className="h-10">
            <p className="text-xl md:text-2xl text-gray-400 font-mono">
              &gt; <span ref={textRef}></span><span className="animate-pulse">|</span>
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/1n--ewgHiY6CKVkJFCJv0YEMcbYIDVX6a/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(255,112,55,0.4)] transition-all duration-300 transform hover:scale-105">
                Download CV
              </button>
            </a>
            <Link href="#contact">
              <button className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white font-bold rounded-full backdrop-blur-sm transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </div>

          <div className="flex space-x-6 mt-12 justify-center md:justify-start">
            <Link
              href="https://github.com/dushaDev"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dushan-madushanka-360252196"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link
              href="https://web.facebook.com/byDushana"
              target="_blank"
              className="text-gray-400 hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <FaFacebook size={32} />
            </Link>
          </div>
        </div>

        <div
          className="md:w-2/5 flex justify-center relative"
          ref={rightRef}
        >
          {/* Floating Astronaut/Image Container */}
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Image Glow Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-purple-600/40 blur-[60px] rounded-full animate-pulse"></div>

            {/* Rotating rings */}
            <div className="absolute inset-[-20px] border border-primary/30 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute inset-[-40px] border border-white/10 rounded-full animate-spin-reverse pointer-events-none"></div>

            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/50 shadow-[0_0_50px_rgba(255,112,55,0.3)] relative z-10">
              <Image
                src={images[0]}
                alt="Dushan"
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"
                  }`}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
        <span className="text-sm tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
