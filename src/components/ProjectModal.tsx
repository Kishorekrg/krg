import React from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Cpu, Layers, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-[#121215] border border-stone-800 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-[#16161a]">
          <div className="flex items-center gap-2 font-mono text-xs text-[#DDC2F2]">
            <Terminal className="w-4 h-4 text-[#9847B4]" />
            <span>ROS 2 ARCHITECTURE SPEC // {project.id.toUpperCase()}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#09090b] hover:bg-stone-800 text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <span className="text-xs font-mono text-[#DDC2F2] uppercase">{project.category}</span>
            <h3 className="text-2xl font-bold text-[#f4f4f5] font-heading mt-1">{project.title}</h3>
          </div>

          <div className="rounded-xl border border-stone-800 overflow-hidden bg-[#09090b]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 sm:h-72 object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#DDC2F2] mb-2 uppercase tracking-wider">Engineering Overview</h4>
            <p className="text-sm text-[#e4e4e7] leading-relaxed">{project.fullDescription}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#DDC2F2] mb-3 uppercase tracking-wider">Key Highlights & Features</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#e4e4e7] p-2.5 rounded-lg bg-[#16161a] border border-stone-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9847B4] mt-1.5 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#09090b] border border-stone-800 space-y-3 font-mono text-xs">
            <h4 className="text-xs font-bold text-[#f4f4f5] flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#9847B4]" />
              ROS 2 Package Execution Specs
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-stone-500 block mb-1">Active ROS 2 Nodes:</span>
                <div className="flex flex-wrap gap-1">
                  {project.architectureDetails.nodes.map((node, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#16161a] text-[#DDC2F2] border border-stone-800">
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-stone-500 block mb-1">Target Platform:</span>
                <span className="text-[#f4f4f5] block">{project.architectureDetails.hardwareTarget}</span>
              </div>

              <div>
                <span className="text-stone-500 block mb-1">Primary Topics:</span>
                <div className="flex flex-wrap gap-1">
                  {project.architectureDetails.topics.map((topic, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-[#16161a] text-[#DDC2F2] border border-stone-800">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-stone-500 block mb-1">Simulation Environment:</span>
                <span className="text-[#f4f4f5] block">{project.architectureDetails.simulationEnv}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono text-[#a1a1aa] mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md bg-[#16161a] border border-stone-800 text-xs font-mono text-[#DDC2F2]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-stone-800 bg-[#16161a]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#9847B4] hover:bg-[#83389e] text-white font-semibold text-xs transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            View Repository Code
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#09090b] border border-stone-800 text-xs font-medium text-[#a1a1aa] hover:text-[#f4f4f5]"
          >
            Close Spec
          </button>
        </div>
      </div>
    </div>
  );
};

