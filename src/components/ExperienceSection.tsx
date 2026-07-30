import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldAlert, Trophy } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const activities = PORTFOLIO_DATA.roboticsActivities;

  return (
    <section id="experience" className="py-24 bg-[#09090b] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Timeline Part */}
        <div>
          {/* Section Header */}
          <div className="space-y-3 mb-12">
            <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">04. Industrial Training & Experience</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f4f5] font-heading">Experience</h2>
            <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
          </div>

          {/* Professional Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l border-stone-800 space-y-10 max-w-4xl">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot Node */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#09090b] border-2 border-[#9847B4] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#9847B4]"></div>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-stone-800 space-y-4 shadow-xl hover:border-stone-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#f4f4f5] font-heading">{exp.role}</h3>
                      <p className="text-sm font-medium text-[#DDC2F2] mt-0.5">{exp.company}</p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#a1a1aa] shrink-0">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#16161a] border border-stone-800">
                        <Calendar className="w-3.5 h-3.5 text-[#9847B4]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#16161a] border border-stone-800">
                        <MapPin className="w-3.5 h-3.5 text-[#9847B4]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 pt-1">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#e4e4e7] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#9847B4] shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md bg-[#16161a] border border-stone-800 text-xs font-mono text-[#a1a1aa]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hands-on Robotics Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-2xl bg-[#121215] border border-stone-800 space-y-6 shadow-xl max-w-4xl"
        >
          <div className="flex items-center gap-3 border-b border-stone-800 pb-4">
            <div className="p-3 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4]">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#f4f4f5] font-heading">{activities.title}</h3>
              <p className="text-xs font-mono text-[#a1a1aa]">Robotics Competitions & Applied Prototyping</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {activities.events.map((event) => (
              <div
                key={event}
                className="p-3.5 rounded-xl bg-[#16161a] border border-stone-800 text-center font-mono text-xs font-semibold text-[#f4f4f5] hover:border-[#9847B4]/60 transition-all"
              >
                {event}
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-[#e4e4e7] leading-relaxed border-l-2 border-[#9847B4]/50 pl-4 py-1">
            {activities.description}
          </p>
        </motion.div>

      </div>
    </section>
  );
};
