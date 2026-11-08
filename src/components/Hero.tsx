"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Professional Bio & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Software &amp; Network Engineering Roles</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Connected systems.
              <br />
              <span className="text-slate-400 font-normal">Curiosity at work.</span>
            </h1>

            {/* Concise Value Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              I’m <strong className="text-white font-semibold">Udaya Chathuranga</strong>, an Information &amp; Communication Technology undergraduate at the <strong className="text-white font-medium">University of Sri Jayewardenepura</strong>.
            </p>

            <p className="text-sm text-slate-400 max-w-xl leading-relaxed">
              My engineering focus centers on how devices communicate and systems remain reliable—spanning real-time IoT telemetry, network routing, cyber security, and cross-platform application development.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-sm"
              >
                View Selected Work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-200 font-medium text-xs sm:text-sm transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/udayacgamage"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub ↗</span>
              </a>
              <a
                href="https://www.linkedin.com/in/udaya-chathuranga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-4 py-2.5 rounded-lg border border-white/10 hover:border-white/20 text-slate-300 hover:text-white text-xs sm:text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <span>LinkedIn ↗</span>
              </a>
            </div>

            {/* Quick credentials footer */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-white/[0.08] text-xs text-slate-400 font-mono">
              <div>
                <span className="text-slate-500 uppercase">DEGREE:</span> <span className="text-slate-300">BICT (Hons)</span>
              </div>
              <div className="hidden sm:inline text-slate-700">•</div>
              <div>
                <span className="text-slate-500 uppercase">INSTITUTION:</span> <span className="text-slate-300">USJ, Sri Lanka</span>
              </div>
              <div className="hidden sm:inline text-slate-700">•</div>
              <div>
                <span className="text-slate-500 uppercase">FOCUS:</span> <span className="text-slate-300">Networks &amp; Security</span>
              </div>
            </div>

          </div>

          {/* Right: Clean Professional Portrait & Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl bg-slate-900/70 border border-white/10 p-4 shadow-xl backdrop-blur-md">
              
              {/* Photo Frame */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Udaya Chathuranga"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="font-medium">Udaya Chathuranga</span>
                  <span className="text-slate-400 font-mono text-[11px]">USJ Faculty of Technology</span>
                </div>
              </div>

              {/* Core Attributes */}
              <div className="mt-4 space-y-2 text-xs">
                <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-950/60 border border-white/5">
                  <span className="text-slate-400">Primary Domain</span>
                  <span className="text-slate-200 font-medium">Network Protocols &amp; IoT</span>
                </div>
                <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-950/60 border border-white/5">
                  <span className="text-slate-400">Application Stack</span>
                  <span className="text-slate-200 font-medium">Flutter • React Native • Next.js</span>
                </div>
                <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-950/60 border border-white/5">
                  <span className="text-slate-400">Security Focus</span>
                  <span className="text-slate-200 font-medium">Defensive Architecture &amp; CTF</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
