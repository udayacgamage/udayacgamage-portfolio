"use client";

interface SkillCategory {
  title: string;
  badge: string;
  iconBg: string;
  iconColor: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Networking & Protocols",
    badge: "CORE DOMAIN",
    iconBg: "bg-cyan-500/10 border-cyan-500/30",
    iconColor: "text-cyan-400",
    description: "Architecting reliable telemetry pipelines, socket streams, and packet-level inspections.",
    skills: [
      { name: "MQTT (v3.1.1 / v5)", highlight: true },
      { name: "WebSockets (WSS)", highlight: true },
      { name: "TCP/IP & OSI Architecture" },
      { name: "Subnetting & Routing" },
      { name: "Wireshark Packet Analysis" },
      { name: "Wireless Protocols" },
    ],
  },
  {
    title: "Cyber Security & Defense",
    badge: "SECURITY",
    iconBg: "bg-indigo-500/10 border-indigo-500/30",
    iconColor: "text-indigo-400",
    description: "Hands-on vulnerability testing, CTF problem formulation, and defensive server security.",
    skills: [
      { name: "CTF Organizing & Solving", highlight: true },
      { name: "Network Security" },
      { name: "Penetration Testing Basics" },
      { name: "Linux Server Hardening" },
      { name: "Firewall & Access Control" },
      { name: "Threat Analysis" },
    ],
  },
  {
    title: "Mobile App Development",
    badge: "APPLICATIONS",
    iconBg: "bg-emerald-500/10 border-emerald-500/30",
    iconColor: "text-emerald-400",
    description: "Building responsive, telemetry-aware and real-time cross-platform mobile experiences.",
    skills: [
      { name: "Flutter & Dart", highlight: true },
      { name: "React Native & Expo", highlight: true },
      { name: "Firebase (Auth, Firestore)" },
      { name: "Riverpod State Management" },
      { name: "Mobile WebSockets" },
      { name: "Cross-platform UI/UX" },
    ],
  },
  {
    title: "Full-Stack & Cloud Workflows",
    badge: "WEB & TOOLS",
    iconBg: "bg-purple-500/10 border-purple-500/30",
    iconColor: "text-purple-400",
    description: "Scalable APIs, relational/document datastores, and disciplined engineering pipelines.",
    skills: [
      { name: "Next.js & React", highlight: true },
      { name: "TypeScript & Node.js" },
      { name: "PostgreSQL & Prisma" },
      { name: "MongoDB & Express" },
      { name: "Docker Containers" },
      { name: "Git, GitHub & Postman" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              03 / Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Tools &amp; technologies.
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md">
            A practical, hands-on stack shaped by network communication, real-time messaging, and secure software development.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border ${category.iconBg} ${category.iconColor}`}
                  >
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          skill.highlight ? "bg-cyan-400" : "bg-slate-600"
                        }`}
                      />
                      <span className={skill.highlight ? "text-white font-medium" : ""}>
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom line */}
              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                PRACTICED IN CODE
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
