"use client";

import Image from "next/image";

export default function About() {
  const milestones = [
    { label: "DEGREE", value: "BICT (Hons)", detail: "Bachelor of Information & Communication Technology" },
    { label: "INSTITUTION", value: "Univ. of Sri Jayewardenepura", detail: "Faculty of Technology" },
    { label: "CORE INTERESTS", value: "Networking & Cyber Security", detail: "IoT Telemetry, Infrastructure, Protocols" },
    { label: "LOCATION", value: "Sri Lanka", detail: "Working globally across timezones" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              04 / Background &amp; Philosophy
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Networks first. Builder&apos;s mindset.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Bridging hardware sensors, network packets, and polished mobile applications.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Bio Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Engineering with curiosity and intent.
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I’m a BICT undergraduate at the <strong className="text-white">University of Sri Jayewardenepura</strong>, driven by a deep fascination with how digital information moves across hardware, routers, and networks to power the software we rely on every day.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Rather than staying within theoretical confines, I believe in learning by constructing: from building an MQTT-connected bridge telemetry system to authoring visual interactive lessons for routing concepts in Cloudpath, and engineering real-time messaging apps with Flutter and Firebase.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Working across these layers helps me understand the physical constraints of latency, packet delivery, and security boundaries, making me a more resilient software engineer.
              </p>

              {/* Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/udaya-chathuranga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 text-indigo-200 text-xs font-semibold transition-all"
                >
                  <span>Connect on LinkedIn</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://github.com/udayacgamage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold transition-all"
                >
                  <span>Explore GitHub Activity</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Quick Milestones Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {milestones.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-xl glass-panel border border-white/5"
                >
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    {m.label}
                  </span>
                  <strong className="text-sm text-white font-semibold block mt-1">
                    {m.value}
                  </strong>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Modern Holographic Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-1 bg-gradient-to-tr from-indigo-500/30 via-cyan-500/20 to-purple-500/30 border border-white/10 shadow-2xl">
              <div className="rounded-[22px] bg-slate-950 p-4 overflow-hidden relative">
                
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 group">
                  <Image
                    src="/profile.jpg"
                    alt="Udaya Chathuranga"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      Developer Profile
                    </p>
                    <h4 className="text-lg font-bold text-white">
                      Udaya Chathuranga
                    </h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Networks • IoT • Mobile • Cyber Security
                    </p>
                  </div>
                </div>

                {/* Card Quote */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <p className="text-xs text-slate-300 italic">
                    &ldquo;Curiosity at work — dissecting how signals become packets, and packets become experiences.&rdquo;
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
