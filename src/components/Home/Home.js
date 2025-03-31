"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Observer, ScrollToPlugin, TextPlugin);

const images = ["/pics/pic1.jpg", "/pics/pic2.jpg", "/pics/pic3.jpg"];
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 200); // Delay before changing the image
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rightRef.current,
      { opacity: 0 },
      {  duration: 1.5, opacity: 1, }
    );
    gsap.fromTo(
      leftRef.current,
      { x: "-100%", opacity: 0, scale: 0.8 },
      { x: 0, duration: 1, opacity: 1, scale: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen text-white md:px-20 lg:px-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 " ref={leftRef}>
          <h2 className="text-4xl font-light">Hey,</h2>
          <h1 className="text-5xl font-semibold mt-2">
            I&apos;m <span className="text-primary">Dushan</span>
          </h1>
          <p className="text-4xl mt-3">Undergraduate in Software Engineering</p>

          <a
            href="https://drive.google.com/file/d/1n--ewgHiY6CKVkJFCJv0YEMcbYIDVX6a/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-7 px-6 py-2 bg-secondary text-primary hover:bg-primary hover:text-secondary font-semibold rounded-sm shadow-md transition-colors duration-200 ease-in-out">
              Resume Here
            </button>
          </a>

          <div className="justify-center flex space-x-4 mt-7 sm:justify-center md:justify-start lg:justify-start">
            <Link
              href="https://github.com/dushaDev"
              target="_blank"
              className="text-primary text-3xl  hover:text-white  transition-colors duration-200 ease-in-out"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dushan-beligala-360252196/"
              target="_blank"
              className="text-primary text-3xl hover:text-white  transition-colors duration-200 ease-in-out"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://web.facebook.com/byDushana/"
              target="_blank"
              className="text-primary text-3xl hover:text-white  transition-colors duration-200 ease-in-out"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>

        <div
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center hover:scale-101 transition-transform duration-300 "
          ref={rightRef}
        >
          <div className="w-44 h-44 md:w-72 md:h-72 border-4 border-primary rounded-full overflow-hidden">
            <Image
              src={images[currentImage]}
              alt="Dushan"
              width={280}
              height={280}
              key={currentImage}
              className={` object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
