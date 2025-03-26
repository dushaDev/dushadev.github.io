"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaGears } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";

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
  return (
    <section
      className="relative flex items-center justify-center h-screen text-white md:px-20 lg:px-20 "
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold my-10">SKILLS</h2>

        <VerticalTimeline>
          {skillsData.map((section, index) => (
            <VerticalTimelineCustom
              key={index}
              icon={section.icon}
              category={section.category}
              skills={section.skills}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
