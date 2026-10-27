import React from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  CheckCircle2, 
  Calendar,
  Layers
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const exp = experienceData[0];

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#060a14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>TRAINING & LAB PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Cybersecurity Experience
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Structured practical learning and laboratory practice in penetration testing tools, network inspection, and vulnerability assessment methodologies.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
            
            {/* Pulsating timeline node */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#070c18] shadow-md shadow-cyan-400/50"></div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 mb-2">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Trainee Summary */}
              <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Resume Points */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Hands-On Learning & Responsibilities
                </h4>
                {exp.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800/90">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Trainee Tools Utilized */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Cybersecurity Tools Explored</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-200 bg-slate-900 border border-slate-700/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Learning Domains */}
              <div className="mt-6 pt-6 border-t border-slate-800/80">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Core Knowledge Domains Practiced</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {exp.keyCompetencies.map((comp) => (
                    <div
                      key={comp}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/50 border border-slate-800 text-slate-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
