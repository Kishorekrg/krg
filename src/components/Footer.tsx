import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Bot, FileText, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#16161a] border border-stone-800 flex items-center justify-center text-[#9847B4]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading font-bold text-base text-[#f4f4f5]">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-xs text-[#a1a1aa] block font-mono">
                Robotics Engineer & ROS 2 Developer
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#16161a] border border-stone-800 hover:border-[#9847B4] text-[#e4e4e7] hover:text-[#DDC2F2] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#16161a] border border-stone-800 hover:border-[#9847B4] text-[#e4e4e7] hover:text-[#DDC2F2] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-[#16161a] border border-stone-800 hover:border-[#9847B4] text-xs font-mono text-[#f4f4f5] flex items-center gap-1.5 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#9847B4]" />
              Resume PDF
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#a1a1aa]">
            <span>© {new Date().getFullYear()} Kishore Ram G. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#16161a] border border-stone-800 text-[#a1a1aa] hover:text-[#f4f4f5] hover:border-[#9847B4] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

