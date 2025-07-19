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
    <div className="relative w-72 h-96 border-2 border-primary bg-transparent rounded-sm overflow-hidden group">
      {/* Added 'group' class to enable hover effects on child elements */}
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-full h-48">
          <img
            src={project.image}
            alt={`${project.name} Project Image`}
            className="w-full h-full object-cover"
          />
          {/* Date with curved orange background */}
          <div className="absolute top-0 right-0 px-4 pb-0.5 bg-primary rounded-bl-xl">
            <span className="text-white text-xs">{project.time}</span>
          </div>

          {/* View Project Button (appears on hover) */}
          <div className="absolute inset-0 bg-black flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-200">
            <button className="bg-primary hover:bg-orange-600 transition-colors duration-200 text-white font-bold py-2 px-4 rounded">
              View Project
            </button>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed overflow-hidden text-ellipsis h-10">
          {project.description}
        </p>
        {/* Tech Stack Icons */}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          {project.techStack.map((Tech, index) => (
            <Tech.icon key={index} size={20} className="text-secondary" />
          ))}
        </div>
      </div>
    </div>
  );
}
