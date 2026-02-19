"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { FaGithub, FaReact, FaJava, FaPython, FaPhp, FaDatabase, FaAndroid, FaFigma, FaBootstrap, FaFlask, } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiAdobeillustrator, SiAdobexd, SiFirebase, SiFlask } from "react-icons/si";
import { RiGeminiFill } from "react-icons/ri";
import { AiFillOpenAI } from "react-icons/ai";



import * as React from "react";
import Project from "./Project";


const projectData = [

  {
    time: "2025 june",
    tags: ['mobile',],
    name: "NSBM FindX",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_findx-flutterdev-firebase-activity-7333372453533949952-bDpc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    techStack: [{ name: "Flutter", icon: FaFlutter }, { name: "Gemini Vision", icon: RiGeminiFill }, { name: "Firebase", icon: SiFirebase }],
    description: "Navigating lost and found items on a busy campus can be challenging. FindX simplifies this process by providing a centralized, intelligent platform to report, browse, and ultimately, recover lost belongings.",
    image: "/projects/1748412229843.jpeg"
  },

  {
    time: "2025 feb",
    name: "Watch Queue",
    tags: ['mobile'],
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_flutter-mobiledevelopment-watchqueueapp-activity-7269761531381194752-e8dT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    techStack: [{ name: "Flutter", icon: FaFlutter }, { name: "Firebase", icon: SiFirebase }],
    description: "This is my latest project 'Watch Queue' Movies watchlist Mobile App with Flutter! This app is a great way to explore Flutter and improve my skills in mobile development.",
    image:
      "/projects/1733246194093.jpeg",
  },
  {
    time: "2024 nov",
    tags: ['design'],
    name: "Medi Care",
    link: "https://www.figma.com/design/mSOxN8wWpUgLVLJcWdd6dq/Pharmacy-MS---MediCare?node-id=187-105&t=fVQLMRvKv5z9AbYt-1",
    techStack: [
      { name: "Figma", icon: FaFigma },
    ],
    description:
      "Pharmacy management system mobile app UI design with Figma.",
    image: "/projects/pharmacy.jpg",
  },
  {
    time: "2024 may",
    tags: ['web'],
    name: "GPA Connect",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_python-mysql-bootstrap-activity-7159109776033947648-Yhoa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    techStack: [{ name: "Python", icon: FaPython }, { name: "Flask", icon: SiFlask }, { name: "chatgpt", icon: AiFillOpenAI }],
    description: "Collaborated on 'GPA connect' GPA Calculation web system Project with Python programming language based on Flask framework",
    image:
      "/projects/1706864751688.jpeg",
  },

];

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
