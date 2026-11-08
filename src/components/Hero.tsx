"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs font-mono text-slate-300 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold tracking-wide">ACTIVE</span>
              <span className="text-slate-500">•</span>
              <span>Available for Projects &amp; Collaborations</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Connected systems.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                Curiosity at work.
              </span>
            </h1>

            {/* Sub-headline / Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              I’m <strong className="text-white font-medium">Udaya Chathuranga</strong>, a network-focused developer and BICT undergraduate exploring how devices communicate, services connect, and systems stay secure.
            </p>

            <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              Bridging the gap between network infrastructure, IoT telemetry, and responsive mobile &amp; web applications.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Selected Work ↓
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 py-3 rounded-xl glass-panel text-white hover:text-cyan-300 font-medium text-sm transition-all hover:border-cyan-500/40"
              >
                Let&apos;s Talk ✉
              </a>
              <a
                href="https://github.com/udayacgamage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-3 rounded-xl border border-white/10 hover:border-white/20 text-slate-400 hover:text-white text-sm transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub ↗</span>
              </a>
            </div>

            {/* Footnote stats */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/5 text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-500 uppercase">LOCATION:</span> <span className="text-slate-200">SRI LANKA</span>
              </div>
              <div className="hidden sm:inline text-slate-600">/</div>
              <div>
                <span className="text-slate-500 uppercase">UNIVERSITY:</span> <span className="text-slate-200">USJ BICT</span>
              </div>
              <div className="hidden sm:inline text-slate-600">/</div>
              <div>
                <span className="text-slate-500 uppercase">FOCUS:</span> <span className="text-cyan-400">NETWORKS &amp; IOT</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Profile Card & Visual Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-cyan-500/20 to-emerald-500/10 rounded-3xl blur-2xl -z-10" />

            {/* Profile Frame Card */}
            <div className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-[22px] overflow-hidden bg-slate-950/80 p-4">
                
                {/* Image container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 group">
                  <Image
                    src="/profile.jpg"
                    alt="Udaya Chathuranga"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  
                  {/* Photo footer label */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="font-mono text-cyan-400 font-medium">Udaya Chathuranga</span>
                    <span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/10 text-[10px] text-slate-400 font-mono">
                      USJ BICT
                    </span>
                  </div>
                </div>

                {/* Floating Highlights beneath image */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-slate-300">IoT &amp; Telemetry</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">MQTT • WebSockets</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      <span className="text-slate-300">Mobile Engineering</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">Flutter • React Native</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-slate-300">Defensive Systems</span>
                    </div>
                    <span className="font-mono text-slate-400 text-[11px]">Cyber Sec • Linux</span>
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
