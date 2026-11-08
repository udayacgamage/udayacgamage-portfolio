"use client";

interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Networking & Protocols",
    badge: "INFRASTRUCTURE",
    description: "Telemetry ingestion, socket streaming, and packet routing mechanics.",
    skills: [
      "MQTT (v3.1.1 / v5)",
      "WebSockets (WSS)",
      "TCP/IP & OSI Model",
      "Subnetting & CIDR Routing",
      "Wireshark Packet Analysis",
      "Network Telemetry",
    ],
  },
  {
    title: "Cyber Security & Systems",
    badge: "SECURITY",
    description: "Defensive systems, server hardening, and vulnerability mitigation.",
    skills: [
      "CTF Organizing & Solving",
      "Linux Server Administration",
      "Defensive Security Principles",
      "Network Access Control",
      "Vulnerability Assessment",
      "System Monitoring",
    ],
  },
  {
    title: "Mobile App Development",
    badge: "APPLICATIONS",
    description: "Responsive, real-time cross-platform mobile client engineering.",
    skills: [
      "Flutter & Dart",
      "React Native & Expo",
      "Firebase (Auth, Firestore)",
      "Riverpod State Management",
      "Real-time Socket Clients",
      "Mobile UI Architecture",
    ],
  },
  {
    title: "Web & Backend Engineering",
    badge: "FULL-STACK",
    description: "Scalable APIs, database architectures, and developer tooling.",
    skills: [
      "Next.js & React",
      "TypeScript & JavaScript",
      "Node.js & Express",
      "PostgreSQL & Prisma ORM",
      "MongoDB & REST APIs",
      "Docker Containers & Git",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              03 / Technical Toolkit
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Competencies
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Technologies and protocols applied across hands-on repositories, simulated labs, and academic coursework.
          </p>
        </div>

        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="pro-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5 font-medium">
                    {category.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <ul className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2.5 text-xs text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
                PRACTICED IN REPOSITORIES
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
