import React from 'react';
import { 
  Trophy, 
  Calendar, 
  Users, 
  Code2, 
  Medal, 
  CheckCircle 
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const item = achievementsData[0];

  return (
    <section id="achievements" className="py-20 lg:py-28 relative bg-[#060a14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>COMPETITIVE RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Hackathon Achievement
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Collaborative coding competition showcasing rapid problem-solving and algorithmic implementation in Python.
          </p>
        </div>

        {/* Achievement Card */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-700/80 relative overflow-hidden shadow-xl">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              
              {/* Trophy Emblem */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-600/10 to-slate-900 border-2 border-amber-400/50 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/15 flex-shrink-0">
                <Trophy className="w-10 h-10" />
              </div>

              {/* Achievement Content */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-950/50 text-amber-400 border border-amber-500/40">
                    <Medal className="w-3 h-3" />
                    <span>Top 9 Finalist (As a Team)</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    <Users className="w-3 h-3 text-cyan-400" />
                    <span>Collaborative Team Entry</span>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {item.event}
                </h3>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Code2 className="w-4 h-4" />
                    <span>Track: {item.track}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Team Verification Details */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle className="w-4 h-4" />
                    <span>Python Programming Competition Finalist</span>
                  </div>
                  <span className="text-slate-400">On-Campus Event</span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
