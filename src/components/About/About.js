"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {

        // Animation for left element
        gsap.fromTo(
          aboutRef.current,
          { y: "5%", scale: 0.8, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "top 20%",
              scrub: 0.6,
              markers: false,
            },
          }
        );
    
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    // // Animation for left element(Image)
    // gsap.fromTo(
    //   leftRef.current,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     ease: "power3.in",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top 60%",
    //       end: "top 20%",
    //       scrub: 0.6,
    //       markers: false,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   leftRef.current,
    //   { opacity: 1 },
    //   {
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "bottom 80%",
    //       end: "bottom 30%",
    //       scrub: 0.6,
    //       markers: false,
    //     },
    //   }
    // );

    // // Animation for right element(Text)
    // gsap.fromTo(
    //   rightRef.current,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     ease: "power3.in",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top 60%",
    //       end: "top 20%",
    //       scrub: 0.6,
    //       markers: false,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   rightRef.current,
    //   { opacity: 1 },
    //   {
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "bottom 80%",
    //       end: "bottom 30%",
    //       scrub: 0.6,
    //       markers: false,
    //     },
    //   }
    // );

    // // Animation for right element(Text)
    // //open
    // gsap.fromTo(
    //   rightRef.current,
    //   { x: "50%", y: "-10%", opacity: 0 },
    //   {
    //     x: 0,
    //     y: 0,
    //     opacity: 1,
    //     duration: 1,
    //     ease: "power3.in",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top 100%",
    //       end: "top 20%",
    //       scrub: 0.6,
    //       markers: false,
    //     },
    //   }
    // );
    // //close
    // gsap.fromTo(
    //   rightRef.current,
    //   { x: 0, y: 0, opacity: 1 },
    //   {
    //     x: "50%",
    //     y: "10%",
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power3.in",
    //     scrollTrigger: {
    //       trigger: containerRef.current,
    //       start: "top 0%",
    //       end: "bottom 30%",
    //       scrub: 0.6,
    //       markers: false,
    //     },
    //   }
    // );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center h-screen md:px-20 lg:px-20"
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold mb-10">ABOUT</h2>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center"ref={aboutRef}>
          {/* Image Section */}
          <div
            className="w-full md:w-1/3 flex justify-center md:justify-start hover:scale-101 transition-transform duration-300"
          
          >
            <div className="w-70 h-70 rounded-sm overflow-hidden border-2 border-primary shadow-lg">
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
          <div
            className="w-full md:w-2/3 text-center md:text-left mt-10 mb-10 md:mt-0 md:ml-10 "
          >
            <p className="text-3xl font-semibold mt-4">Hey</p>
            <p className="text-xl mt-2">
              there! I&apos;m a{" "}
              <span className="text-primary">Software Engineering</span>{" "}
              undergraduate who loves coding, creativity, and problem-solving.
              When I&apos;m not immersed in tech, you&apos;ll find me enjoying{" "}
              <span className="text-primary">music</span> —either listening to
              my favorite songs or playing the{" "}
              <span className="text-primary">guitar</span>.
            </p>
            <p className="text-xl mt-4">
              I have a thing for the color{" "}
              <span className="text-blue-400">Blue</span> (calm and cool, just
              like my approach to life!). Always{" "}
              <span className="text-primary">curious</span> and eager to learn,
              I&apos;m passionate about turning ideas into meaningful digital
              experiences.
            </p>
            <p className="text-xl mt-4">
              Let&apos;s build something awesome together! 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
