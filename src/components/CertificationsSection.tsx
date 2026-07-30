import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">Verified Training & Industry Certificates</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#f4f4f5] font-heading">Certifications</h2>
          <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#121215] border border-stone-800 hover:border-[#9847B4]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4] w-fit mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#f4f4f5]">{cert.title}</h3>
                <p className="text-xs text-[#a1a1aa] mt-1 font-mono">{cert.issuer}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-[#DDC2F2]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#9847B4]" />
                  {cert.date}
                </span>
                <span className="text-[#a1a1aa]">Completed</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

