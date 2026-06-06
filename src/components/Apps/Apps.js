"use client";

import Link from "next/link";
import { getTechIcon } from "@/utils/techIcons";
import appsData from "@/data/apps.json";

export default function Apps() {
  return (
    <section id="apps" className="relative flex flex-col items-center justify-center min-h-screen py-20 px-6 bg-slate-50 border-t border-b border-slate-100">
      <div className="container mx-auto px-6 flex flex-col items-center md:items-start max-w-6xl w-full">
        <h2 className="text-center md:text-left text-4xl md:text-5xl font-black mb-4 tracking-tight w-full">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
            MY APPS
          </span>
        </h2>
        <p className="text-slate-500 mb-16 text-center md:text-left max-w-xl md:mx-0">
          A collection of mobile applications designed, developed, and launched across various platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {appsData.map((app, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {/* App Icon placeholder (since no images are included yet, we show a premium initials badge) */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-xl shadow-sm">
                    {app.name ? app.name.split(" ").map(w => w[0]).join("").substring(0, 2) : "AP"}
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
