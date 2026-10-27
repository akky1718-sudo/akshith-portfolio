import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education History
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal educational milestones building strong mathematical, analytical, computer science, and cybersecurity foundations.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative pl-6 sm:pl-8 border-l-2 border-slate-800">
          {educationData.map((edu, idx) => {
            const isCurrent = idx === 0;

            return (
              <div key={edu.institution} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-4 border-[#070c18] transition-transform group-hover:scale-125 ${
                    isCurrent ? 'bg-cyan-400 shadow-md shadow-cyan-400/50' : 'bg-slate-600'
                  }`}
                ></div>

                {/* Card */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                          {isCurrent ? "Undergraduate Degree" : "Higher Secondary Education"}
                        </span>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {edu.institution}
                      </h3>
                      <p className="text-base text-cyan-300 font-medium mt-1">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end gap-1.5 self-start sm:self-auto">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-slate-900/90 px-3 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body description & score badge */}
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 self-start sm:self-center flex-shrink-0">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <div className="text-left font-mono">
                        <span className="text-[10px] text-slate-400 block uppercase">
                          {edu.scoreType}
                        </span>
                        <span className="text-sm font-bold text-emerald-400">
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
