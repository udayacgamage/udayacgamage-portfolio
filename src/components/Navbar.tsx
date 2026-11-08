"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Overview", href: "#home" },
    { name: "Architecture", href: "#networking" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#home"
          className="flex items-center gap-3 text-white group"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-xs font-semibold text-slate-200 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
            UC
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-white transition-colors">
              Udaya Chathuranga
            </span>
            <span className="text-[11px] text-slate-400 font-mono tracking-wide">
              Software &amp; Network Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3.5 py-1 text-xs font-medium text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] rounded-full transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-2.5 px-4 text-xs font-medium text-white bg-blue-600 rounded-lg shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
