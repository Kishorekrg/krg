import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { motion } from 'framer-motion';
import { Info, ArrowUpRight, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">05. Featured Engineering Work</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f4f5] font-heading">Featured Projects</h2>
          <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-2xl bg-[#121215] border border-stone-800 hover:border-[#9847B4]/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Project Banner Image */}
                <div className="relative aspect-video bg-[#16161a] overflow-hidden border-b border-stone-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100 filter brightness-95"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#09090b]/80 backdrop-blur-md border border-stone-800 text-[10px] font-mono text-[#DDC2F2]">
                    ROS 2 Jazzy
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  <span className="text-[11px] font-mono text-[#DDC2F2] uppercase tracking-wider">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold text-[#f4f4f5] font-heading group-hover:text-[#DDC2F2] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-3">
                    {project.shortOverview}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#16161a] border border-stone-800 text-[11px] font-mono text-[#e4e4e7]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-stone-900 text-[10px] font-mono text-[#a1a1aa]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-800/40 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#DDC2F2] hover:text-[#9847B4] transition-colors py-2"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Architecture Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#16161a] hover:bg-[#202025] border border-stone-800 text-[#f4f4f5] hover:text-[#DDC2F2] transition-colors"
                  aria-label="View Code on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

