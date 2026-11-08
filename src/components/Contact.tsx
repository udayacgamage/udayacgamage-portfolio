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
      setTimeout(() => setCopied(false), 2000);
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
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              05 / Contact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Open to software engineering internships, network infrastructure projects, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="pro-card p-6 sm:p-8">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wide block mb-2">
                Direct Communication
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                Initiate a Conversation
              </h3>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Feel free to email me directly regarding project opportunities or technical inquiries.
              </p>

              {/* Email Copy Card */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-mono text-slate-200 select-all truncate px-1">
                  {emailAddress}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-300 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <span>Copy Address</span>
                  )}
                </button>
              </div>
            </div>

            {/* Profiles */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/udaya-chathuranga/"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-card p-4 flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-blue-500/40 group-hover:text-blue-400 transition-colors">
                  <span className="font-bold text-xs font-mono">in</span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block group-hover:text-blue-400 transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Profile ↗</span>
                </div>
              </a>

              <a
                href="https://github.com/udayacgamage"
                target="_blank"
                rel="noopener noreferrer"
                className="pro-card p-4 flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 group-hover:border-blue-500/40 group-hover:text-blue-400 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block group-hover:text-blue-400 transition-colors">
                    GitHub
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Repositories ↗</span>
                </div>
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/40 border border-white/5 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Academic Department</span>
              <p className="text-[11px] text-slate-500 mt-1">
                Faculty of Technology, University of Sri Jayewardenepura, Sri Lanka
              </p>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="pro-card p-6 sm:p-8 space-y-4"
            >
              <h3 className="text-base font-bold text-white mb-2">
                Send a Message
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
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
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
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-400 uppercase mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Opportunity / Collaboration / Project"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors"
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
                  placeholder="Outline your message or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/70 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-sm"
              >
                Send Message via Email Client ↗
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
