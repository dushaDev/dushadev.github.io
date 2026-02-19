"use client";

import { FaGithub, FaReact, FaJava, FaPython, FaPhp, FaDatabase, FaAndroid, FaFigma, FaBootstrap } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";


import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdAccessTime } from "react-icons/md";

import * as React from "react";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <div
      className="relative w-72 h-96 bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-primary/50 rounded-lg overflow-hidden group hover:shadow-[0_0_30px_rgba(255,112,55,0.2)] transition-all duration-500"
    // style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }} // Optional: Angled corner cut
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} Project Image`}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>

          {/* Date Tag */}
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
            <span className="text-primary text-xs font-mono">{project.time}</span>
          </div>
        </div>
      </Link>

      <div className="p-5 flex flex-col h-48 justify-between relative">
        <div>
          {/* Title with glow effect on hover */}
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags &&
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary/10 border border-primary/30 text-primary text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider font-semibold"
                >
                  {tag}
                </span>
              ))}
          </div>

          <p className="text-gray-400 text-sm leading-relaxed overflow-hidden text-ellipsis line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Icons with glow */}
        <div className="flex items-center space-x-3 mt-auto pt-3 border-t border-white/5">
          {project.techStack.map((Tech, index) => (
            <div key={index} className="relative group/icon">
              <Tech.icon size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </div>
          ))}
          {/* Action Arrow */}
          <div className="ml-auto text-primary opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
            →
          </div>
        </div>
      </div>
    </div>
  );
}
