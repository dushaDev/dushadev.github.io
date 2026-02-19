"use client";

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { FaGithub, FaReact, FaJava, FaPython, FaPhp, FaDatabase, FaAndroid, FaFigma, FaBootstrap } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";

import * as React from "react";
import Item from "./Item";


const projectData = [

  {
    type: 'post',
    tags: ['Flutter', 'Dart', 'dev',],
    time: "January 11 2026",
    name: "Dart 3.10 is here, and your UI code is about to get much cleaner",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_flutter-dart-softwareengineering-activity-7415984863557640192-rcuE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "The latest release of 𝗗𝗮𝗿𝘁 3.10 introduces 𝗗𝗼𝘁 𝗦𝗵𝗼𝗿𝘁𝗵𝗮𝗻𝗱𝘀 (Static Namespace Shorthands). This feature allows you to omit the class or enum name when the type can be inferred from the context.",
    image:
      "/learn/1768108572405.jpeg"
  },

  {
    type: 'post',
    tags: ['flutter', 'dart', 'dev',],
    time: "December 27 2025",
    name: "My first Flutter package is live on pub.dev",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_flutter-opensource-coding-activity-7410632161319645184-Dsw1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "I built a small utility called 𝗚𝗿𝗲𝗲𝘁𝗶𝗳𝘆. It handles time-aware greetings (like \"Good Morning\") with support for randomization and custom message lists.",
    image:
      "/learn/1766832388505.jpeg"
  },

  {
    type: 'post',
    tags: ['UI', 'UX',],
    time: "November 26 2025",
    name: "Did you know that great design is actually a formula?",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_dushadev-uiux-designthinking-activity-7399181903959900160-1_VB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "If you ever struggle to make an 𝗮𝗽𝗽 𝗶𝗻𝘁𝗲𝗿𝗳𝗮𝗰𝗲 or presentation look balanced, you might be missing the 60-30-10 𝗿𝘂𝗹𝗲.",
    image:
      "/learn/1764102434759.jpeg"
  },

  {
    type: 'post',
    tags: ['PM', 'RG',],
    time: "October 25 2025",
    name: "Why is important Requirements Gathering?",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_softwaredevelopment-projectmanagement-requirementsgathering-activity-7387662318886711296-qlvQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "ඔයත් Student කෙනෙක් නම්.. කැම්පස් Undergraduate නම්, IT related degree එකක් නම් කරන්නෙ Software Development ගෘප් ප්‍රොජෙක්ට් කරද්දි හදන්න හිතාගෙන පටන් ගත්ත එක නෙවෙයි නේද අන්තිමට ආවෙ..ඒ ඇයි..",
    image:
      "/learn/1761355951739.jpeg"
  },

  {
    type: 'post',
    tags: ['SAD', 'SDLC',],
    time: "August 02 2025",
    name: "What is SDLC?",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_dushadev-sad-sdlc-activity-7357335143738454016-6zer?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "SDLC (𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗟𝗶𝗳𝗲 𝗖𝘆𝗰𝗹𝗲) is a structured process for building software. Think of it as a blueprint for building a House. It's a plan that guides the entire process from",
    image:
      "/learn/1754125389419.jpeg"
  },

  {
    type: 'post',
    tags: ['firebase', 'google',],
    time: "July 11 2025",
    name: "What is Firebase?",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7349484314755047428/",
    description: "Firebase is Google's comprehensive platform designed to help you 𝗯𝘂𝗶𝗹𝗱, 𝗿𝗲𝗹𝗲𝗮𝘀𝗲, 𝗮𝗻𝗱 𝗴𝗿𝗼𝘄 your digital products. Think of it as a powerful 𝗕𝗮𝗰𝗸𝗲𝗻𝗱-𝗮𝘀-𝗮-𝗦𝗲𝗿𝘃𝗶𝗰𝗲 (BaaS) that provides a wide array of integrated tools. Firebase handles 𝘀𝗲𝗿𝘃𝗲𝗿-𝘀𝗶𝗱𝗲 infrastructure, freeing you to focus on crafting exceptional user experiences on the frontend.",
    image:
      "/learn/1752253606223.jpeg"
  },

  {
    type: 'post',
    tags: ['git', 'github',],
    time: "June 11 2025",
    name: "Ever wondered how version control really works?",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_git-github-versioncontrol-activity-7338524455758897152-w9bA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "This simple visual breaks down how Git flows from your working directory to the remote repository using essential commands like 𝗴𝗶𝘁 𝗮𝗱𝗱, 𝗰𝗼𝗺𝗺𝗶𝘁, 𝗽𝘂𝘀𝗵, 𝗽𝘂𝗹𝗹, and more.",
    image:
      "/learn/1749640572551.jpeg"
  },

  {
    type: 'button',
    time: "-",
    name: "-",
    link: "https://www.linkedin.com/in/dushan-madushanka-360252196/recent-activity/all/",
    description: "-",
    image:
      "-"
  },
  // this is type 'button' to show a button at the end of the posts list 

];

export default function Learn() {
  const learnRef = useRef(null);
  const containerRef = useRef(null);
  useEffect(() => {
    // Animation for left element
    gsap.fromTo(
      learnRef.current,
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
    <section className="relative flex items-center justify-center min-h-screen py-20 md:px-20 lg:px-20 " ref={containerRef}>
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-5xl md:text-6xl font-black mb-16 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
            LEARN
          </span>
        </h2>


        <div className="flex flex-wrap justify-center gap-6" ref={learnRef}>
          {projectData.map((item, index) => (
            <Item
              key={index}
              item={item}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
