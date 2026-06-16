"use client";

import { useRef } from "react";
import { FaReact, FaJava, FaAndroid, FaFigma, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaFlutter, FaGitAlt, FaSwift } from "react-icons/fa6";
import { SiFirebase, SiKotlin, SiDart } from "react-icons/si";

const skills = [
  { name: "Flutter", icon: FaFlutter },
  { name: "Dart", icon: SiDart },
  { name: "Android", icon: FaAndroid },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Swift", icon: FaSwift },
  { name: "React Native", icon: FaReact },
  { name: "Java", icon: FaJava },
  { name: "Firebase", icon: SiFirebase },
  { name: "Figma", icon: FaFigma },
  { name: "Git", icon: FaGitAlt },
];

export default function Skills() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -240 : 240;
      let targetScroll = scrollLeft + scrollAmount;

      // Loop / Wrap around check
      if (direction === "right" && scrollLeft + clientWidth >= scrollWidth - 20) {
        targetScroll = 0;
      } else if (direction === "left" && scrollLeft <= 20) {
        targetScroll = scrollWidth - clientWidth;
      }

      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex items-center justify-center py-16 md:py-24 bg-slate-50 md:px-20 lg:px-20">
      <div className="container mx-auto px-6 flex flex-col items-center md:items-start max-w-4xl w-full">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-10 gap-4">
          <h2 className="text-center md:text-left text-4xl md:text-5xl font-black tracking-tight w-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              SKILLS
            </span>
          </h2>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-white border border-slate-200 hover:bg-primary hover:text-white hover:border-primary text-slate-700 transition-all duration-300 shadow-sm"
              aria-label="Scroll Left"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-white border border-slate-200 hover:bg-primary hover:text-white hover:border-primary text-slate-700 transition-all duration-300 shadow-sm"
              aria-label="Scroll Right"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Carousel container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full py-4 px-1 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="snap-start shrink-0 flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 p-4 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
              >
                <Icon
                  className="text-slate-500 group-hover:text-primary transition-colors duration-300 size-8 md:size-12"
                />
                <p className="mt-3 text-xs md:text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-center truncate w-full">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
