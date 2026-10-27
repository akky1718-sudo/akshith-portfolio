import React, { useEffect, useRef } from 'react';
import { 
  X, 
  Shield, 
  Layers, 
  CheckCircle2, 
  Lock, 
  AlertCircle,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);

  // Close on Escape key press & prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-3xl rounded-2xl bg-[#0c1322] border border-slate-700/80 shadow-2xl overflow-hidden p-6 sm:p-8 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-750 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:ring-2 focus:ring-cyan-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-3">
          <Shield className="w-3.5 h-3.5" />
          <span>{project.category}</span>
        </div>

        {/* Modal Title */}
        <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white pr-10">
          {project.title}
        </h2>
        <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
          {project.tagline}
        </p>

        {/* Technologies Pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 space-y-6">
          {/* Detailed Work Section */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Project Implementation Summary</span>
            </h3>
            <div className="space-y-3">
              {project.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Relevance Section */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-cyan-500/30 relative overflow-hidden">
            <div className="flex items-center gap-2 text-sm font-semibold text-cyan-300 mb-2 font-mono">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Cybersecurity & Technical Relevance</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.securityRelevance}
            </p>
          </div>

          {/* Highlights List */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Key Architectural Work</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              {project.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyan-400" />
            <span>Academic & Student Portfolio Showcase</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>View Repository</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800">
                <GithubIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>Repository on Request</span>
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
