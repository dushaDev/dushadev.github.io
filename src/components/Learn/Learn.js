"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Item from "./Item";
import learnData from "@/data/learn.json";

const displayData = [
  ...learnData,
  {
    type: 'button',
    time: "-",
    name: "-",
    link: "https://www.linkedin.com/in/dushan-madushanka-360252196/recent-activity/all/",
    description: "-",
    image: "-"
  }
];

export default function Learn() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="learn" className="relative flex flex-col items-center justify-center py-16 md:py-24 px-6 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-6 flex flex-col items-center max-w-6xl w-full">
        {/* Header and Scroll Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-12 gap-4">
          <div className="w-full text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight w-full mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                LEARN
              </span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto md:mx-0">
              Articles, insights, and lessons from my engineering journey.
            </p>
          </div>
          <div className="hidden md:flex gap-2 shrink-0">
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
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory w-screen -mx-6 px-6 md:w-full md:mx-0 md:px-2 py-4 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {displayData.map((item, index) => (
            <div key={index} className="snap-start snap-always shrink-0">
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
