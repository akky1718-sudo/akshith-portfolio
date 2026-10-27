import React from 'react';
import { 
  Shield, 
  ArrowRight, 
  Download, 
  Mail, 
  Terminal, 
  Lock, 
  Network, 
  CheckCircle2, 
  MapPin, 
  Code2
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background Decorative Grids & Glows */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 font-mono mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>B.Tech CSE (Cybersecurity) • Trainee & Learner</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-3">
              BAJJURI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">AKSHITH</span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-2 text-lg sm:text-xl font-medium text-cyan-300/90 mb-5 font-mono">
              <Terminal className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>B.Tech CSE (Cybersecurity) Student</span>
            </div>

            {/* Resume-grounded Bio */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
              {personalData.heroBio}
            </p>

            {/* Meta location & institution quick chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-md border border-slate-800">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>SR University, Warangal (2023 – 2027)</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* View Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Contact Me CTA */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              {/* Download Resume CTA */}
              <a
                href={personalData.resumePath}
                download={personalData.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-cyan-300 bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/40 hover:border-cyan-400 transition-all hover:-translate-y-0.5"
                aria-label="Download Bajjuri Akshith Resume PDF"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Clean disclaimer note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Available for student internships, cybersecurity trainee roles & projects</span>
            </div>
          </div>

          {/* Right Column: Cybersecurity Visual Elements */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-emerald-500/20 blur-xl opacity-75"></div>

              {/* Main Visual Terminal / Shield Card */}
              <div className="relative rounded-2xl bg-[#0c1322]/95 border border-slate-700/80 p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Header bar of visual card */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono text-slate-400 ml-2">cyber-environment.sh</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30 text-[10px] font-mono text-cyan-300">
                    <Lock className="w-3 h-3 text-cyan-400" />
                    <span>SECURE_ID</span>
                  </div>
                </div>

                {/* Central Security Shield & Abstract Geometric Nodes */}
                <div className="relative my-4 flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 overflow-hidden">
                  
                  {/* Subtle Background Circuit Lines */}
                  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="20%" y1="10%" x2="80%" y2="90%" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="#10b981" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="50%" cy="50%" r="55" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.4" />
                    <circle cx="50%" cy="50%" r="75" stroke="#38bdf8" strokeWidth="0.5" strokeDasharray="3 6" fill="none" opacity="0.3" />
                  </svg>

                  {/* Shield Center Icon */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-950 to-slate-900 border-2 border-cyan-400/60 flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-3">
                    <Shield className="w-10 h-10 text-cyan-400" />
                  </div>

                  <h3 className="relative z-10 text-sm font-semibold text-slate-100 font-mono tracking-wide">
                    CSE (Cybersecurity) Trainee
                  </h3>
                  <p className="relative z-10 text-xs text-slate-400 font-mono mt-0.5">
                    SR University • CGPA: 7.1 / 10
                  </p>
                </div>

                {/* Trainee Toolset Chips */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Hands-on Tool Exposure:</span>
                    </span>
                    <span className="text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                      Trainee Level
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200">
                      <Network className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Wireshark</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Nmap</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Burp Suite</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200">
                      <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Kali Linux</span>
                    </div>
                  </div>
                </div>

                {/* Bottom verified telemetry */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Integrity Verified</span>
                  </span>
                  <span className="text-slate-400">SRU • Warangal, IN</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
