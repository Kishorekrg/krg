import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Mail, ArrowDown, FolderGit2, Compass, Cpu, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const HeroSection: React.FC = () => {
  const titles = PORTFOLIO_DATA.personal.heroTitles;
  const [titleIndex, setTitleIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Rotating title animation every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [titles.length]);

  // Subtle interactive LiDAR / Coordinate Frame canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angle = 0;

    const resize = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || 600;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width * 0.75;
      const centerY = canvas.height * 0.5;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw LiDAR Scan Ring (Electric Purple Accent)
      ctx.strokeStyle = 'rgba(152, 71, 180, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.65, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.3, 0, Math.PI * 2);
      ctx.stroke();

      // Rotating LiDAR Sweep Ray
      angle += 0.01;
      const endX = centerX + Math.cos(angle) * radius;
      const endY = centerY + Math.sin(angle) * radius;

      const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY);
      gradient.addColorStop(0, 'rgba(152, 71, 180, 0.35)');
      gradient.addColorStop(1, 'rgba(152, 71, 180, 0.0)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Subtle Robot Origin Crosshair
      ctx.strokeStyle = 'rgba(152, 71, 180, 0.45)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerX - 10, centerY);
      ctx.lineTo(centerX + 10, centerY);
      ctx.moveTo(centerX, centerY - 10);
      ctx.lineTo(centerX, centerY + 10);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-[#09090b]">
      {/* Background Canvas & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <canvas ref={canvasRef} className="w-full h-full opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Information */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 space-y-7"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16161a] border border-[#9847B4]/30 text-xs font-mono text-[#DDC2F2]">
              <span className="w-2 h-2 rounded-full bg-[#9847B4] animate-pulse"></span>
              <span>ROS 2 Autonomous Systems Specialist</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f4f4f5] font-heading">
              {PORTFOLIO_DATA.personal.name}
            </h1>

            {/* Rotating Role Text Animation */}
            <div className="h-12 sm:h-14 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={titles[titleIndex]}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="text-xl sm:text-3xl font-semibold text-[#DDC2F2] font-mono tracking-tight flex items-center gap-2"
                >
                  <Cpu className="w-6 h-6 text-[#9847B4]" />
                  <span>{titles[titleIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Exact Required Bio */}
            <p className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-3xl border-l-2 border-[#9847B4]/50 pl-4 py-1">
              {PORTFOLIO_DATA.personal.heroBio}
            </p>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#9847B4] hover:bg-[#83389e] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#9847B4]/25"
              >
                <FileText className="w-4 h-4" />
                Download Resume
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#16161a] hover:bg-[#202025] border border-stone-800 hover:border-[#9847B4]/60 text-sm font-medium text-[#f4f4f5] transition-all duration-200"
              >
                <FolderGit2 className="w-4 h-4 text-[#DDC2F2]" />
                View Projects
              </a>

              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#16161a] hover:bg-[#202025] border border-stone-800 hover:border-[#9847B4]/60 text-sm font-medium text-[#f4f4f5] transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4 text-[#DDC2F2]" />
                GitHub
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#16161a] hover:bg-[#202025] border border-stone-800 hover:border-[#9847B4]/60 text-sm font-medium text-[#f4f4f5] transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4 text-[#DDC2F2]" />
                LinkedIn
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#16161a] hover:bg-[#202025] border border-stone-800 hover:border-[#9847B4]/60 text-sm font-medium text-[#f4f4f5] transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#DDC2F2]" />
                Contact Me
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-transparent hover:bg-[#16161a]/60 text-xs font-mono text-[#a1a1aa] hover:text-[#DDC2F2] transition-colors"
              >
                <span>Quick Links</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#9847B4]" />
              </a>
            </div>

            {/* Environment Metrics */}
            <div className="pt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-[#a1a1aa]">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#9847B4]" />
                <span>ROS 2 Jazzy & Gazebo Harmonic</span>
              </div>
              <span className="text-stone-700">|</span>
              <div>Tamil Nadu, India</div>
              <span className="text-stone-700">|</span>
              <div>B.E. Robotics & Automation ('27)</div>
            </div>

          </motion.div>

          {/* Right Card / Technical Spec Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-sm rounded-2xl bg-[#121215] border border-stone-800 p-6 space-y-5 shadow-2xl">
              {/* ROS 2 Telemetry Header Badge */}
              <div className="p-5 rounded-xl border border-[#9847B4]/40 bg-[#16161a] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#DDC2F2]">
                    <Cpu className="w-4 h-4 text-[#9847B4]" />
                    <span>ROS 2 JAZZY CORE</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#9847B4]/20 text-[#DDC2F2] border border-[#9847B4]/40 text-[10px] font-mono">
                    ACTIVE
                  </span>
                </div>
                <div className="font-mono text-xs text-[#f4f4f5] font-bold">
                  {PORTFOLIO_DATA.personal.name}
                </div>
                <div className="text-[11px] font-mono text-[#a1a1aa]">
                  Robotics Software & Autonomous Navigation
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-stone-800/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9847B4] animate-pulse"></span>
                  <span className="text-xs font-mono text-[#f4f4f5]">SYSTEM_STATUS: ONLINE</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-[#a1a1aa]">v2.4.0</span>
              </div>

              {/* System Overview Details */}
              <div className="space-y-3 font-mono text-xs text-[#a1a1aa]">
                <div className="flex justify-between py-1.5 border-b border-stone-800/40">
                  <span>Stack:</span>
                  <span className="text-[#f4f4f5]">ROS 2 / Nav2 / SLAM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800/40">
                  <span>Simulation:</span>
                  <span className="text-[#f4f4f5]">Gazebo Harmonic</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800/40">
                  <span>Vision:</span>
                  <span className="text-[#f4f4f5]">OpenCV / MediaPipe</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-800/40">
                  <span>Target Field:</span>
                  <span className="text-[#DDC2F2]">Autonomous Robotics & Defence</span>
                </div>
              </div>

              {/* Terminal Code Snippet Graphic */}
              <div className="p-3.5 rounded-xl bg-[#09090b] border border-stone-800/80 text-[11px] font-mono text-stone-400 space-y-1">
                <div className="text-[#DDC2F2]">$ ros2 launch mobile_robot nav2.launch.py</div>
                <div className="text-stone-500">[INFO] Lifecycle manager: Activating nodes...</div>
                <div className="text-[#9847B4]">[INFO] AMCL pose converged: (x: 0.0, y: 0.0)</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
