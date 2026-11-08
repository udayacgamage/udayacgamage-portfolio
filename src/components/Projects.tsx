"use client";

import { useState, useEffect } from "react";

interface ProjectItem {
  name: string;
  category: string;
  additionalCategory?: string;
  type: string;
  description: string;
  tags: string[];
  repo: string;
  theme: string;
  mark: string;
  detail: string;
  architecture?: {
    overview: string;
    keyDecisions: string[];
    flow: string[];
  };
}

const projects: ProjectItem[] = [
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
    architecture: {
      overview:
        "An educational simulation engine running in the client to model packet routing, ARP resolution, and subnetting topologies with visual breadcrumbs.",
      keyDecisions: [
        "In-browser simulation engine removing external runtime dependencies for immediate student access.",
        "Interactive canvas with step-by-step packet inspection showing header frames.",
        "Local progress persistence via Web Storage API with zero auth friction.",
      ],
      flow: ["Interactive topology builder", "Routing table resolver", "Packet flow visualizer"],
    },
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
    architecture: {
      overview:
        "Full-duplex telemetry pipeline streaming strain-gauge and accelerometer data from ESP32 edge nodes over MQTT/TLS to mobile devices.",
      keyDecisions: [
        "MQTT over secure WebSockets (WSS) to ensure sub-50ms push updates to mobile without battery drain.",
        "QoS Level 1 on structural alert topics to guarantee delivery during intermittent network drops.",
        "Decoupled edge sensor simulator for rigorous testing under artificial peak load spikes.",
      ],
      flow: ["ESP32 Strain Gauges", "Mosquitto Broker (TLS)", "WebSocket Gateway", "React Native UI"],
    },
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
    architecture: {
      overview:
        "Cross-platform chat application with optimistic UI message delivery, reactive state management via Riverpod, and cloud storage.",
      keyDecisions: [
        "Optimistic state dispatch for immediate visual feedback before Firebase Firestore confirmation.",
        "Riverpod stream providers for fine-grained rebuilds on active typing bubbles.",
        "Firestore Security Rules enforcing strict participant-only access per room.",
      ],
      flow: ["Flutter UI", "Riverpod State Store", "Cloud Firestore Streams", "Firebase Cloud Storage"],
    },
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
    architecture: {
      overview:
        "Community platform leveraging Supabase PostgreSQL Row Level Security (RLS) for multi-tenant feeds and optimized image pipelines.",
      keyDecisions: [
        "PostgreSQL RLS policies to safeguard personal posts and private bookmarks at the DB layer.",
        "Virtualized FlashList for smooth 60fps feed scrolling with dynamic aspect-ratio cards.",
        "Supabase Realtime subscriptions for instantaneous like and comment counter updates.",
      ],
      flow: ["Expo Client", "Supabase Auth & RLS", "Postgres DB", "Realtime WebSockets"],
    },
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
    architecture: {
      overview:
        "Equipment logistics management system featuring serial-number tracking, dynamic availability calendars, and QR check-in/out verification.",
      keyDecisions: [
        "Transactional inventory reservation with optimistic locking to prevent double-booking gear.",
        "Server Actions in Next.js App Router for low-latency server-side operations.",
        "QR code verification token generation with HMAC signatures for tamper-proof handovers.",
      ],
      flow: ["Next.js App Router", "Prisma ORM", "PostgreSQL (Neon)", "QR Scanner Verification"],
    },
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
    architecture: {
      overview:
        "Campus sports facility management portal coordinating lane capacity limits, coach schedules, and automated attendee tracking.",
      keyDecisions: [
        "QR badge generator for instantaneous gatekeeper verification without pen-and-paper delays.",
        "Automated background cron jobs for schedule expiration and booking reminder emails.",
        "Role-Based Access Control (RBAC) separating student, coach, and facility manager workflows.",
      ],
      flow: ["React Client", "Express API", "MongoDB Atlas", "Nodemailer Notification Gateway"],
    },
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const visible = projects.filter((p) => {
    const matchesCategory =
      filter === "All projects" ||
      p.category === filter ||
      p.additionalCategory === filter;

    const matchesSearch =
      searchQuery.trim() === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>Networks, mobile & beyond.</h2>
        </div>
        <div className="project-heading-actions">
          <a
            className="text-link"
            href="https://github.com/udayacgamage?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            All repositories ↗
          </a>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="projects-controls-bar">
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
              {item === "All projects" && (
                <span>{String(projects.length).padStart(2, "0")}</span>
              )}
            </button>
          ))}
        </div>

        {/* Live Filter Search */}
        <div className="project-search-box">
          <span className="search-icon" aria-hidden="true">🔍</span>
          <input
            type="text"
            placeholder="Filter by tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="project-search-input"
            aria-label="Filter projects by technology or keyword"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>

      <div className="project-grid">
        {visible.map((p) => (
          <article className="project" key={p.repo}>
            <div
              className={`project-art ${p.theme}`}
              onClick={() => setSelectedProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedProject(p)}
              aria-label={`View architecture details for ${p.name}`}
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
              <button
                type="button"
                className="project-deepdive-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(p);
                }}
                title="Inspect architecture and decisions"
              >
                Inspect Architecture ↗
              </button>
            </div>
            <div className="project-info">
              <div className="project-title">
                <h3>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(p)}
                    className="project-name-btn"
                  >
                    {p.name}
                  </button>
                </h3>
                <span className="category-pill">{p.category}</span>
              </div>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setSearchQuery(t)}
                    className="tag-interactive"
                    title={`Filter by '${t}'`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="project-action-links">
                <button
                  type="button"
                  className="quick-inspect-link"
                  onClick={() => setSelectedProject(p)}
                >
                  Architecture &amp; Specs ↗
                </button>
                <a
                  className="source-repo-link"
                  href={`https://github.com/udayacgamage/${p.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Project Architecture Deep-Dive Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <div className="modal-header">
              <div>
                <span className="eyebrow">{selectedProject.type}</span>
                <h3 id="modal-project-title">{selectedProject.name}</h3>
              </div>
              <button
                type="button"
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <span className="eyebrow">SYSTEM OVERVIEW</span>
                <p className="modal-overview-text">
                  {selectedProject.architecture?.overview || selectedProject.description}
                </p>
              </div>

              {selectedProject.architecture?.flow && (
                <div className="modal-section">
                  <span className="eyebrow">DATA &amp; CONTROL PIPELINE</span>
                  <div className="pipeline-flow">
                    {selectedProject.architecture.flow.map((step, idx) => (
                      <div key={step} className="flow-step">
                        <span className="step-num">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="step-text">{step}</span>
                        {idx < selectedProject.architecture!.flow.length - 1 && (
                          <span className="flow-divider" aria-hidden="true">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedProject.architecture?.keyDecisions && (
                <div className="modal-section">
                  <span className="eyebrow">KEY ENGINEERING DECISIONS</span>
                  <ul className="decisions-list">
                    {selectedProject.architecture.keyDecisions.map((decision) => (
                      <li key={decision}>
                        <span className="bullet">✳</span>
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-section">
                <span className="eyebrow">TECHNOLOGY STACK</span>
                <div className="tags">
                  {selectedProject.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <a
                className="button"
                href={`https://github.com/udayacgamage/${selectedProject.repo}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository on GitHub ↗
              </a>
              <button
                type="button"
                className="text-link"
                onClick={() => setSelectedProject(null)}
              >
                Close details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
