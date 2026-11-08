"use client";

export default function NetworkSection() {
  return (
    <section id="networking" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              01 / System Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              IoT Telemetry &amp; Network Protocols
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Understanding communication mechanics from physical hardware and packet transit to distributed client dashboards.
          </p>
        </div>

        {/* Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Architectural Spec (8 Cols) */}
          <div className="lg:col-span-8 pro-card p-6 sm:p-8">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                Case Study: BridgeM Telemetry Pipeline
              </span>
              <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-white/5">
                End-to-End Architecture
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-8">
              BridgeM demonstrates a complete telemetry ingestion flow. Strain gauges, vibration sensors, and load cells publish lightweight metrics to an MQTT broker, which distributes updates via secure WebSockets to a mobile monitoring client.
            </p>

            {/* Architecture Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 font-semibold block mb-1">
                    01 • EDGE SENSORS
                  </span>
                  <h4 className="text-sm font-semibold text-white">Data Ingestion</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Microcontroller sampling vibration, load thresholds, and barrier telemetry at fixed frequencies.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  Payload: Compact JSON / Binary
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/20 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-indigo-400 font-semibold block mb-1">
                    02 • MQTT BROKER
                  </span>
                  <h4 className="text-sm font-semibold text-white">Pub / Sub Relay</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Topic filtering with QoS 1 guarantees, handling connection handshakes and WebSocket bridging.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  Protocol: MQTT over WSS
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/[0.08] flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold block mb-1">
                    03 • CLIENT
                  </span>
                  <h4 className="text-sm font-semibold text-white">Mobile Dashboard</h4>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    React Native client receiving socket events, evaluating thresholds, and triggering alert states.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-400">
                  Latency: Sub-30ms
                </div>
              </div>

            </div>

            {/* Technical Specifications */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">Protocol</span>
                <span className="text-slate-200">MQTT v3.1.1 / v5</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">Transport</span>
                <span className="text-slate-200">Secure WebSockets</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">Delivery</span>
                <span className="text-slate-200">QoS Level 1</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-white/5">
                <span className="text-slate-500 block text-[10px] uppercase">Security</span>
                <span className="text-slate-200">TLS Encryption</span>
              </div>
            </div>

            {/* Repository Link */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs">
              <span className="text-slate-400">Open-source codebase on GitHub</span>
              <a
                href="https://github.com/udayacgamage/IOT-bridge-app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                <span>View BridgeM Repository</span>
                <span>↗</span>
              </a>
            </div>

          </div>

          {/* Right: Technical Focus Pillars (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Pillar 1 */}
            <div className="pro-card p-6">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wide block mb-2">
                Network Engineering
              </span>
              <h4 className="text-base font-semibold text-white">
                Routing &amp; Protocol Simulation
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Hands-on study of the OSI model, packet routing mechanics, CIDR subnetting, and wireless communication protocols—visualized through custom interactive labs in <strong className="text-slate-300 font-medium">Cloudpath</strong>.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">TCP/IP</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">Subnetting</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">Wireshark</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="pro-card p-6">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wide block mb-2">
                Cyber Security
              </span>
              <h4 className="text-base font-semibold text-white">
                Defensive Systems &amp; CTF
              </h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Active practice in Linux server hardening, vulnerability mitigation, network perimeter assessment, and designing challenge problems for competitive CTF events.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">Linux Hardening</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">Access Control</span>
                <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5">CTF Challenges</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
