"use client";

import { getTechIcon } from "@/utils/techIcons";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <div className="relative w-[310px] sm:w-80 h-[22rem] sm:h-[26rem] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col group">
      <div className="relative w-full h-36 sm:h-48 overflow-hidden bg-slate-100">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} Project Image`}
            className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
            No Image Provided
          </div>
        )}
        {/* Date Tag */}
        <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm border border-slate-100 px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded sm:rounded-md shadow-sm flex items-center justify-center">
          <span className="text-primary text-[10px] sm:text-xs font-mono font-bold tracking-wide leading-none">{project.time}</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-1.5 sm:mb-2">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-2 sm:mb-3">
            {project.tags &&
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary/10 border border-primary/20 text-primary text-[8px] sm:text-[10px] px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded sm:rounded-md uppercase tracking-wider font-bold inline-flex items-center justify-center leading-none"
                >
                  {tag}
                </span>
              ))}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack & Arrow */}
        <div className="flex items-center justify-between pt-2.5 sm:pt-4 border-t border-slate-50 mt-2.5 sm:mt-4">
          <div className="flex items-center space-x-3">
            {project.techStack.map((tech, index) => {
              const Icon = getTechIcon(tech);
              return Icon ? (
                <div key={index} title={tech} className="text-slate-400 hover:text-slate-600 transition-colors duration-200">
                  <Icon size={18} />
                </div>
              ) : null;
            })}
          </div>
          <Link
            href={`/projects/${project.id}`}
            className="text-primary font-bold hover:text-orange-600 hover:underline transition-all duration-200 flex items-center gap-1 group/btn"
          >
            <span>View Details</span>
            <span className="group-hover:translate-x-1 group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
