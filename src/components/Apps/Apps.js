"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getTechIcon } from "@/utils/techIcons";
import appsData from "@/data/apps.json";

export default function Apps() {
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
    <section id="apps" className="relative flex flex-col items-center justify-center py-16 md:py-24 px-6 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-6 flex flex-col items-center max-w-6xl w-full">
        {/* Header and Scroll Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full mb-12 gap-4">
          <div className="w-full text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight w-full mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                MY APPS
              </span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto md:mx-0">
              A collection of mobile applications designed, developed, and launched across various platforms.
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
          {appsData.map((app, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group snap-start snap-always shrink-0 w-[280px] sm:w-[350px]"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-xl shadow-sm overflow-hidden shrink-0">
                    {app.icon ? (
                      <img
                        src={app.icon}
                        alt={`${app.name} Icon`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      app.name ? app.name.split(" ").map(w => w[0]).join("").substring(0, 2) : "AP"
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors duration-300">
                      {app.name}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">{app.time}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {app.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 border border-slate-200 text-slate-600 text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                  {app.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  {app.techStack?.map((tech, i) => {
                    const Icon = getTechIcon(tech);
                    return Icon ? (
                      <div key={i} title={tech} className="text-slate-400 hover:text-slate-600 transition-colors duration-200">
                        <Icon size={16} />
                      </div>
                    ) : null;
                  })}
                </div>
                <Link
                  href={`/apps/${app.id}`}
                  className="text-sm text-primary font-bold hover:underline flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300"
                >
                  App Details &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
