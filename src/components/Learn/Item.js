"use client";

import * as React from "react";
import Link from "next/link";

export default function Item({ item }) {
  if (item.type === 'button') {
    return (
      <div className="relative w-80 h-[28rem] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center text-center p-6 group">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-slate-800 mb-3">Want More?</h3>
          <p className="text-slate-500 mb-8 max-w-[200px] mx-auto leading-relaxed text-sm">
            Explore my full library of articles and posts on LinkedIn.
          </p>

          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-primary hover:bg-orange-600 text-white font-bold rounded-full shadow-md transition-all duration-300">
              View All Articles
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative w-80 h-[28rem] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col group">
        <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block relative w-full h-48 overflow-hidden bg-slate-100 shrink-0">
          {item.image && item.image !== "-" ? (
            <img
              src={item.image}
              alt={`${item.name} News Image`}
              className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
              No Image
            </div>
          )}
          {/* Date Tag */}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-100 px-3 py-1 rounded-full shadow-sm">
            <span className="text-primary text-xs font-mono font-semibold">{item.time}</span>
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
                    className="bg-primary/10 border border-primary/20 text-primary text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2 h-[3rem] leading-snug">
              {item.name}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
              {item.description}
            </p>
          </div>

          {/* Read More Button */}
          <div className="mt-4 pt-4 border-t border-slate-50">
            <Link href={item.link} target="_blank" rel="noopener noreferrer">
              <button className="w-full flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-slate-700 font-semibold py-2 px-4 rounded-xl group/btn text-sm">
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
