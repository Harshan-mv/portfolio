import React, { useState, useEffect, useRef } from "react";
import { PROJECTS, DETAILED_PROJECTS } from "../constants";
import { ExternalLink, Layers } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { trackEvent } from "../analytics/analytics";

const EXPERIMENT_NAME = "project_card_cta_v1";

/* ----------------------------------------
   Sticky variant per user (correct A/B)
---------------------------------------- */
function getUserVariant() {
  const key = `exp_${EXPERIMENT_NAME}`;
  let v = localStorage.getItem(key);
  if (!v) {
    v = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem(key, v);
  }
  return v;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const variant = getUserVariant();

  // Prevent duplicate exposure events
  const viewedProjectsRef = useRef(new Set());

  /* ----------------------------------------
     Track exposure ONCE per project
  ---------------------------------------- */
  useEffect(() => {
    PROJECTS.forEach((project) => {
      if (!viewedProjectsRef.current.has(project.title)) {
        viewedProjectsRef.current.add(project.title);

        trackEvent("experiment_view", {
          experiment: EXPERIMENT_NAME,
          variant,
          project_title: project.title
        });
      }
    });
  }, [variant]);

  /* ----------------------------------------
     Conversion = opening project modal
  ---------------------------------------- */
  const openProjectDetails = (project) => {
    trackEvent("experiment_click", {
      experiment: EXPERIMENT_NAME,
      variant,
      project_title: project.title
    });

    setSelectedProject(project);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide uppercase mb-3">
            <Layers size={14} /> Portfolio
          </div>
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A selection of my work in Full-Stack Development, CI/CD, Hosting, & API Testing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => openProjectDetails(project)}
                    className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-primary hover:text-white"
                  >
                    {variant === "A" ? "View Details" : "Explore Project"}
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                  {project.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-600"
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
        <ProjectModal
          project={DETAILED_PROJECTS.find(
            (p) => p.title === selectedProject.title
          )}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
