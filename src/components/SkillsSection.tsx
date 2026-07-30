import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Cpu, Box, Eye, Code, Terminal, Check } from 'lucide-react';

const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  Robotics: Cpu,
  Simulation: Box,
  "Computer Vision": Eye,
  Programming: Code,
  "Design & Tools": Terminal
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">03. Technical Capabilities</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f4f5] font-heading">Skills</h2>
          <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillCategories.map((category, idx) => {
            const IconComp = categoryIcons[category.title] || Cpu;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#121215] border border-stone-800 hover:border-[#9847B4]/50 transition-all duration-300 space-y-5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-stone-800/80">
                    <div className="p-3 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#f4f4f5]">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Tag List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#16161a] border border-stone-800 text-xs font-sans font-medium text-[#e4e4e7] hover:text-[#DDC2F2] hover:border-stone-700 transition-colors"
                      >
                        <Check className="w-3 h-3 text-[#9847B4]" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-800/50 flex items-center justify-between text-[11px] font-mono text-[#a1a1aa]">
                  <span>{category.skills.length} Competencies</span>
                  <span className="text-[#DDC2F2]">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
