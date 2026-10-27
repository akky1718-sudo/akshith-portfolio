import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Download } from 'lucide-react';
import { personalData, navLinks } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070c18]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            aria-label="Bajjuri Akshith Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 group-hover:border-cyan-400 transition-colors">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-105 transition-transform" />
              <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-slate-100 tracking-wider text-base group-hover:text-cyan-400 transition-colors">
                {personalData.initials}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                CSE • Security
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalData.resumePath}
              download={personalData.resumeFileName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 transition-all shadow-sm group"
            >
              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={personalData.resumePath}
              download={personalData.resumeFileName}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
              aria-label="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#070c18]/95 backdrop-blur-xl border-t border-slate-800 p-6 overflow-y-auto z-50 animate-fadeIn">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/50 border border-cyan-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                </a>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col gap-3">
            <a
              href={personalData.resumePath}
              download={personalData.resumeFileName}
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
            <div className="text-center text-xs text-slate-400 mt-2 font-mono">
              Bajjuri Akshith • Warangal, India
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
