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

export default function Item({ item }) {

  if (item.type == 'button') {
    return (
      <div className="relative w-80 h-[480px] bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-primary/50 rounded-lg overflow-hidden group hover:shadow-[0_0_30px_rgba(255,112,55,0.2)] transition-all duration-500 flex flex-col items-center justify-center text-center p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
          <h3 className="text-3xl font-bold text-white mb-4">Want More?</h3>
          <p className="text-gray-400 mb-8 max-w-[200px] mx-auto leading-relaxed">
            Explore my full library of articles and posts on LinkedIn.
          </p>

          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-full shadow-[0_0_15px_rgba(255,112,55,0.4)] hover:shadow-[0_0_25px_rgba(255,112,55,0.6)] transition-all duration-300">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    );

  } else {
    return (
      <div
        className="relative w-80 h-[480px] bg-zinc-900/40 backdrop-blur-md border border-white/10 hover:border-primary/50 rounded-lg overflow-hidden group hover:shadow-[0_0_30px_rgba(255,112,55,0.2)] transition-all duration-500 flex flex-col"
      >
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full h-48 overflow-hidden shrink-0">
            <img
              src={item.image}
              alt={`${item.name} News Image`}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80"></div>

            {/* Date Tag */}
            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full">
              <span className="text-primary text-xs font-mono">{item.time}</span>
            </div>
          </div>
        </Link>

        <div className="p-6 flex flex-col flex-grow justify-between relative">
          <div>
            {/* Tags Row */}
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags &&
                item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary/10 border border-primary/30 text-primary text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider font-semibold"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 h-[3.5rem] leading-tight">
              {item.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed overflow-hidden text-ellipsis line-clamp-3">
              {item.description}
            </p>
          </div>

          {/* Read More Button */}
          <div className="mt-4 pt-4 border-t border-white/5">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-primary hover:text-white transition-all duration-300 text-gray-300 font-semibold py-2 px-4 rounded-md group/btn">
                Read More
                <span className="transform transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}
