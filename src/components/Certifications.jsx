import React from 'react';
import { 
  Award, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const getOrgTheme = (issuer) => {
    if (issuer.includes("Microsoft")) {
      return {
        badgeBg: "bg-blue-950/60 border-blue-500/40 text-blue-400",
        pill: "Microsoft",
        accent: "border-blue-500/30",
        dot: "bg-blue-400"
      };
    }
    if (issuer.includes("AWS")) {
      return {
        badgeBg: "bg-amber-950/60 border-amber-500/40 text-amber-400",
        pill: "AWS Academy",
        accent: "border-amber-500/30",
        dot: "bg-amber-400"
      };
    }
    if (issuer.includes("Cisco")) {
      return {
        badgeBg: "bg-emerald-950/60 border-emerald-500/40 text-emerald-400",
        pill: "Cisco Networking Academy",
        accent: "border-emerald-500/30",
        dot: "bg-emerald-400"
      };
    }
    // Coursera / Google
    return {
      badgeBg: "bg-cyan-950/60 border-cyan-500/40 text-cyan-400",
      pill: "Coursera / Google",
      accent: "border-cyan-500/30",
      dot: "bg-cyan-400"
    };
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#060a14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Industry Training
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal certifications and curriculum completions across cloud infrastructure, artificial intelligence, and cybersecurity fundamentals.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => {
            const theme = getOrgTheme(cert.issuer);

            return (
              <div
                key={cert.id}
                className={`glass-card rounded-2xl p-6 border ${theme.accent} hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-cyan-500/10`}
              >
                <div>
                  {/* Top Issuer Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-semibold border ${theme.badgeBg}`}>
                      <span className={`w-2 h-2 rounded-full ${theme.dot}`}></span>
                      {cert.issuer}
                    </span>

                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Certification Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Category */}
                  <p className="text-xs font-mono text-slate-400 mt-2">
                    {cert.category}
                  </p>
                </div>

                {/* Footer with date */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.date}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification transparency notice */}
        <div className="mt-10 text-center text-xs font-mono text-slate-400">
          Certifications obtained through authorized academies and accredited platforms (Microsoft, Cisco Networking Academy, AWS Academy & Coursera).
        </div>

      </div>
    </section>
  );
}
