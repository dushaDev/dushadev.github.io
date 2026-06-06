"use client";

import * as React from "react";
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
  return (
    <section className="relative flex items-center justify-center min-h-screen py-20 bg-white md:px-20 lg:px-20">
      <div className="container mx-auto px-6 flex flex-col items-center md:items-start max-w-6xl w-full">
        <h2 className="text-center md:text-left text-4xl md:text-5xl font-black mb-16 tracking-tight w-full">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
            LEARN
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full">
          {displayData.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
