"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import * as React from "react";
import Project from "./Project";
import projectData from "@/data/projects.json";

export default function Projects() {
  const projRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    // Animation for left element
    gsap.fromTo(
      projRef.current,
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
  }, []);

  return (
    <section id="projects" className="relative flex flex-col items-center justify-center min-h-screen py-20 px-6" ref={containerRef}>
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-5xl md:text-6xl font-black mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
            PROJECTS
          </span>
        </h2>


        <div className="flex flex-wrap justify-center gap-6" ref={projRef}>
          {projectData.map((project, index) => (
            <Project
              key={index}
              project={project}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
