import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const edu = PORTFOLIO_DATA.education;

  return (
    <section id="education" className="py-24 bg-[#09090b] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">02. Academic Background</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f4f5] font-heading">Education</h2>
          <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-[#121215] border border-stone-800 space-y-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-stone-800 pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4] shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[#f4f4f5] font-heading">{edu.degree}</h3>
                <p className="text-lg font-medium text-[#DDC2F2]">{edu.institution}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#16161a] border border-stone-800 text-xs font-mono text-[#a1a1aa] w-fit">
              <Calendar className="w-4 h-4 text-[#9847B4]" />
              <span>{edu.graduation}</span>
            </div>
          </div>

          {/* Relevant Coursework Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-mono text-[#a1a1aa] uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#9847B4]" />
              <span>Relevant Coursework</span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {edu.coursework.map((course, idx) => (
                <motion.span
                  key={course}
                  whileHover={{ scale: 1.03 }}
                  className="px-4 py-2 rounded-xl bg-[#16161a] border border-stone-800 hover:border-[#9847B4]/60 text-xs sm:text-sm font-sans font-medium text-[#f4f4f5] transition-all shadow-sm"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
