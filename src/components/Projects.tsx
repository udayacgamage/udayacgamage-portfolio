"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import ProjectThumbnail from "@/components/ProjectThumbnail";

const projects = [
  {
    name: "Cloudpath",
    category: "Networking & IoT",
    type: "NETWORKING & SIMULATION",
    tagline: "Interactive packet routing & topology simulation",
    description:
      "Interactive visual lessons and simulated network labs covering packet routing, IP subnetting, and cloud infrastructure with local progress tracking.",
    tags: ["Networking", "Routing", "JavaScript", "Simulated labs"],
    repo: "cloud-path",
  },
  {
    name: "BridgeM",
    category: "Networking & IoT",
    additionalCategory: "Mobile applications",
    type: "IOT TELEMETRY DASHBOARD",
    tagline: "Real-time structural IoT telemetry stream",
    description:
      "A React Native mobile application displaying real-time bridge sensor telemetry (load, vibration, vehicle counts, and alerts) streamed over MQTT and WebSockets.",
    tags: ["MQTT", "WebSockets", "React Native", "Expo"],
    repo: "IOT-bridge-app",
  },
  {
    name: "UCHAT",
    category: "Mobile applications",
    type: "FLUTTER MESSAGING APP",
    tagline: "Direct & group real-time messaging",
    description:
      "A cross-platform mobile chat application featuring real-time 1-on-1 and group messaging, typing indicators, read receipts, and media attachments via Firebase.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod"],
    repo: "UCHAT-app",
  },
  {
    name: "Frame",
    category: "Mobile applications",
    type: "REACT NATIVE SOCIAL APP",
    tagline: "Community post feeds & stories",
    description:
      "A mobile photo-sharing app built with Expo and Supabase, featuring chronological media feeds, user stories, bookmarking, and post interactions.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    repo: "Frame-social-media-app",
  },
  {
    name: "LensLoop",
    category: "Web applications",
    type: "EQUIPMENT LOGISTICS",
    tagline: "Inventory tracking & QR handovers",
    description:
      "A camera equipment rental platform with real-time inventory management, rental period reservations, gear compatibility checks, and QR code handovers.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    repo: "lens-loop",
  },
  {
    name: "USJ Pool Management",
    category: "Web applications",
    type: "UNIVERSITY OPERATIONS",
    tagline: "Lane booking & QR attendance system",
    description:
      "A web management system for the university swimming pool, coordinating lane reservations, coach schedules, and student attendance via QR code verification.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    repo: "pool-management-system",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const reduceMotion = useReducedMotion();
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

      <p className="sr-only" role="status">{visible.length} projects shown</p>
      <motion.div layout={!reduceMotion} className="project-grid">
        <AnimatePresence initial={false} mode="popLayout">
        {visible.map((p) => (
          <motion.article
            className="project-card project-card-visual" key={p.name}
            layout={!reduceMotion}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.98 }}
            transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <a className="project-thumbnail-link" href={`https://github.com/udayacgamage/${p.repo}`} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${p.name} on GitHub`}>
              <ProjectThumbnail project={p.repo} name={p.name} />
            </a>
            <div>
              <div className="project-card-header">
                <span className="eyebrow">{p.type}</span>
                <a
                  href={`https://github.com/udayacgamage/${p.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-icon"
                  title={`Open ${p.name} on GitHub`}
                  aria-label={`Open ${p.name} repository`}
                >
                  ↗
                </a>
              </div>

              <h3 className="project-title">{p.name}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>
            </div>

            <div className="project-card-footer">
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="project-action-link"
                href={`https://github.com/udayacgamage/${p.repo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository ↗
              </a>
            </div>
          </motion.article>
        ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
