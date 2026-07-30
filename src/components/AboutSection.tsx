import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Shield, Compass, Cpu, Layers, Eye, Network, Flame, Bot } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const about = PORTFOLIO_DATA.about;

  const interestIcons = [
    { title: "Autonomous Mobile Robots", icon: Bot },
    { title: "Robot Navigation", icon: Compass },
    { title: "SLAM", icon: Layers },
    { title: "Robot Modeling", icon: Cpu },
    { title: "Computer Vision", icon: Eye },
    { title: "Multi-Robot Systems", icon: Network },
    { title: "Defence Robotics", icon: Shield },
    { title: "Industrial Automation", icon: Flame }
  ];

  return (
    <section id="about" className="py-24 bg-[#09090b] border-y border-stone-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">01. Overview</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f4f5] font-heading">{about.heading}</h2>
          <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-stone-800 space-y-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-[#16161a] border border-[#9847B4]/40 text-[#9847B4] shrink-0 shadow-lg">
                  <Bot className="w-8 h-8 text-[#9847B4]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f4f4f5] font-heading">{PORTFOLIO_DATA.personal.name}</h3>
                  <span className="text-xs font-mono text-[#DDC2F2]">Robotics & Automation Engineer</span>
                  <p className="text-xs text-[#a1a1aa] mt-1 font-mono">Anna University | Expected 2027</p>
                </div>
              </div>

              <p className="text-[#e4e4e7] text-base sm:text-lg leading-relaxed whitespace-pre-line border-t border-stone-800/80 pt-4">
                {about.paragraph}
              </p>

              <div className="pt-2 flex items-center gap-3 text-xs font-mono text-[#a1a1aa] border-t border-stone-800/80">
                <span className="w-2 h-2 rounded-full bg-[#9847B4] animate-pulse"></span>
                <span>Active B.E. Robotics & Automation Student (Anna University)</span>
              </div>
            </div>
          </motion.div>

          {/* Core Interests Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="text-sm font-mono text-[#a1a1aa] uppercase tracking-wider mb-2">
              Key Engineering Interests:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {about.interests.map((interest, idx) => {
                const IconObj = interestIcons.find((item) => item.title === interest)?.icon || Bot;
                return (
                  <motion.div
                    key={interest}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 rounded-xl bg-[#16161a] border border-stone-800 hover:border-[#9847B4]/50 transition-all flex items-center gap-3.5 group"
                  >
                    <div className="p-2.5 rounded-lg bg-[#09090b] border border-stone-800 text-[#9847B4] group-hover:bg-[#9847B4] group-hover:text-[#ffffff] transition-colors">
                      <IconObj className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#f4f4f5] font-sans">
                      {interest}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
