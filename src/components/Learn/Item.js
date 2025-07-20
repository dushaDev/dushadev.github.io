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
      <div className="relative w-72 h-96 border-2 border-neutral bg-transparent rounded-sm overflow-hidden group">
        <div className="absolute inset-0 flex items-center justify-center">
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-secondary hover:bg-primary hover:text-secondary transition-colors duration-200 text-primary font-bold py-1 px-2 rounded">
              Read More Articles
            </button>
          </Link>
        </div>
      </div>
    );

  } else {
    return (
      <div className="relative w-72 h-96 border-2 border-primary bg-transparent rounded-sm overflow-hidden group">
        {/* Added 'group' class to enable hover effects on child elements */}
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full h-48">
            <img
              src={item.image}
              alt={`${item.name} News Image`}
              className="w-full h-full object-cover"
            />
            {/* Date with curved orange background */}
            <div className="absolute top-0 right-0 px-4 pb-0.5 bg-primary rounded-bl-xl">
              <span className="text-white text-xs">{item.time}</span>
            </div>

          </div>
        </Link>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">
            {item.name}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed overflow-hidden text-ellipsis h-10 mb-4 line-clamp-2"> {/* Added mb-4 for spacing */}
            {item.description}
          </p>
          {/* Read More Button (always visible at the bottom) */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-secondary hover:bg-primary hover:text-secondary transition-colors duration-200 text-primary font-bold py-1 px-2 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

}
