"use client";

import { useState, useEffect } from "react";
import projectsData from "@/data/projects.json";

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string | null;
  status: string;
  techStack: string[];
  features: string[];
  link?: string;
}

const projects: Project[] = projectsData as Project[];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 max-w-7xl mx-auto" suppressHydrationWarning>
      <div className="text-center mb-16" suppressHydrationWarning>
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-mint-400 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          A selection of my recent freelance work and technical achievements.
        </p>
      </div>

      {/* Projects Grid */}
      <div className={projects.length === 1 ? "flex justify-center" : "grid md:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={`glass rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between ${
              projects.length === 1 ? "max-w-md w-full" : ""
            }`}
          >
            <div>
              <div className="h-48 bg-gradient-to-br from-pink-200 to-violet-200 relative overflow-hidden flex items-center justify-center">
                {project.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-4xl opacity-50">Project {project.id}</span>
                )}
                {project.status && (
                  <span className="absolute top-3 right-3 bg-amber-500/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {project.status}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-foreground">
                  {project.title} <span className="text-sm font-normal text-pink-400">- {project.subtitle}</span>
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">{project.description}</p>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-between items-center">
              <button
                onClick={() => setSelectedProject(project)}
                className="px-5 py-2.5 rounded-full bg-pink-500/10 hover:bg-pink-500 text-pink-400 hover:text-white font-semibold text-sm transition-all shadow-sm hover:shadow-pink-500/30 flex items-center gap-1.5"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Glassmorphic Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass bg-background/90 text-foreground border border-white/20 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-8 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/70 hover:text-foreground hover:bg-white/20 transition-all z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Banner Image */}
            {selectedProject.image && (
              <div className="rounded-2xl overflow-hidden mb-6 h-56 sm:h-64 relative shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-3 left-3 bg-amber-500/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md">
                  {selectedProject.status}
                </div>
              </div>
            )}

            {/* Title & Subtitle */}
            <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-2">
              {selectedProject.title} <span className="text-xl font-medium text-foreground/80">- {selectedProject.subtitle}</span>
            </h3>

            {/* Full Description */}
            <p className="text-foreground/80 leading-relaxed mb-6 text-base sm:text-lg">
              {selectedProject.fullDescription}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h4 className="text-lg font-bold text-pink-400 mb-3">Key Features</h4>
              <ul className="space-y-2 text-foreground/80 text-sm sm:text-base">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/5">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-violet-400 mb-3">Tech Stack & Frameworks</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full glass bg-white/10 text-xs sm:text-sm font-semibold text-foreground/90 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 rounded-full bg-pink-500 text-white text-center font-semibold hover:bg-pink-600 transition-all hover:scale-105 shadow-lg shadow-pink-500/30"
              >
                Inquire About Similar Project
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-3 rounded-full glass bg-white/10 text-foreground font-semibold hover:bg-white/20 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
