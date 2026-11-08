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
    { name: "Toolkit", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 text-white tracking-tight"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[1px] flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <span className="text-xs font-bold font-mono text-cyan-400">UC</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
              Udaya Chathuranga
            </span>
            <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono">
              Network &amp; Software Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-900/60 border border-white/5 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 rounded-full transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let&apos;s Connect</span>
            <span className="font-mono text-sm leading-none">↗</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-2.5 px-4 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-lg shadow-sm"
            >
              Let&apos;s Connect ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
