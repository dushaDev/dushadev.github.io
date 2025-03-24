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

const projectData = [
  {
    icon: <AiOutlineAntDesign width={20} height={20} />,
    category: "Front-end",
    skills: [
      { name: "Flutter", altText: "Flutter", icon: "/skills/flutter.png" },
      { name: "React", altText: "React", icon: "/skills/react.webp" },
      { name: "Flutter", altText: "Flutter", icon: "/skills/flutter.png" },
      { name: "React", altText: "React", icon: "/skills/react.webp" },
      { name: "Flutter", altText: "Flutter", icon: "/skills/flutter.png" },
      { name: "React", altText: "React", icon: "/skills/react.webp" },
    ],
  },
  {
    icon: <FaGears />,
    category: "Back-end",
    skills: [
      { name: "Node.js", altText: "Node.js", icon: "/skills/flutter.png" },
      { name: "Express", altText: "Express", icon: "/skills/flutter.png" },
      { name: "Flutter", altText: "Flutter", icon: "/skills/flutter.png" },
      { name: "React", altText: "React", icon: "/skills/react.webp" },
    ],
  },
  {
    icon: <IoIosApps />,
    category: "Others",
    skills: [
      { name: "Figma", altText: "Figma", icon: "/skills/figma.webp" },
      { name: "Adobe XD", altText: "Adobe XD", icon: "/skills/xd.png" },
      { name: "Flutter", altText: "Flutter", icon: "/skills/flutter.png" },
      { name: "React", altText: "React", icon: "/skills/react.webp" },
    ],
  },
];

export default function Projects() {
  return (
    <section
      className="relative flex items-center justify-center text-white md:px-20 lg:px-20 "
      style={{
        backgroundImage: "url('/background-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold mb-10 mt-30">PROJECTS</h2>

        <VerticalTimeline>
          {projectData.map((section, index) => (
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
