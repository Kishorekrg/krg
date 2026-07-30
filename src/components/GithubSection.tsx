import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface GithubRepo {
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  updated_at: string;
}

export const GithubSection: React.FC = () => {
  const gh = PORTFOLIO_DATA.github;
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${gh.username}/repos?sort=updated&per_page=6`);
        if (response.ok) {
          const data = await response.json();
          // Filter out forks and get top ones, or just use latest
          const publicRepos = data.filter((repo: any) => !repo.fork).slice(0, 4);
          setRepos(publicRepos);
        } else {
          console.error("Failed to fetch repos");
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRepos();
  }, [gh.username]);

  return (
    <section id="github" className="py-24 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#DDC2F2] tracking-widest uppercase">06. Open Source Code</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#f4f4f5] font-heading">GitHub Repositories</h2>
            <div className="w-12 h-1 bg-[#9847B4] rounded-full"></div>
          </div>

          <a
            href={gh.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#16161a] hover:bg-[#202025] border border-stone-800 hover:border-[#9847B4]/60 text-sm font-semibold text-[#f4f4f5] transition-all shadow-md shrink-0 w-fit"
          >
            <GithubIcon className="w-5 h-5 text-[#9847B4]" />
            <span>Follow @{gh.username}</span>
            <ExternalLink className="w-4 h-4 text-[#a1a1aa]" />
          </a>
        </div>

        {/* GitHub Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-6 rounded-2xl bg-[#121215] border border-stone-800 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4]">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-[#f4f4f5]">{gh.publicRepos}</span>
              <span className="text-xs text-[#a1a1aa] block font-mono">Public Repositories</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-stone-800 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4]">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-[#f4f4f5]">36+</span>
              <span className="text-xs text-[#a1a1aa] block font-mono">Total Stars</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-stone-800 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4]">
              <GitFork className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-[#f4f4f5]">11+</span>
              <span className="text-xs text-[#a1a1aa] block font-mono">Forks</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#121215] border border-stone-800 flex items-center gap-4 shadow-xl">
            <div className="p-3 rounded-xl bg-[#16161a] border border-stone-800 text-[#9847B4]">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-bold font-mono text-[#f4f4f5]">Python / C++</span>
              <span className="text-xs text-[#a1a1aa] block font-mono">Core Tech</span>
            </div>
          </div>
        </div>

        {/* Featured Repositories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-1 md:col-span-2 py-10 flex justify-center">
              <div className="w-8 h-8 border-2 border-[#9847B4] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            (repos.length > 0 ? repos : gh.featuredRepos.map(r => ({
              name: r.name,
              description: r.description,
              language: r.language,
              stargazers_count: r.stars,
              forks_count: r.forks,
              html_url: r.url
            }))).map((repo, idx) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#121215] border border-stone-800 hover:border-[#9847B4]/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-base font-bold text-[#f4f4f5] hover:text-[#DDC2F2] transition-colors"
                    >
                      <FolderGit2 className="w-5 h-5 text-[#9847B4] shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </a>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#16161a] hover:bg-stone-800 text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-2">
                    {repo.description || 'No description provided.'}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs font-mono text-[#a1a1aa]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9847B4]"></span>
                    <span>{repo.language || 'Code'}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-[#f4f4f5]">
                      <Star className="w-3.5 h-3.5 text-[#9847B4]" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-[#f4f4f5]">
                      <GitFork className="w-3.5 h-3.5 text-stone-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

