import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Bot, FileText, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-stone-800 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#16161a] border border-stone-800 flex items-center justify-center text-[#9847B4] group-hover:border-[#9847B4] transition-colors">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-[#f4f4f5] tracking-tight block">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <span className="text-xs font-mono text-[#a1a1aa] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Robotics & ROS 2 Engineer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#a1a1aa] hover:text-[#DDC2F2] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#16161a] hover:bg-stone-900 border border-stone-800 hover:border-[#9847B4] text-xs font-mono text-[#f4f4f5] transition-all duration-200"
          >
            <FileText className="w-4 h-4 text-[#DDC2F2]" />
            Resume PDF
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-[#16161a] border border-stone-800 text-[#a1a1aa] hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121215] border-b border-stone-800 px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#a1a1aa] hover:text-[#DDC2F2] px-2 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-800 flex flex-col gap-2">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#9847B4] text-white font-semibold text-sm"
              >
                <FileText className="w-4 h-4" />
                Open Resume PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

