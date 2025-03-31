"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useState, useRef} from "react";
import Image from "next/image";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import * as React from "react";
import VerticalTimelineCustom from "./VerticalTimeLineCustom";

const skillsData = [
  {
    icon: <AiOutlineAntDesign width={20} height={20} />,
    category: "Front-end",
    skills: [
      { name: "Flutter", altText: "flutter", icon: "/skills/flutter.png" },
      { name: "React", altText: "react", icon: "/skills/react.webp" },
  
    ],
  },
  {
    icon: <FaGears />,
    category: "Back-end",
    skills: [
      { name: "Java", altText: "java", icon: "/skills/java.webp" },
      { name: "PHP", altText: "php", icon: "/skills/php.webp" },
      { name: "Dart", altText: "dart", icon: "/skills/dart.png" },
      { name: "Python", altText: "python", icon: "/skills/python.png" },
      { name: "SQL",altText:"sql",icon:"/skills/sql.webp"},
      {name:"Android Native",altText:"android",icon:"/skills/android.png"}
    ],
  },
  {
    icon: <IoIosApps />,
    category: "Others",
    skills: [
      { name: "Figma", altText: "Figma", icon: "/skills/figma.webp" },
      { name: "Adobe XD", altText: "Adobe XD", icon: "/skills/xd.png" },
      {name: "Adobe Illustrator",altText:"Adobe Illustrator",icon:"/skills/ai.png"}
   
    ],
  },
];

export default function Skills() {
  const skillRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Animation for left element
    gsap.fromTo(skillRef.current,
      { y: '5%', scale: 0.8,opacity: 0 },
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
          markers: false
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      className="relative flex items-center justify-center h-screen text-white md:px-20 lg:px-20 my-10" ref={containerRef}

    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold my-10">SKILLS</h2>

<div className="container mx-auto flex flex-col md:flex-row items-center" ref={skillRef}>
        <VerticalTimeline  >
          {skillsData.map((section, index) => (
            <VerticalTimelineCustom
              key={index}
              icon={section.icon}
              category={section.category}
              skills={section.skills}
            />
          ))}
        </VerticalTimeline></div>
      </div>
    </section>
  );
}
