"use client";

import { useState } from "react";

interface Project {
  title: string;
  category: "Networking & IoT" | "Mobile Engineering" | "Web & Full-Stack";
  badge: string;
  tagline: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  demoUrl?: string;
  featured?: boolean;
  accent: "cyan" | "indigo" | "emerald" | "purple";
}

const projectsData: Project[] = [
  {
    title: "BridgeM",
    category: "Networking & IoT",
    badge: "MOBILE IOT MONITORING",
    tagline: "Real-time bridge telemetry from sensor to screen",
    description:
      "A cross-platform mobile dashboard utilizing MQTT over WebSockets to monitor bridge health telemetry in real time: dynamic load, vibration waveforms, barrier statuses, and safety alerts.",
    techStack: ["React Native", "Expo", "MQTT", "WebSockets", "TypeScript"],
    repoUrl: "https://github.com/udayacgamage/IOT-bridge-app",
    featured: true,
    accent: "cyan",
  },
  {
    title: "Cloudpath",
    category: "Networking & IoT",
    badge: "NETWORKING & CLOUD LABS",
    tagline: "Interactive visual network protocols & routing lessons",
    description:
      "A specialized learning environment featuring visual simulations and guided labs for wireless communication, IP routing, subnetting, and cloud infrastructure with local state persistence.",
    techStack: ["JavaScript", "Interactive Labs", "Network Routing", "Subnetting"],
    repoUrl: "https://github.com/udayacgamage/cloud-path",
    featured: true,
    accent: "indigo",
  },
  {
    title: "UCHAT",
    category: "Mobile Engineering",
    badge: "FLUTTER MESSENGER",
    tagline: "Real-time instant messaging & media collaboration",
    description:
      "A Flutter-based chat platform with Firebase real-time sync, direct and group messaging, live typing indicators, delivery & read receipts, and media attachments.",
    techStack: ["Flutter", "Dart", "Firebase", "Riverpod", "Cloud Firestore"],
    repoUrl: "https://github.com/udayacgamage/UCHAT-app",
    featured: true,
    accent: "purple",
  },
  {
    title: "Frame",
    category: "Mobile Engineering",
    badge: "REACT NATIVE SOCIAL APP",
    tagline: "Creative community feed, shared stories & bookmarks",
    description:
      "A modern mobile social platform built with Expo and Supabase featuring high-performance media feeds, user profiles, ephemeral stories, likes, comments, and bookmarking.",
    techStack: ["React Native", "Expo", "Supabase", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/udayacgamage/Frame-social-media-app",
    accent: "emerald",
  },
  {
    title: "LensLoop",
    category: "Web & Full-Stack",
    badge: "PRODUCTION GEAR RENTAL",
    tagline: "Equipment rental platform with inventory & QR checkouts",
    description:
      "Full-stack gear management platform featuring real-time inventory reservation, equipment compatibility verification, automated checkout holds, and QR-based verification handovers.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    repoUrl: "https://github.com/udayacgamage/lens-loop",
    accent: "cyan",
  },
  {
    title: "USJ Pool Management System",
    category: "Web & Full-Stack",
    badge: "UNIVERSITY OPERATIONS",
    tagline: "Campus sports booking, QR attendance & coach schedules",
    description:
      "Comprehensive operations hub for University of Sri Jayewardenepura sports facilities, connecting student slot reservations, coach calendars, QR attendance scanning, and notifications.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    repoUrl: "https://github.com/udayacgamage/pool-management-system",
    accent: "indigo",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Networking & IoT", "Mobile Engineering", "Web & Full-Stack"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const getAccentColor = (accent: Project["accent"]) => {
    switch (accent) {
      case "cyan":
        return {
          border: "hover:border-cyan-500/40",
          shadow: "hover:shadow-cyan-500/10",
          badge: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
          titleHover: "group-hover:text-cyan-300",
        };
      case "indigo":
        return {
          border: "hover:border-indigo-500/40",
          shadow: "hover:shadow-indigo-500/10",
          badge: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
          titleHover: "group-hover:text-indigo-300",
        };
      case "emerald":
        return {
          border: "hover:border-emerald-500/40",
          shadow: "hover:shadow-emerald-500/10",
          badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
          titleHover: "group-hover:text-emerald-300",
        };
      case "purple":
        return {
          border: "hover:border-purple-500/40",
          shadow: "hover:shadow-purple-500/10",
          badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
          titleHover: "group-hover:text-purple-300",
        };
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-indigo-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              02 / Featured Work &amp; Repositories
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Selected projects.
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/udayacgamage?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white glass-panel px-4 py-2 rounded-full border border-white/10 transition-colors"
            >
              <span>View All Repositories on GitHub</span>
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
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === cat
                  ? "bg-white text-slate-950 font-semibold shadow-md shadow-white/10"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
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
          {filteredProjects.map((project) => {
            const colors = getAccentColor(project.accent);
            return (
              <article
                key={project.title}
                className={`group glass-panel rounded-2xl p-6 border border-white/10 ${colors.border} ${colors.shadow} transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  {/* Top Bar: Badge & External Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md border font-semibold ${colors.badge}`}
                    >
                      {project.badge}
                    </span>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-slate-500 group-hover:text-white transition-colors p-1"
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className={`text-xl font-bold text-white transition-colors ${colors.titleHover}`}>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-3">
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Footer: Tech Stack Pills & Link */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors"
                  >
                    <span>Inspect Source</span>
                    <span className="font-mono text-cyan-400">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
