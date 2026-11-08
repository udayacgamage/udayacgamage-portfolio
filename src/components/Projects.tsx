"use client";
import { useState } from "react";
const projects = [
  {
    name: "Cloudpath",
    category: "Networking & IoT",
    type: "NETWORKING & CLOUD LEARNING",
    description:
      "Visual lessons and guided simulated labs for topics including wireless communication, routing, and cloud infrastructure, with locally saved learning progress.",
    tags: ["Networking", "Cloud concepts", "JavaScript", "Simulated labs"],
    repo: "cloud-path",
    theme: "cloud",
    mark: "Understand the connection.",
    detail: "EXPLORE. PRACTISE. CONNECT THE DOTS.",
  },
  {
    name: "BridgeM",
    category: "Networking & IoT",
    additionalCategory: "Mobile applications",
    type: "MOBILE IOT MONITORING",
    description:
      "A React Native mobile dashboard using MQTT over WebSockets to receive bridge telemetry: load, vehicle counts, vibration, safety alerts, and barrier status.",
    tags: ["MQTT", "WebSockets", "React Native", "Expo"],
    repo: "IOT-bridge-app",
    theme: "bridge",
    mark: "Connected. In view.",
    detail: "FROM SENSOR TO SCREEN.",
  },
  {
    name: "UCHAT",
    category: "Mobile applications",
    type: "FLUTTER MESSAGING APP",
    description:
      "A Flutter messaging project with Firebase-backed direct and group conversations, read receipts, typing indicators, media sharing, and authentication.",
    tags: ["Flutter", "Dart", "Firebase", "Riverpod"],
    repo: "UCHAT-app",
    theme: "chat",
    mark: "A conversation, connected.",
    detail: "DIRECT MESSAGES. GROUP CONVERSATIONS.",
  },
  {
    name: "Frame",
    category: "Mobile applications",
    type: "REACT NATIVE SOCIAL APP",
    description:
      "A mobile social app built with Expo and Supabase, with a post feed, shared stories, likes, bookmarks, comments, and creative community screens.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    repo: "Frame-social-media-app",
    theme: "frame",
    mark: "Make room for creativity.",
    detail: "SHARE YOUR WORLD. FIND YOUR PEOPLE.",
  },
  {
    name: "LensLoop",
    category: "Web applications",
    type: "EQUIPMENT RENTAL PLATFORM",
    description:
      "A camera and production gear rental platform with inventory tracking, equipment compatibility checks, checkout holds, and QR handovers.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    repo: "lens-loop",
    theme: "lens",
    mark: "lensloop",
    detail: "THE RIGHT GEAR. THE NEXT GREAT STORY.",
  },
  {
    name: "USJ Pool Management",
    category: "Web applications",
    type: "UNIVERSITY OPERATIONS",
    description:
      "A full-stack platform connecting student bookings, QR-based attendance, coach schedules, and automated email notifications.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    repo: "pool-management-system",
    theme: "pool",
    mark: "Dive into simplicity.",
    detail: "BOOK. SCAN. SWIM.",
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
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>Networks, mobile & beyond.</h2>
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
          >
            {item}
            {item === "All projects" && (
              <span>{String(projects.length).padStart(2, "0")}</span>
            )}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>
      <div className="project-grid">
        {visible.map((p) => (
          <article className="project" key={p.repo}>
            <a
              className={`project-art ${p.theme}`}
              href={`https://github.com/udayacgamage/${p.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${p.name} source on GitHub`}
            >
              <span className="art-label">{p.type}</span>
              <div className="project-graphic" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <strong>{p.mark}</strong>
              <span className="art-detail">{p.detail}</span>
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <div className="project-info">
              <div className="project-title">
                <h3>
                  <a
                    href={`https://github.com/udayacgamage/${p.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.name}
                  </a>
                </h3>
                <span>{p.category}</span>
              </div>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
