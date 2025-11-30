import React, { useState } from "react";
import { PROJECTS, DETAILED_PROJECTS } from "../constants";
import { ExternalLink, Layers } from "lucide-react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const getTagColor = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes("ai") || t.includes("mern")) return "bg-purple-100 text-purple-700";
    if (t.includes("payment") || t.includes("security")) return "bg-emerald-100 text-emerald-700";
    if (t.includes("react") || t.includes("travel")) return "bg-blue-100 text-blue-700";
    if (t.includes("node") || t.includes("api")) return "bg-green-100 text-green-700";
    return "bg-slate-100 text-slate-600";
  };

  const openProjectDetails = (title) => {
    const full = DETAILED_PROJECTS.find(p => p.title === title);
    if (full) setSelectedProject(full);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide uppercase mb-3">
            <Layers size={14} /> Portfolio
          </div>
          <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A selection of my work in Full-Stack Development, CI/CD, Hosting, & API Testing.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              {/* Card Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />


                {/* View Details */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => openProjectDetails(project.title)}
                    className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center gap-2 hover:bg-primary hover:text-white"
                  >
                    View Details <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2.5 py-1 rounded-md ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
