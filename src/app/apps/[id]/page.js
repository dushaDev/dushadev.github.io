import Link from "next/link";
import appsData from "@/data/apps.json";
import { getTechIcon } from "@/utils/techIcons";
import { FaPlay, FaImage } from "react-icons/fa";

export async function generateStaticParams() {
  return appsData.map((app) => ({
    id: app.id,
  }));
}

export default async function AppDetailPage({ params }) {
  const { id } = await params;
  const app = appsData.find((a) => a.id === id);

  if (!app) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">App Not Found</h1>
        <p className="text-slate-600 mb-6">The mobile application you are looking for does not exist.</p>
        <Link href="/" className="px-6 py-2 bg-primary text-white rounded-full font-semibold shadow-md hover:bg-orange-600 transition-all duration-300">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-20 pb-12 px-4 md:px-12 lg:px-24 sm:pt-24">
      <div className="max-w-5xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">

        {/* Banner/Feature Graphic */}
        <div className="relative w-full h-48 md:h-72 bg-gradient-to-r from-primary/10 to-orange-500/10 flex items-center justify-center overflow-hidden border-b border-slate-100">
          <Link
            href="/"
            className="absolute top-4 left-4 z-10 inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-white/95 hover:bg-white text-slate-800 rounded-full shadow-md border border-slate-100 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 text-xs font-bold group"
            title="Back to Home"
          >
            <span className="group-hover:-translate-x-0.5 transition-transform duration-300">&larr;</span> Back
          </Link>
          {app.featureGraphic ? (
            <img
              src={app.featureGraphic}
              alt={`${app.name} Feature Graphic`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center p-6">
              <span className="text-primary/30 font-black text-4xl uppercase tracking-widest select-none">
                {app.name}
              </span>
              <p className="text-xs text-slate-400 mt-2 font-mono">No feature graphic provided. Save as `public/images/apps/{id}_feature.png`</p>
            </div>
          )}
        </div>

        <div className="p-6 md:p-10">
          {/* Header Block */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-6">
              {/* App Icon */}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-extrabold text-2xl shadow-sm overflow-hidden shrink-0">
                {app.icon ? (
                  <img
                    src={app.icon}
                    alt={`${app.name} Icon`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  app.name ? app.name.split(" ").map(w => w[0]).join("").substring(0, 2) : "AP"
                )}
              </div>
              <div>
                <h1 className="text-3xl font-black text-slate-900 leading-tight mb-2">
                  {app.name}
                </h1>
                <div className="flex flex-wrap gap-3 items-center">
                  <span className="text-slate-400 font-mono text-xs">{app.time}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags?.map((tag, i) => (
                      <span key={i} className="bg-slate-100 border border-slate-200 text-slate-500 text-[9px] px-2 py-0.5 rounded sm:rounded-md uppercase tracking-wider font-bold inline-flex items-center justify-center leading-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {app.techStack && app.techStack.length > 0 && (
                    <>
                      <span className="h-4 w-px bg-slate-200 hidden xs:inline-block"></span>
                      <div className="flex items-center gap-2">
                        {app.techStack.map((tech, i) => {
                          const Icon = getTechIcon(tech);
                          return Icon ? (
                            <div key={i} title={tech} className="text-slate-400 hover:text-slate-600 transition-colors duration-200">
                              <Icon size={16} />
                            </div>
                          ) : null;
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center shrink-0">
              {app.playstore && (
                <a
                  href={app.playstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105 active:scale-95 block shrink-0"
                >
                  <img
                    src="/images/icons/google_play.svg"
                    alt="Get it on Google Play"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              )}
              {app.appstore && (
                <a
                  href={app.appstore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105 active:scale-95 block shrink-0"
                >
                  <img
                    src="/images/icons/app_store.svg"
                    alt="Download on the App Store"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              )}
              {app.appgallery && (
                <a
                  href={app.appgallery}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105 active:scale-95 block shrink-0"
                >
                  <img
                    src="/images/icons/app_gallery.svg"
                    alt="Explore it on AppGallery"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              )}
              {app.apk && (
                <a
                  href={app.apk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:scale-105 active:scale-95 block shrink-0"
                >
                  <img
                    src="/images/icons/apk_download.svg"
                    alt="Download APK"
                    className="h-10 w-auto object-contain"
                  />
                </a>
              )}
            </div>
          </div>

          {/* Screenshots Section */}
          <div className="mb-8">

            {app.screenshots && app.screenshots.length > 0 ? (
              <div
                className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scroll-pl-2 w-full py-4 scrollbar-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {app.screenshots.map((src, index) => (
                  <div key={index} className="w-36 sm:w-60 aspect-[9/16] bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden shadow-sm shrink-0 snap-start snap-always hover:shadow-md transition-all duration-300">
                    <img
                      src={src}
                      alt={`${app.name} Screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-8 text-center max-w-xl">
                <p className="text-slate-500 text-sm font-medium">No screenshots loaded yet.</p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                  Save your portrait screenshot files inside the <code className="bg-slate-100 px-1.5 py-0.5 rounded text-primary font-mono text-[10px]">public/images/apps/</code> folder named as <code className="bg-slate-100 px-1.5 py-0.5 rounded text-primary font-mono text-[10px]">{id}_screenshot1.png</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-primary font-mono text-[10px]">{id}_screenshot2.png</code>, etc. to display them here.
                </p>
              </div>
            )}
          </div>

          {/* Video Section */}
          {app.video && (
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">App Demonstration Video</h3>
                <p className="text-slate-500 text-sm">Watch the video demonstration to see the app in action.</p>
              </div>
              <a
                href={app.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-bold shadow-md flex items-center gap-2 transition-all active:scale-95 shrink-0"
              >
                <FaPlay size={12} /> Watch Demo Video
              </a>
            </div>
          )}

          {/* Info Grid */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800 pb-2 border-b border-slate-100">About the App</h2>
            <div className="text-slate-600 leading-relaxed whitespace-pre-wrap text-sm md:text-base">
              {app.description}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
