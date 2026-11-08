"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const emailAddress = "udayacgamage@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-indigo-950/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              05 / Get In Touch
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Let&apos;s build together.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Whether for a project collaboration, technical discussion, or network engineering opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Copy Button */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                DIRECT INBOX
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Start a conversation
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Reach out directly via email. I typically respond within 24 hours.
              </p>

              {/* Copy pill */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-xl bg-slate-950/80 border border-white/10">
                <span className="px-3 py-1 font-mono text-xs sm:text-sm text-slate-200 select-all truncate">
                  {emailAddress}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="sm:ml-auto px-4 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold font-mono transition-all flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span>
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social channels */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/udaya-chathuranga/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/10 flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  <span className="font-bold text-xs font-mono">in</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block group-hover:text-indigo-300 transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">udaya-chathuranga ↗</span>
                </div>
              </a>

              <a
                href="https://github.com/udayacgamage"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/10 flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block group-hover:text-cyan-300 transition-colors">
                    GitHub
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">udayacgamage ↗</span>
                </div>
              </a>
            </div>

            {/* University Tag */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Undergraduate BICT Program</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Faculty of Technology, University of Sri Jayewardenepura
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Quick Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                Send a direct message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Collaboration / Project / Question"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Share a brief overview of what you have in mind..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <span className="font-mono text-sm leading-none">↗</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
