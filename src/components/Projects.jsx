import React, { useState } from 'react';
import { 
  FolderGit2, 
  ArrowRight, 
  Lock, 
  Boxes,
  FileSearch,
  Check
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PROJECT SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Security & Development Projects
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Technical projects emphasizing cryptographic integrity in logistics and hybrid machine learning for threat detection.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => {
            const isBlockchain = project.id === 'eco-chain-shipping';

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-cyan-500/10"
              >
                <div>
                  {/* Visual Concept Banner */}
                  <div className="relative h-48 sm:h-52 bg-gradient-to-br from-slate-900 via-[#0a1424] to-slate-950 p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
                    
                    {/* Background SVG Grid / Pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none cyber-grid"></div>

                    {/* Abstract Technical Graphic */}
                    {isBlockchain ? (
                      /* Supply Chain & Blockchain Concept */
                      <div className="absolute right-4 bottom-2 opacity-25 group-hover:opacity-40 transition-opacity">
                        <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="10" y="25" width="50" height="40" rx="6" stroke="#38bdf8" strokeWidth="2" fill="#0c1a2e" />
                          <rect x="85" y="25" width="50" height="40" rx="6" stroke="#10b981" strokeWidth="2" fill="#0c1a2e" />
                          <rect x="160" y="25" width="50" height="40" rx="6" stroke="#38bdf8" strokeWidth="2" fill="#0c1a2e" />
                          <line x1="60" y1="45" x2="85" y2="45" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
                          <line x1="135" y1="45" x2="160" y2="45" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                          <circle cx="35" cy="45" r="4" fill="#38bdf8" />
                          <circle cx="110" cy="45" r="4" fill="#10b981" />
                          <circle cx="185" cy="45" r="4" fill="#38bdf8" />
                          <path d="M35 65 L110 100 L185 65" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 4" />
                        </svg>
                      </div>
                    ) : (
                      /* Phishing Detection Concept */
                      <div className="absolute right-4 bottom-2 opacity-25 group-hover:opacity-40 transition-opacity">
                        <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M110 15 L170 35 V75 C170 105 110 120 110 120 C110 120 50 105 50 75 V35 L110 15 Z" stroke="#38bdf8" strokeWidth="2" fill="#0c1a2e" />
                          <circle cx="110" cy="65" r="22" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                          <path d="M102 65 L108 71 L120 59" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="15" y1="40" x2="45" y2="55" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 3" />
                          <line x1="205" y1="40" x2="175" y2="55" stroke="#38bdf8" strokeWidth="1" strokeDasharray="2 3" />
                        </svg>
                      </div>
                    )}

                    {/* Top Row: Category & Security Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-mono text-cyan-300">
                        {isBlockchain ? <Boxes className="w-3.5 h-3.5 text-cyan-400" /> : <FileSearch className="w-3.5 h-3.5 text-emerald-400" />}
                        <span>{project.category}</span>
                      </div>

                      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800">
                        <Lock className="w-3 h-3 text-cyan-400" />
                        <span>Security Concept</span>
                      </div>
                    </div>

                    {/* Bottom Row on Banner: Title preview */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-1 font-mono">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="mb-6">
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights list */}
                    <div className="space-y-2 border-t border-slate-800 pt-4">
                      {project.keyHighlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Interaction */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-xs font-mono text-slate-400">
                    {project.technologies.length} Components
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Project Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
