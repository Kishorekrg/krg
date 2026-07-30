import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using FormSubmit for simple email without backend
      const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_DATA.personal.email}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">07. Direct Communication</span>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f4f5] font-heading">Contact Me</h2>
          <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="p-5 rounded-2xl bg-[#121215] border border-stone-800 hover:border-[#9847B4]/60 transition-all duration-300 flex items-center gap-4 group shadow-xl"
            >
              <div className="p-3.5 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4] group-hover:bg-[#9847B4] group-hover:text-[#ffffff] transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#a1a1aa] block">Email</span>
                <span className="text-sm font-semibold text-[#f4f4f5] group-hover:text-[#DDC2F2] transition-colors">
                  {PORTFOLIO_DATA.personal.email}
                </span>
              </div>
            </a>

            <a
              href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
              className="p-5 rounded-2xl bg-[#121215] border border-stone-800 hover:border-[#9847B4]/60 transition-all duration-300 flex items-center gap-4 group shadow-xl"
            >
              <div className="p-3.5 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4] group-hover:bg-[#9847B4] group-hover:text-[#ffffff] transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#a1a1aa] block">Phone</span>
                <span className="text-sm font-semibold text-[#f4f4f5] group-hover:text-[#DDC2F2] transition-colors">
                  {PORTFOLIO_DATA.personal.phone}
                </span>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-[#121215] border border-stone-800 flex items-center gap-4 shadow-xl">
              <div className="p-3.5 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#a1a1aa] block">Location</span>
                <span className="text-sm font-semibold text-[#f4f4f5]">
                  {PORTFOLIO_DATA.personal.location}
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#121215] border border-stone-800 space-y-3 shadow-xl">
              <span className="text-xs font-mono text-[#a1a1aa] block">Social & Code Profiles</span>
              <div className="flex gap-3">
                <a
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3.5 rounded-xl bg-[#16161a] border border-stone-800 hover:border-[#9847B4]/60 text-xs font-mono text-[#f4f4f5] flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-[#9847B4]" />
                  GitHub Profile
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3.5 rounded-xl bg-[#16161a] border border-stone-800 hover:border-[#9847B4]/60 text-xs font-mono text-[#f4f4f5] flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#9847B4]" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121215] border border-stone-800 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-[#f4f4f5] font-heading">Send Message</h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-stone-900 border border-[#9847B4]/40 space-y-3 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#9847B4] mx-auto" />
                  <h4 className="text-lg font-bold text-[#f4f4f5]">Message Sent Successfully</h4>
                  <p className="text-xs text-[#a1a1aa]">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-[#16161a] border border-stone-800 text-xs text-[#f4f4f5] hover:border-[#9847B4]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-[#16161a] border border-stone-800 text-sm text-[#f4f4f5] focus:outline-none focus:border-[#9847B4]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#16161a] border border-stone-800 text-sm text-[#f4f4f5] focus:outline-none focus:border-[#9847B4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Subject / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#16161a] border border-stone-800 text-sm text-[#f4f4f5] focus:outline-none focus:border-[#9847B4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#a1a1aa] mb-1.5">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-[#16161a] border border-stone-800 text-sm text-[#f4f4f5] focus:outline-none focus:border-[#9847B4] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#9847B4] hover:bg-[#83389e] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-[#9847B4]/20 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

