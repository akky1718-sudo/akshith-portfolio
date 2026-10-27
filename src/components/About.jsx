import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Award, 
  ShieldCheck, 
  BookOpen, 
  Terminal, 
  Layers,
  CheckCircle
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function About() {
  const { identityCard } = personalData;

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>BACKGROUND & OBJECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            B.Tech Computer Science & Engineering student specializing in Cybersecurity, combining academic training with hands-on security tool exploration and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Identity & Academic Summary Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 pb-6 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Academic Profile</h3>
                  <p className="text-xs font-mono text-slate-400">Undergraduate Verification</p>
                </div>
              </div>

              {/* Profile Details */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start justify-between py-2 border-b border-slate-800/60">
                  <span className="text-xs font-mono text-slate-400">Degree</span>
                  <span className="text-sm font-semibold text-cyan-300 text-right">
                    {identityCard.degree}
                  </span>
                </div>

                <div className="flex items-start justify-between py-2 border-b border-slate-800/60">
                  <span className="text-xs font-mono text-slate-400">Institution</span>
                  <span className="text-sm font-semibold text-slate-100 text-right">
                    {identityCard.university}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-xs font-mono text-slate-400">Timeline</span>
                  <span className="text-sm font-mono text-slate-200">
                    {identityCard.period}
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <span className="text-xs font-mono text-slate-400">Cumulative GPA</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>CGPA: {identityCard.cgpa}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-xs font-mono text-slate-400">Location</span>
                  <span className="text-xs font-mono text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {identityCard.location}
                  </span>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-cyan-400 font-bold">Focus:</span> Network security principles, penetration testing tool usage, and development of secure systems.
              </div>
            </div>

            {/* Quick Core Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 mb-1">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Trainee</span>
                </div>
                <p className="text-xs text-slate-300">
                  Hands-on practice with Wireshark, Nmap, Burp Suite & Kali Linux
                </p>
              </div>

              <div className="glass-card rounded-xl p-4 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-mono font-semibold uppercase">Development</span>
                </div>
                <p className="text-xs text-slate-300">
                  Projects in blockchain supply chain & ML phishing URL classification
                </p>
              </div>
            </div>

          </div>

          {/* Detailed Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Academic Overview & Technical Trajectory</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalData.aboutBio.map((paragraph, index) => (
                  <p key={index} className="text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Verified Competency Blocks */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Verified Academic & Trainee Foundation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Specialized Cybersecurity B.Tech Curriculum (SR University)</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>Higher Secondary MPC (78.7%) from Narayana Jr. College</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Trainee Exposure: Network Security & Traffic Analysis</span>
                  </div>
                  <div className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Python Programming Hackathon Team Finalist (Top 9)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
