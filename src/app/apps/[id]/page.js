import Link from "next/link";
import appsData from "@/data/apps.json";
import { getTechIcon } from "@/utils/techIcons";

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
    <main className="min-h-screen bg-slate-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-sm p-8 md:p-12">
        <Link href="/" className="inline-flex items-center text-primary font-bold hover:underline mb-8">
          &larr; Back to Portfolio
        </Link>

        {/* Header Block */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between pb-8 border-b border-slate-100 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-extrabold text-3xl shadow-sm shrink-0">
              {app.name ? app.name.split(" ").map(w => w[0]).join("").substring(0, 2) : "AP"}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                {app.name}
              </h1>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-slate-500 font-mono text-sm mr-2">{app.time}</span>
                {app.tags?.map((tag, i) => (
                  <span key={i} className="bg-primary/10 border border-primary/20 text-primary text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {app.link && app.link !== "#" && (
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-orange-600 text-white rounded-2xl font-bold shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Project / Post
            </a>
          )}
        </div>

        {/* Screenshots Placeholder Section */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">App Screenshots</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="aspect-[9/16] bg-slate-50 border border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center p-4">
                <span className="text-2xl text-slate-300 mb-2 font-black">#0{num}</span>
                <span className="text-xs text-slate-400 font-medium">Screenshot Placeholder</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-800 pb-2 border-b border-slate-100">About the App</h2>
            <div className="text-slate-600 leading-relaxed text-lg whitespace-pre-wrap">
              {app.description}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-800 mb-4 text-lg">Tech Stack</h3>
              <div className="flex flex-col gap-3">
                {app.techStack?.map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <div key={i} className="flex items-center gap-3 text-slate-700 bg-white border border-slate-100 px-4 py-2.5 rounded-xl shadow-sm">
                      {Icon && <Icon className="text-primary" size={20} />}
                      <span className="font-medium text-sm">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
