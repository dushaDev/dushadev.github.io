"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { FaGithub, FaReact, FaJava, FaPython, FaPhp, FaDatabase, FaAndroid, FaFigma, FaBootstrap, FaFlask, } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiAdobeillustrator, SiAdobexd, SiFirebase, SiFlask} from "react-icons/si";
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
    techStack: [{ name: "Flutter", icon: FaFlutter },{ name: "Gemini Vision", icon: RiGeminiFill },{ name: "Firebase", icon: SiFirebase }],
    description: "Navigating lost and found items on a busy campus can be challenging. FindX simplifies this process by providing a centralized, intelligent platform to report, browse, and ultimately, recover lost belongings.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFh8gsDoXvPYg/feedshare-shrink_2048_1536/B56ZcVfRYzHUA0-/0/1748412223159?e=1755129600&v=beta&t=tWtbMb10X7Vb-enjsZ468oaVtC6qffXMpGxfAEFdiU0",
  },

  {
    time: "2025 feb",
    name: "Watch Queue",
    tags: ['mobile'],
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_flutter-mobiledevelopment-watchqueueapp-activity-7269761531381194752-e8dT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    techStack: [{ name: "Flutter", icon: FaFlutter}, { name: "Firebase", icon: SiFirebase }],
    description: "This is my latest project 'Watch Queue' Movies watchlist Mobile App with Flutter! This app is a great way to explore Flutter and improve my skills in mobile development.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEP7ZbMS2w8AA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1733246177636?e=1755129600&v=beta&t=p2bxS1i3RiiLa2Ct0AU2Xnfq0OzRzcNDIicpUJa2rE0",

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
    techStack: [{ name: "Python", icon: FaPython},{ name: "Flask", icon: SiFlask },{name:"chatgpt", icon: AiFillOpenAI}],
    description: "Collaborated on 'GPA connect' GPA Calculation web system Project with Python programming language based on Flask framework",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFuuaT9q3AIgw/feedshare-shrink_1280/feedshare-shrink_1280/0/1706864778127?e=1755129600&v=beta&t=N9eLOBXKdPrCxXrkmk-mZqS5zsjH32trkWrzVLksA2o",
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
    <section className="relative flex items-center justify-center lg:h-screen md:px-20 lg:px-20 " ref={containerRef}>
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold mb-16">PROJECTS</h2>


<div className="flex flex-wrap justify-center gap-6"  ref={projRef}>
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
