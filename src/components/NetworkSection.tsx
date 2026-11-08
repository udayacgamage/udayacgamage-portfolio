"use client";

export default function NetworkSection() {

  return (
    <section id="networking" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-950/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              01 / Connected Systems &amp; Infrastructure
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Beyond the interface.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            Understanding protocols, packets, and telemetry that allow physical devices and distributed software to communicate reliably.
          </p>
        </div>

        {/* Interactive Architecture & Flow Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visualizer Diagram (8 Cols) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
            
            {/* Window control bar decoration */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">bridge-telemetry-pipeline.sys</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Live Pipe</span>
              </div>
            </div>

            {/* Title & context */}
            <div className="mb-8">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">Case Study: BridgeM IoT Architecture</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Real-Time Physical Strain &amp; Vibration Telemetry
              </h3>
              <p className="text-slate-400 text-sm mt-2">
                Physical sensor events on infrastructure bridges transmitted via lightweight MQTT packets, relayed through WebSockets directly into a React Native monitor.
              </p>
            </div>

            {/* Pipeline Interactive Nodes */}
            <div className="relative py-8 px-2 sm:px-6 my-6 rounded-xl bg-slate-950/60 border border-white/5">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                
                {/* Node 1: Edge Sensors */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">01 • Edge</span>
                    <span className="text-slate-500 text-xs">NodeMCU</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Bridge Sensors</h4>
                    <p className="text-xs text-slate-400 mt-1">Load cells, piezo vibration, ultrasound telemetry</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Sampling: 50Hz</span>
                    <span className="text-emerald-400">Publishing</span>
                  </div>
                </div>

                {/* Node 2: MQTT Broker */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-indigo-500/30 hover:border-indigo-400 transition-all shadow-lg shadow-indigo-500/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">02 • Broker</span>
                    <span className="text-slate-500 text-xs">Mosquitto / Cloud</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">MQTT Broker</h4>
                    <p className="text-xs text-slate-400 mt-1">QoS Level 1, Topic-based Pub/Sub routing with TLS</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Over WSS</span>
                    <span className="text-indigo-400">Relaying</span>
                  </div>
                </div>

                {/* Node 3: Mobile Dashboard */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">03 • Client</span>
                    <span className="text-slate-500 text-xs">React Native</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">BridgeM Dashboard</h4>
                    <p className="text-xs text-slate-400 mt-1">Real-time alerts, vibration waveform visualizer</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Latency &lt; 25ms</span>
                    <span className="text-emerald-400">Connected</span>
                  </div>
                </div>

              </div>

              {/* Connecting Track with Pulsing Packet (Desktop) */}
              <div className="hidden sm:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-cyan-500/30 via-indigo-500/30 to-emerald-500/30 -z-0">
                <div className="packet-pulse" />
              </div>

            </div>

            {/* Protocol Specs Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-500 block text-[10px]">PROTOCOL</span>
                <span className="text-slate-200 font-semibold">MQTT v3.1.1 / v5</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-500 block text-[10px]">TRANSPORT</span>
                <span className="text-slate-200 font-semibold">WebSockets (WSS)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-500 block text-[10px]">GUARANTEE</span>
                <span className="text-cyan-400 font-semibold">QoS 1 (At least once)</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/40 border border-white/5">
                <span className="text-slate-500 block text-[10px]">ENCRYPTION</span>
                <span className="text-emerald-400 font-semibold">TLS 1.3 / AES</span>
              </div>
            </div>

            {/* Action link */}
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-xs text-slate-400">Inspected from real deployed IoT prototypes</span>
              <a
                href="https://github.com/udayacgamage/IOT-bridge-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>View BridgeM Repository</span>
                <span>↗</span>
              </a>
            </div>

          </div>

          {/* Right Pillar Cards (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Card 1: Wireless & Protocols */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider">Network Principles</span>
              <h4 className="text-lg font-semibold text-white mt-1">Protocols &amp; Packet Flow</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Exploring OSI model abstractions, routing algorithms, wireless transmission, and TCP/UDP tradeoffs. Tested and visualized hands-on through <strong className="text-slate-300">Cloudpath</strong> interactive labs.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">TCP/IP</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">Routing</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">Subnetting</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">Wireshark</span>
              </div>
            </div>

            {/* Card 2: Cyber Security & Defense */}
            <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">Defensive Engineering</span>
              <h4 className="text-lg font-semibold text-white mt-1">Cyber Security &amp; CTF</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Active interest in vulnerability research, network perimeter defense, CTF competition problem crafting, and securing cloud &amp; IoT entry points against eavesdropping and injection.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">Linux Security</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">Pen Testing</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5">CTF Challenges</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
