"use client";

import { getTechIcon } from "@/utils/techIcons";
import Link from "next/link";

export default function Project({ project }) {
  return (
    <div className="relative w-80 h-[26rem] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col group">
      <Link href={`/projects/${project.id}`} className="block relative w-full h-48 overflow-hidden bg-slate-100">
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
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm border border-slate-100 px-3 py-1 rounded-full shadow-sm">
          <span className="text-primary text-xs font-mono font-semibold">{project.time}</span>
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags &&
              project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary/10 border border-primary/20 text-primary text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold"
                >
                  {tag}
                </span>
              ))}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack & Arrow */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-4">
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
          <span className="text-primary font-bold group-hover:translate-x-1 transition-transform duration-300">
            View Details &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
