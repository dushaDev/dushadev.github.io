"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";

const images = [
  '/pics/pic1.jpg',
  '/pics/pic2.jpg',
  '/pics/pic3.jpg',
];
export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out

      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true); // Start fade-in
      }, 500); // Delay before changing the image
    }, 15000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      className="relative flex items-center justify-center h-screen text-white md:px-20 lg:px-20"
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 slide-in-left">
          <h2 className="text-4xl font-light">Hey,</h2>
          <h1 className="text-5xl font-semibold mt-2">
            I’m <span className="text-primary">Dushan</span>
          </h1>
          <p className="text-4xl mt-3">Undergraduate in Software Engineering</p>

          <button className="mt-7 px-6 py-2 bg-secondary text-primary hover:bg-primary hover:text-secondary  font-semibold rounded-sm shadow-md transition">
            Get CV
          </button>

          <div className="justify-center flex space-x-4 mt-7 sm:justify-center md:justify-start lg:justify-start">
            <Link href="https://github.com/dushaDev" target="_blank" className="text-primary hover:text-white text-3xl">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/dushan-beligala-360252196/" target="_blank" className="text-primary hover:text-white text-3xl">
              <FaLinkedin />
            </Link>
            <Link href="https://web.facebook.com/byDushana/" target="_blank" className="text-primary hover:text-white text-3xl">
              <FaFacebook />
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center hover:scale-101 transition-transform duration-300 slide-in-right">
          <div className="w-44 h-44 md:w-72 md:h-72 border-4 border-primary rounded-full overflow-hidden">
            <Image
              src={images[currentImage]}
              alt="Dushan"
              width={280}
              height={280}
              key={currentImage}
              className={` object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
