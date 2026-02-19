"use client";

import { FaGithub, FaReact, FaJava, FaPython, FaPhp, FaDatabase, FaAndroid, FaFigma, FaBootstrap } from "react-icons/fa";
import { FaFlutter, FaGitAlt } from "react-icons/fa6";
import { SiAdobeillustrator, SiAdobexd, SiAdobephotoshop, SiFirebase } from "react-icons/si";


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import * as React from "react";
import VerticalTimelineCustom from "./VerticalTimeLineCustom";

const skills = [
  { name: "Flutter", altText: "flutter", icon: FaFlutter },
  { name: "React", altText: "react", icon: FaReact },
  { name: "Bootstrap", altText: "bootstrap", icon: FaBootstrap },
  { name: "Java", altText: "java", icon: FaJava },
  { name: "Git", altText: "git", icon: FaGitAlt },
  { name: "PHP", altText: "php", icon: FaPhp },
  { name: "Python", altText: "python", icon: FaPython },
  { name: "SQL", altText: "sql", icon: FaDatabase },
  { name: "Firebase", altText: "firebase", icon: SiFirebase },
  {
    name: "Android",
    altText: "android",
    icon: FaAndroid,
  },
  { name: "Figma", altText: "Figma", icon: FaFigma },
  { name: "XD", altText: "Adobe XD", icon: SiAdobexd },
  { name: "Photoshop", altText: "Photoshop", icon: SiAdobephotoshop },
  {
    name: "Illustrator",
    altText: "Adobe Illustrator",
    icon: SiAdobeillustrator,
  },
]

export default function Skills() {
  const skillRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animation for left element
    gsap.fromTo(
      skillRef.current,
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
    <section
      className="relative flex items-center justify-center h-screen text-white md:px-20 lg:px-20 "
      ref={containerRef}
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-5xl md:text-6xl font-black mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
            SKILLS
          </span>
        </h2>

        <div
          className="justify-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:grid-cols-3 gap-10"
          ref={skillRef}
        >
          {skills.map((Skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-200"
            >
              <Skill.icon key={index} size={46} className="text-secondary hover:text-primary duration-200" />
              <p className="mt-2">{Skill.name}</p>
            </div>
          ))}

          {/* <VerticalTimeline>
            {skillsData.map((section, index) => (
              <VerticalTimelineCustom
                key={index}
                icon={section.icon}
                category={section.category}
                skills={section.skills}
              />
            ))}
          </VerticalTimeline> */}
        </div>
      </div>
    </section>
  );
}
