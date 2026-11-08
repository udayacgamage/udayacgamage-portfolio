"use client";

import Image from "next/image";

export default function About() {
  const academicFacts = [
    { label: "DEGREE", value: "BICT (Hons) Undergraduate", detail: "Information & Communication Technology" },
    { label: "INSTITUTION", value: "Univ. of Sri Jayewardenepura", detail: "Faculty of Technology" },
    { label: "CORE INTERESTS", value: "Networks & Cyber Security", detail: "IoT, Telemetry, Linux, Protocols" },
    { label: "LOCATION", value: "Colombo, Sri Lanka", detail: "Open to local & international opportunities" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              04 / Background &amp; Education
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About &amp; Academic Foundation
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Combining academic rigor with hands-on systems development.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio & Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="pro-card p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white">
                Engineering with clarity and intent.
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed">
                I am a BICT undergraduate at the <strong className="text-white font-medium">University of Sri Jayewardenepura</strong>, focusing on the intersection of network engineering, system security, and software applications.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than treating network infrastructure as an abstract layer, I design software with an awareness of latency, socket lifecycles, and security boundaries. My projects range from an MQTT-connected bridge telemetry system to interactive visual routing simulations and cross-platform mobile apps.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                Outside of coursework and codebases, I actively engage with cyber security competitions (CTF), explore Linux system administration, and follow developments in distributed systems.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/udaya-chathuranga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors"
                >
                  Connect on LinkedIn ↗
                </a>
                <a
                  href="https://github.com/udayacgamage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                >
                  Explore GitHub ↗
                </a>
              </div>
            </div>

            {/* Academic Fact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {academicFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="p-4 rounded-xl pro-card border border-white/5"
                >
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                    {fact.label}
                  </span>
                  <strong className="text-sm text-white font-semibold block mt-1">
                    {fact.value}
                  </strong>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {fact.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl pro-card p-4">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Udaya Chathuranga"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                    Candidate Profile
                  </p>
                  <h4 className="text-lg font-bold text-white">
                    Udaya Chathuranga
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    BICT (Hons) Undergraduate • USJ
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-white/5 text-xs text-slate-300">
                Focus: Network Administration, Cyber Security &amp; Full-Stack Development
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
