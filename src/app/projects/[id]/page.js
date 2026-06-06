import Link from "next/link";
import projectData from "@/data/projects.json";
import { getTechIcon } from "@/utils/techIcons";

export async function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Project Not Found</h1>
        <p className="text-slate-600 mb-6">The project you are looking for does not exist.</p>
        <Link href="/" className="px-6 py-2 bg-primary text-white rounded-full font-semibold shadow-md hover:bg-orange-600 transition-all duration-300">
          Back to Home
        </Link>
      </div>
    );
  }

  const isLinkedInLink = project.link && project.link.startsWith("http") && project.link.includes("linkedin.com");

  return (
    <main className="min-h-screen bg-slate-50 pt-8 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-sm p-8 md:p-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-primary font-bold hover:underline mb-4">
            &larr; Back
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-2">
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-slate-500 font-mono text-sm mr-2">{project.time}</span>
                {project.tags?.map((tag, i) => (
                  <span key={i} className="bg-primary/10 border border-primary/20 text-primary text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {project.image && (
          <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-2xl mb-8 border border-slate-100 bg-slate-50">
            <img
              src={project.image}
              alt={`${project.name} Cover`}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-xl font-bold text-slate-800">Project Story & Details</h2>
              <div className="flex items-center gap-2.5">
                {project.techStack?.map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return Icon ? (
                    <div key={i} title={tech} className="text-primary hover:text-orange-600 transition-colors">
                      <Icon size={20} />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div className="text-slate-600 leading-relaxed text-base whitespace-pre-wrap">
              {project.description}
            </div>
          </div>

          <div className="space-y-6">
            {isLinkedInLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3.5 bg-primary hover:bg-orange-600 text-white rounded-2xl font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                Read in LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
