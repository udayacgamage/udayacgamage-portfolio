"use client";

import { useState } from "react";

interface SkillItem {
  id: string;
  name: string;
  category: "networking" | "mobile" | "web";
  usedIn: string;
  role: string;
  commandOrSnippet?: string;
}

const SKILLS_DATA: SkillItem[] = [
  {
    id: "mqtt",
    name: "MQTT & WebSockets",
    category: "networking",
    usedIn: "BridgeM IoT Monitor",
    role: "Sub-50ms telemetry publish/subscribe pipeline over secure WSS channels.",
    commandOrSnippet: "mosquitto_sub -h broker.hivemq.com -t 'bridge/telemetry/#'",
  },
  {
    id: "linux",
    name: "Linux & Bash",
    category: "networking",
    usedIn: "Server & Dev Environments",
    role: "Process isolation, systemd services, automated deployment scripts, and shell pipelines.",
    commandOrSnippet: "systemctl status mosquitto && netstat -tulnp",
  },
  {
    id: "networking-theory",
    name: "Routing & Subnetting",
    category: "networking",
    usedIn: "Cloudpath Simulated Labs",
    role: "OSI 7-layer architecture, CIDR subnet calculation, ARP resolution, and routing protocols.",
    commandOrSnippet: "traceroute -n 8.8.8.8 && ip route show",
  },
  {
    id: "docker",
    name: "Docker & Containers",
    category: "networking",
    usedIn: "Microservice Sandboxes",
    role: "Containerized MQTT broker instances, PostgreSQL databases, and reproducible developer stacks.",
    commandOrSnippet: "docker compose up -d mosquitto postgres",
  },
  {
    id: "security",
    name: "Cyber Security & TLS",
    category: "networking",
    usedIn: "Cloudpath & Production Stacks",
    role: "Transport Layer Security (TLS 1.3), cipher suites, HMAC token signing, and network defense.",
    commandOrSnippet: "openssl s_client -connect mqtt.bridgem.io:8883",
  },
  {
    id: "flutter",
    name: "Flutter & Dart",
    category: "mobile",
    usedIn: "UCHAT Messenger",
    role: "Custom animations, cross-platform compilation, reactive messaging feeds, and Riverpod stores.",
    commandOrSnippet: "flutter run -d chrome --web-renderer canvaskit",
  },
  {
    id: "react-native",
    name: "React Native & Expo",
    category: "mobile",
    usedIn: "BridgeM & Frame Social",
    role: "Mobile sensory dashboards, native camera integration, offline SQLite cache, and EAS builds.",
    commandOrSnippet: "npx expo start --tunnel",
  },
  {
    id: "firebase",
    name: "Firebase & Firestore",
    category: "mobile",
    usedIn: "UCHAT Messenger",
    role: "Real-time snapshot streams, Cloud Storage media buckets, and authentication state handlers.",
    commandOrSnippet: "firebase deploy --only firestore:rules",
  },
  {
    id: "nextjs",
    name: "Next.js & React",
    category: "web",
    usedIn: "LensLoop & Portfolio",
    role: "App Router, Server Actions, dynamic rendering, SEO metadata optimization, and responsive UIs.",
    commandOrSnippet: "next build --turbo",
  },
  {
    id: "postgres",
    name: "PostgreSQL & Prisma",
    category: "web",
    usedIn: "LensLoop Platform",
    role: "Relational schema design, ACID transactions, Prisma ORM queries, and indexing for rapid search.",
    commandOrSnippet: "npx prisma migrate dev --name init_schema",
  },
  {
    id: "mongodb",
    name: "MongoDB & Express",
    category: "web",
    usedIn: "USJ Pool Management",
    role: "Document models for student schedules, Express REST APIs, and QR verification endpoints.",
    commandOrSnippet: "node server.js --inspect",
  },
  {
    id: "git",
    name: "Git & Postman",
    category: "web",
    usedIn: "All Repositories",
    role: "Trunk-based development, API integration testing collections, automated CI hooks.",
    commandOrSnippet: "git status && git log -n 3 --oneline",
  },
];

export default function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState<"all" | "networking" | "mobile" | "web">("all");
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS_DATA[0]);

  const filteredSkills = SKILLS_DATA.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <div className="interactive-skills-container">
      {/* Category selector */}
      <div className="skills-category-tabs">
        {[
          { key: "all", label: "All Technologies" },
          { key: "networking", label: "Networks & Security" },
          { key: "mobile", label: "Mobile Apps" },
          { key: "web", label: "Web & Databases" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`skills-tab-btn ${activeCategory === tab.key ? "active" : ""}`}
            onClick={() => setActiveCategory(tab.key as "all" | "networking" | "mobile" | "web")}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="skills-interactive-layout">
        {/* Interactive Badges Grid */}
        <div className="skills-badge-grid">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill.id === skill.id;
            return (
              <button
                type="button"
                key={skill.id}
                className={`skill-pill-btn ${isSelected ? "selected" : ""}`}
                onClick={() => setSelectedSkill(skill)}
                onMouseEnter={() => setSelectedSkill(skill)}
                aria-pressed={isSelected}
              >
                <span className="pill-dot" />
                <span className="pill-name">{skill.name}</span>
                <span className="pill-target">{skill.usedIn}</span>
              </button>
            );
          })}
        </div>

        {/* Live Skill Inspector Card */}
        <div className="skill-inspector-card">
          <div className="inspector-card-header">
            <span className="eyebrow">PRACTICAL APPLICATION</span>
            <span className="skill-category-tag">{selectedSkill.category.toUpperCase()}</span>
          </div>

          <h3 className="inspector-skill-title">{selectedSkill.name}</h3>

          <div className="inspector-project-meta">
            <span className="label">Used in Project:</span>
            <strong className="project-highlight">{selectedSkill.usedIn}</strong>
          </div>

          <p className="inspector-role-text">{selectedSkill.role}</p>

          {selectedSkill.commandOrSnippet && (
            <div className="inspector-code-block">
              <span className="code-header">CLI / VERIFICATION COMMAND</span>
              <code>{selectedSkill.commandOrSnippet}</code>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
