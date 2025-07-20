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
    time: "July 11 2025",
    name: "What is Firebase?",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7349484314755047428/",
    description: "Firebase is Google's comprehensive platform designed to help you 𝗯𝘂𝗶𝗹𝗱, 𝗿𝗲𝗹𝗲𝗮𝘀𝗲, 𝗮𝗻𝗱 𝗴𝗿𝗼𝘄 your digital products. Think of it as a powerful 𝗕𝗮𝗰𝗸𝗲𝗻𝗱-𝗮𝘀-𝗮-𝗦𝗲𝗿𝘃𝗶𝗰𝗲 (BaaS) that provides a wide array of integrated tools. Firebase handles 𝘀𝗲𝗿𝘃𝗲𝗿-𝘀𝗶𝗱𝗲 infrastructure, freeing you to focus on crafting exceptional user experiences on the frontend.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQGViunjxXAeDA/feedshare-shrink_2048_1536/B56Zf6dCEMHIAs-/0/1752253606223?e=1755734400&v=beta&t=qaMK9wU5kJ3kFU7ofFZfyAwS6t8jPYuPI1yYuGRlNI4"
  },

  {
    type: 'post',
    time: "July 07 2025",
    name: "My Selfie just came back from Space!",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7347924111509082112/",
    description: "You won't believe this! After a two-month wait, my 𝗖𝗿𝘂𝗻𝗰𝗵𝗟𝗮𝗯𝘀 𝗦𝗽𝗮𝗰𝗲 𝗦𝗲𝗹𝗳𝗶𝗲 with Gihan Pramith and Rasil Laksika Kottagoda is finally here. We literally got our photo taken with Earth as our backdrop, from space!",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQFabtra6BMLcA/feedshare-shrink_2048_1536/B56ZfkSBL6G0Ao-/0/1751881624290?e=1755734400&v=beta&t=EWq_Su6fF7N6k-_j5Od1h_olgWe6L7WI63wGlc99-lg"
  },

  {
    type: 'post',
    time: "June 11 2025",
    name: "Ever wondered how 𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝗰𝗼𝗻𝘁𝗿𝗼𝗹 really works?",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_git-github-versioncontrol-activity-7338524455758897152-w9bA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "This simple visual breaks down how Git flows from your working directory to the remote repository using essential commands like 𝗴𝗶𝘁 𝗮𝗱𝗱, 𝗰𝗼𝗺𝗺𝗶𝘁, 𝗽𝘂𝘀𝗵, 𝗽𝘂𝗹𝗹, and more.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQGV17I0ag8NEg/feedshare-shrink_2048_1536/B56ZdetGVqGQAo-/0/1749640572551?e=1755734400&v=beta&t=lbPWeFiXUv7AO57v3fZfOcGagNJcBsn1UmwF2AkHdbg"
  },

  {
    type: 'post',
    time: "June 02 2025",
    name: "Let's talk about Null Safety",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_dushadev-dart-flutter-activity-7335145654396100609-80L_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "අපි Develop කරන ඕනෙම ඇප් එකක් හෝ කෝඩ් එකක් හෝ වේවා 𝗖𝗿𝗮𝘀𝗵 වෙන එක නම් අප්‍රසන්න අත්දැකීමක්.මේ විදියට Crash වීමට බලපාන එක හේතුවක් විදියට 𝗩𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀 𝗡𝘂𝗹𝗹 වීම පෙන්වන්න පුලුවන්.",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQHUwx3VYLH72w/feedshare-shrink_1280/B56ZctQZhWGsAs-/0/1748810963786?e=1755734400&v=beta&t=TdNfWUDomByBgwegtAEn0XOl7hAc4RlN3OPSLGth-iw"
  },
  {
    type: 'post',
    time: "May 30 2025",
    name: "මොකක්ද 𝗔𝗿𝗿𝗼𝘄 𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 එකක් කියන්නෙ?",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_dushadev-dart-basics-activity-7334058477494906882-LT_f?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "Arrow function එකක් එහෙමත් නැත්තන් තවත් නම් වලින් කිව්වොත් 𝗙𝗮𝘁 𝗮𝗿𝗿𝗼𝘄 function, 𝗟𝗮𝗺𝗯𝗱𝗮 function or 𝗦𝗵𝗼𝗿𝘁𝗵𝗮𝗻𝗱 syntax කියන්නෙ තනි Expression එකක් කෙටිම විදියට හසුරවන්න හදපු Function එකක්. මෙක තේරෙන්න අපි Code එකක් බලමු. ",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQEXGN036j0oXA/feedshare-shrink_1280/B56Zcd142BGQAk-/0/1748552357244?e=1755734400&v=beta&t=FkHlEYeynOFtmRvCySTJWU4WhHLPC8nPh9ymRxOIoOM"
  },
  {
    type: 'post',
    time: "May 29 2025",
    name: "මොකක්ද 𝗦𝘁𝗿𝗶𝗻𝗴 𝗜𝗻𝘁𝗲𝗿𝗽𝗼𝗹𝗮𝘁𝗶𝗼𝗻 කියන්නෙ?",
    link: "https://www.linkedin.com/posts/dushan-madushanka-360252196_dushadev-dart-sinhalen-activity-7333696108864393217-_2CI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC30XHgBFSMYia7jzY49RCv9e-ag_c7YfUA",
    description: "𝗗𝗮𝗿𝘁 වල විතරක් නෙවෙයි වෙනත් ඕනෙම Programming Language එකකින් උනත් Variable එකක් හරි Expression එකක් හරි String variable එකකට Bind කරන එක තමයි String Interpolation කියන්නෙ.Dart වලදි මේක කරන විදිය අපි බලමු. Dart වල Special Symbols 2ක් පාවිච්චි කරනවා",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQERiq00AEsS2Q/feedshare-shrink_1280/B56ZcYj7SCHUAk-/0/1748463761850?e=1755734400&v=beta&t=0ZnmPU3x0SNXnspTTi3tgWlFT791_4DRetGP6G3KZsE"
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
    <section className="relative flex items-center justify-center lg:h-screen mt-10 mb-20 md:px-20 lg:px-20 " ref={containerRef}>
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-center text-4xl font-bold mb-16">LEARN</h2>


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
