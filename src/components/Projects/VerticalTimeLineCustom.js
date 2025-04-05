"use client";

import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdAccessTime } from "react-icons/md";

import * as React from "react";
import Link from "next/link";

export default function VerticalTimelineCustom({ time, items }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "transparent",
        color: "var(--secondary)",
        boxShadow: "none",
        padding: "0 0 0 30px",
      }}
      date={time}
      contentArrowStyle={{ borderRight: "8px solid var(--primary)" }}
      iconStyle={{
        background: "var(--primary)",
        color: "var(--secondary)",
        boxShadow: "none",
      }}
      icon={<MdAccessTime />}
    >
      <div className="flex flex-row justify-center gap-5">
        {items.map((item, index) => (
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div
              key={index}
              className=" bg-on-background border-4 border-primary rounded-sm shadow-lg max-w-70  hover:scale-101 transition-transform duration-300"
            >
              <div className="relative rounded- overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-60 h-50 object-cover"
                />
                {/* Icons inside the image */}
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  {item.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400"
                    >
                      {/* <span>{tech.name}</span> */}
                      <Image
                        className=" object-cover"
                        src={tech.icon}
                        alt={tech.name}
                        width={28}
                        height={28}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 m-3">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </VerticalTimelineElement>
  );
}
