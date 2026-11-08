"use client";
import { useState } from "react";

const projects = [
  {
    name: "Cloudpath",
    category: "Networking & IoT",
    type: "NETWORKING & SIMULATION",
    description:
      "Interactive visual lessons and simulated network labs covering packet routing, IP subnetting, and cloud infrastructure with local progress tracking.",
    tags: ["Networking", "Routing", "JavaScript", "Simulated labs"],
    repo: "cloud-path",
    theme: "cloud",
    mark: "Network Simulation",
    detail: "PACKET ROUTING & TOPOLOGY LABS",
  },
  {
    name: "BridgeM",
    category: "Networking & IoT",
    additionalCategory: "Mobile applications",
    type: "IOT TELEMETRY DASHBOARD",
    description:
      "A React Native mobile application displaying real-time bridge sensor telemetry (load, vibration, vehicle counts, and alerts) streamed over MQTT and WebSockets.",
    tags: ["MQTT", "WebSockets", "React Native", "Expo"],
    repo: "IOT-bridge-app",
    theme: "bridge",
    mark: "Structural IoT Monitor",
    detail: "REAL-TIME TELEMETRY STREAM",
  },
  {
    name: "UCHAT",
    category: "Mobile applications",
    type: "FLUTTER MESSAGING APP",
    description:
      "A cross-platform mobile chat application featuring real-time 1-on-1 and group messaging, typing indicators, read receipts, and media attachments via Firebase.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod"],
    repo: "UCHAT-app",
    theme: "chat",
    mark: "Real-Time Chat",
    detail: "DIRECT & GROUP MESSAGING",
  },
  {
    name: "Frame",
    category: "Mobile applications",
    type: "REACT NATIVE SOCIAL APP",
    description:
      "A mobile photo-sharing app built with Expo and Supabase, featuring chronological media feeds, user stories, bookmarking, and post interactions.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    repo: "Frame-social-media-app",
    theme: "frame",
    mark: "Media Sharing App",
    detail: "COMMUNITY POST FEEDS & STORIES",
  },
  {
    name: "LensLoop",
    category: "Web applications",
    type: "EQUIPMENT LOGISTICS",
    description:
      "A camera equipment rental platform with real-time inventory management, rental period reservations, gear compatibility checks, and QR code handovers.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    repo: "lens-loop",
    theme: "lens",
    mark: "Equipment Logistics",
    detail: "INVENTORY TRACKING & QR HANDOVERS",
  },
  {
    name: "USJ Pool Management",
    category: "Web applications",
    type: "UNIVERSITY OPERATIONS",
    description:
      "A web management system for the university swimming pool, coordinating lane reservations, coach schedules, and student attendance via QR code verification.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    repo: "pool-management-system",
    theme: "pool",
    mark: "Operations Platform",
    detail: "BOOKING & QR ATTENDANCE",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const visible = projects.filter(
    (p) =>
      filter === "All projects" ||
      p.category === filter ||
      p.additionalCategory === filter,
  );
  return (
    <section id="projects" className="section wrap">
      <div className="section-divider" aria-hidden="true">
        <span className="section-divider-num">03</span>
        <span className="section-divider-title">SELECTED WORK</span>
        <span className="section-divider-line" />
      </div>

      <div className="section-heading">
        <div>
          <h2>Featured Projects</h2>
        </div>
        <a
          className="text-link"
          href="https://github.com/udayacgamage?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          All repositories ↗
        </a>
      </div>
      <div className="filters" aria-label="Filter projects">
        {[
          "All projects",
          "Networking & IoT",
          "Mobile applications",
          "Web applications",
        ].map((item) => (
          <button
            key={item}
            aria-pressed={filter === item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {visible.map((p) => (
          <article className="project-card" key={p.name}>
            <div className={`project-art theme-${p.theme}`}>
              <span className="project-mark">{p.mark}</span>
              <strong>{p.name}</strong>
              <small>{p.detail}</small>
            </div>
            <div className="project-body">
              <span className="eyebrow">{p.type}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="text-link"
                href={`https://github.com/udayacgamage/${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
