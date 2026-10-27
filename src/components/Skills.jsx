import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Wrench, 
  ShieldAlert, 
  Cpu, 
  Terminal, 
  Sparkles,
  Info
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming Languages":
        return <Code className="w-5 h-5 text-cyan-400" />;
      case "Databases":
        return <Database className="w-5 h-5 text-sky-400" />;
      case "Web Technologies":
        return <Globe className="w-5 h-5 text-blue-400" />;
      case "Tools & Platforms":
        return <Wrench className="w-5 h-5 text-teal-400" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Tooling
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Categorized technical skills based on academic curriculum, project implementation, and hands-on trainee security practice.
          </p>
        </div>

        {/* Note on Transparency */}
        <div className="mb-10 max-w-3xl mx-auto p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-white">Factual Evaluation:</strong> In accordance with professional integrity, skills are represented by technology badges and practical context rather than arbitrary numerical percentage meters. Cybersecurity tools reflect basic hands-on learning from trainee practice.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat) => {
            const isCyber = cat.category.includes("Cybersecurity");
            return (
              <div
                key={cat.category}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isCyber 
                    ? 'md:col-span-2 lg:col-span-2 border-emerald-500/30 bg-gradient-to-br from-slate-900/90 via-[#0a1520]/80 to-slate-900/90 shadow-lg shadow-emerald-950/20' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-white">
                          {cat.category}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    {cat.badge && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-500/40">
                        <Sparkles className="w-3 h-3" />
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  {/* Skills List */}
                  <div className={`grid gap-3 pt-4 border-t border-slate-800/80 ${isCyber ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`w-2 h-2 rounded-full ${isCyber ? 'bg-emerald-400' : 'bg-cyan-400'}`}></span>
                          <span className="text-sm font-semibold text-slate-100">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer contextual indicator for cyber category */}
                {isCyber && (
                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400/90">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Network security, traffic analysis & vulnerability testing</span>
                    </span>
                    <span className="text-slate-400">Trainee Lab Practice</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
