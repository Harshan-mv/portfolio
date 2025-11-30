import React from "react";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-[999] px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          {project.title}
        </h2>

        {/* Short description */}
        <p className="text-slate-700 mb-4">{project.description}</p>

        {/* 🎯 TOP LINKS (NEW LOCATION) */}
        {(project.github || project.live) && (
          <div className="flex gap-4 mb-8">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-slate-700 transition"
              >
                GitHub Repo
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                className="px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:bg-primary/90 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        )}

        {/* Overview */}
        {project.longDescription && (
          <>
            <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2">
              Overview
            </h3>
            <p className="text-slate-700 whitespace-pre-line">
              {project.longDescription}
            </p>
          </>
        )}

        {/* Why Built */}
        {project.whyBuilt && (
          <>
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
              Why I Built This
            </h3>
            <p className="text-slate-700 whitespace-pre-line">
              {project.whyBuilt}
            </p>
          </>
        )}

        {/* Problem Solved */}
        {project.problemSolved && (
          <>
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
              Problem This Solves
            </h3>
            <p className="text-slate-700 whitespace-pre-line">
              {project.problemSolved}
            </p>
          </>
        )}

        {/* Features */}
        {project.features && (
          <>
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
              Key Features
            </h3>
            <ul className="list-disc pl-6 text-slate-700">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </>
        )}

        {/* Challenges */}
        {project.challenges && (
          <>
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
              Challenges Faced
            </h3>
            <ul className="list-disc pl-6 text-slate-700">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </>
        )}

        {/* Tech Stack */}
        {project.techStack && (
          <>
            <h3 className="text-xl font-bold text-slate-900 mt-6 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium text-slate-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}
