"use client";

import * as React from "react";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Project from "./Project";
import projectData from "@/data/projects.json";

export default function Projects() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Scroll by approximately one card width plus gap (e.g. 350px)
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-16 md:py-24 px-6 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-6 flex flex-col items-center max-w-6xl w-full">
        {/* Header and Scroll Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-12 gap-4">
          <h2 className="text-center md:text-left text-4xl md:text-5xl font-black tracking-tight w-full">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              PROJECTS
            </span>
          </h2>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-slate-50 border border-slate-200 hover:bg-primary hover:text-white hover:border-primary text-slate-700 transition-all duration-300"
              aria-label="Scroll Left"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-slate-50 border border-slate-200 hover:bg-primary hover:text-white hover:border-primary text-slate-700 transition-all duration-300"
              aria-label="Scroll Right"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory w-full py-4 px-2 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectData.map((project, index) => (
            <div key={index} className="snap-start shrink-0">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
