"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import * as React from "react";
import VerticalTimelineCustom from "./VerticalTimeLineCustom";

const projectData = [
  {
    time: "2025 feb",
    items: [
      {
        name: "Watch Queue",
        link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_flutter-mobiledevelopment-watchqueueapp-activity-7269761531381194752-e8dT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
        techStack: [{ name: "Flutter", icon: "/skills/flutter.png" }],
        description: "Movies watchlist mobile app",
        image:
          "https://media.licdn.com/dms/image/v2/D5622AQESgYXP_T4zuQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1733246192546?e=1746662400&v=beta&t=6dI1CAQWg0zSxNs674Fwwvhs0Rm5ZZlSfHhidBJNr3E",
      },
    ],
  },
  {
    time: "2024 nov",
    items: [
      {
        name: "Medi Care",
        link: "https://www.figma.com/design/mSOxN8wWpUgLVLJcWdd6dq/Pharmacy-MS---MediCare?node-id=187-105&t=fVQLMRvKv5z9AbYt-1",
        techStack: [
          { name: "Figma", icon: "/skills/figma.webp" },
        ],
        description:
          "Mobile app UI design with Figma for pharmacy",
        image: "/projects/pharmacy.jpg",
      },
    ],
  },
  {
    time: "2024 may",
    items: [
      {
        name: "GPA Connect",
        link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_python-mysql-bootstrap-activity-7159109776033947648-Yhoa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
        techStack: [{ name: "Python", icon: "/skills/python.png" }],
        description: "GPA calculation web system",
        image:
          "https://media.licdn.com/dms/image/v2/D5622AQFuuaT9q3AIgw/feedshare-shrink_1280/feedshare-shrink_1280/0/1706864778127?e=1746662400&v=beta&t=VERKmDYyvZ26F5hOvkJ2J6ZM4yvagAdjwQVDd3hdSng",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section className="relative flex items-center justify-center md:px-20 lg:px-20 ">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold mb-10 mt-20">PROJECTS</h2>

        <VerticalTimeline>
          {projectData.map((section, index) => (
            <VerticalTimelineCustom
              key={index}
              time={section.time}
              items={section.items}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
