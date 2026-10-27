import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  AlertCircle,
  ShieldCheck
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const { socials, location, email, phone } = personalData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setFormSubmitted(true);

    // Form fallback: Construct a pre-filled mailto link so user message is preserved
    const recipient = email;
    const subjectLine = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const bodyContent = encodeURIComponent(
      `Hello Akshith,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    const mailtoUrl = `mailto:${recipient}?subject=${subjectLine}&body=${bodyContent}`;

    // Open email client with message prepared
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Inquiries
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Open to student internships, cybersecurity trainee opportunities, technical projects, and professional networking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Cards */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Direct Contact Information</span>
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-cyan-300 transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block uppercase">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-sm sm:text-base font-semibold text-slate-100 hover:text-emerald-300 transition-colors font-mono"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 block uppercase">
                    Location
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {location}
                  </span>
                </div>
              </div>

            </div>

            {/* Social & Coding Profiles */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 font-bold">
                  External Profiles
                </h4>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                  Configurable
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* LinkedIn */}
                <a
                  href={socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-all group"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform mb-1.5" />
                  <span className="text-xs font-semibold text-slate-200">LinkedIn</span>
                  {socials.linkedin.isPlaceholder && (
                    <span className="text-[10px] font-mono text-slate-400 mt-1">Placeholder</span>
                  )}
                </a>

                {/* GitHub */}
                <a
                  href={socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-500 hover:bg-slate-850 transition-all group"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5 text-slate-200 group-hover:scale-110 transition-transform mb-1.5" />
                  <span className="text-xs font-semibold text-slate-200">GitHub</span>
                  {socials.github.isPlaceholder && (
                    <span className="text-[10px] font-mono text-slate-400 mt-1">Placeholder</span>
                  )}
                </a>

                {/* LeetCode */}
                <a
                  href={socials.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition-all group"
                  aria-label="LeetCode Profile"
                >
                  <LeetCodeIcon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform mb-1.5" />
                  <span className="text-xs font-semibold text-slate-200">LeetCode</span>
                  {socials.leetcode.isPlaceholder && (
                    <span className="text-[10px] font-mono text-slate-400 mt-1">Placeholder</span>
                  )}
                </a>
              </div>

              <p className="text-[11px] font-mono text-slate-400 mt-3 text-center">
                Replace placeholders anytime in <code className="text-cyan-300">src/data/portfolioData.js</code>
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below. For reliability without server lock-in, submitting opens your email client with your message pre-populated.
              </p>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Email client opened!</p>
                    <p className="mt-1 text-slate-300">
                      Your message has been pre-filled for sending to <strong className="text-white">{email}</strong>. If your email app did not open, you can send directly to the email address on the left.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. johndoe@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject / Topic (Optional)
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
