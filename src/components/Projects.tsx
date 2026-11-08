"use client";

import { useState } from "react";

interface Project {
  title: string;
  category: "Networking & IoT" | "Mobile Development" | "Web Applications";
  badge: string;
  tagline: string;
  description: string;
  techStack: string[];
  repoUrl: string;
}

const projectsData: Project[] = [
  {
    title: "BridgeM",
    category: "Networking & IoT",
    badge: "MOBILE IOT MONITORING",
    tagline: "Real-time structural bridge telemetry from sensor to mobile",
    description:
      "A cross-platform mobile application that ingests bridge telemetry via MQTT over WebSockets. Displays live vehicle load, vibration waveforms, safety status, and barrier telemetry.",
    techStack: ["React Native", "Expo", "MQTT", "WebSockets", "TypeScript"],
    repoUrl: "https://github.com/udayacgamage/IOT-bridge-app",
  },
  {
    title: "Cloudpath",
    category: "Networking & IoT",
    badge: "NETWORK & CLOUD SIMULATION",
    tagline: "Interactive visual routing and network protocol education",
    description:
      "A specialized learning environment featuring visual simulations and guided labs for wireless communication, IP packet routing, subnetting, and cloud infrastructure with local persistence.",
    techStack: ["JavaScript", "Interactive Labs", "Network Protocols", "Subnetting"],
    repoUrl: "https://github.com/udayacgamage/cloud-path",
  },
  {
    title: "UCHAT",
    category: "Mobile Development",
    badge: "FLUTTER MESSENGER",
    tagline: "Real-time instant messaging and group collaboration",
    description:
      "A cross-platform chat client built with Flutter and Firebase. Features direct messaging, group conversations, live typing indicators, delivery and read receipts, and media attachments.",
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod", "Cloud Firestore"],
    repoUrl: "https://github.com/udayacgamage/UCHAT-app",
  },
  {
    title: "Frame",
    category: "Mobile Development",
    badge: "REACT NATIVE SOCIAL APP",
    tagline: "Creative social network with feeds, shared stories, and bookmarks",
    description:
      "A mobile social platform built with Expo and Supabase featuring optimized media feeds, user profiles, ephemeral stories, post engagement (likes/comments), and bookmarking collections.",
    techStack: ["React Native", "Expo", "Supabase", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/udayacgamage/Frame-social-media-app",
  },
  {
    title: "LensLoop",
    category: "Web Applications",
    badge: "EQUIPMENT RENTAL PLATFORM",
    tagline: "Camera and production gear rental platform with QR handovers",
    description:
      "Full-stack gear management platform featuring real-time inventory reservation, equipment compatibility verification, automated checkout holds, and QR-based verification handovers.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    repoUrl: "https://github.com/udayacgamage/lens-loop",
  },
  {
    title: "USJ Pool Management System",
    category: "Web Applications",
    badge: "UNIVERSITY OPERATIONS",
    tagline: "Campus sports booking, QR attendance, and coach scheduling",
    description:
      "Comprehensive operations hub for University of Sri Jayewardenepura sports facilities, connecting student slot reservations, coach calendars, QR attendance scanning, and notifications.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
    repoUrl: "https://github.com/udayacgamage/pool-management-system",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Networking & IoT", "Mobile Development", "Web Applications"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              02 / Featured Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Selected Work &amp; Codebases
            </h2>
          </div>
          <div>
            <a
              href="https://github.com/udayacgamage?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-4 py-2 rounded-lg bg-slate-900 border border-white/10 transition-colors"
            >
              <span>All GitHub Repositories</span>
              <span className="font-mono">↗</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                activeFilter === cat
                  ? "bg-blue-600 text-white font-medium"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/15"
              }`}
            >
              {cat}
              {cat === "All" && (
                <span className="ml-1.5 opacity-60 font-mono text-[10px]">
                  ({projectsData.length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="pro-card p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header: Badge & Link icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5 font-medium">
                    {project.badge}
                  </span>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-slate-400 hover:text-white transition-colors p-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-xs text-slate-400 mt-1 mb-3">
                  {project.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tech tags */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/80 text-slate-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  <span>Inspect Repository</span>
                  <span className="font-mono text-blue-400">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
