import React from 'react';
import { Shield, Mail, MapPin, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalData, navLinks } from '../data/portfolioData';

export default function Footer() {
  const { name, role, location, email, socials } = personalData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-850">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                {name.toUpperCase()}
              </span>
            </div>

            <p className="text-sm text-cyan-300 font-mono">
              {role}
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{location}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <a href={`mailto:${email}`} className="hover:text-slate-200 transition-colors">
                {email}
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Professional Profiles
            </h4>
            <div className="flex flex-col gap-2.5 text-xs font-mono">
              <a
                href={socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
              </a>
              <a
                href={socials.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            © 2026 Bajjuri Akshith. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-slate-400">
            <span>Warangal, Telangana, India</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
