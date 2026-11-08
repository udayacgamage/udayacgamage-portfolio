"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface SocialProfileCardProps {
  name?: string;
  handle?: string;
  bio?: string;
  location?: string;
  website?: string;
  websiteUrl?: string;
  joinedDate?: string;
  following?: string | number;
  followers?: string | number;
  profileUrl?: string;
}

export default function SocialProfileCard({
  name = "UDAYA CHATHURANGA",
  handle = "@udayacgamage",
  bio = "Network engineering, IoT telemetry & software development. BICT @ USJ 🇱🇰",
  location = "Colombo, Sri Lanka",
  website = "udayacgamage.dev",
  websiteUrl = "https://udayacgamage.dev",
  joinedDate = "Joined April 2022",
  following = "142",
  followers = "198",
  profileUrl = "https://x.com/udayacgamage",
}: SocialProfileCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle on click
  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Keyboard shortcut easter egg: Press 'x' or 'X' anywhere to toggle card
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (["input", "textarea", "select"].includes(activeTag)) return;

      if (e.key.toLowerCase() === "x") {
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="profile-popover-wrapper" ref={containerRef}>
      {/* Trigger Link Button */}
      <button
        type="button"
        className={`social-trigger-btn ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        title="Click to view X profile"
      >
        X
      </button>

      {/* Floating X Profile Card */}
      {isOpen && (
        <div
          className="x-profile-card"
          role="dialog"
          aria-label="X Profile Preview"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Banner (Sky and Clouds) */}
          <div className="x-card-banner">
            <div className="x-sky-clouds" aria-hidden="true">
              <span className="cloud-shape c1" />
              <span className="cloud-shape c2" />
              <span className="cloud-shape c3" />
            </div>
            <button
              type="button"
              className="x-card-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close card"
            >
              ✕
            </button>
          </div>

          <div className="x-card-body">
            {/* Top row: Overlapping Avatar and X logo */}
            <div className="x-avatar-row">
              <div className="x-avatar-frame">
                <Image
                  src="/profile.jpg"
                  alt={name}
                  width={64}
                  height={64}
                  priority
                  className="x-avatar-img"
                />
              </div>

              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="x-icon-link"
                title="Open on X (Twitter)"
                aria-label="Visit profile on X"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Profile identity */}
            <div className="x-identity">
              <h3 className="x-name">{name}</h3>
              <span className="x-handle">{handle}</span>
            </div>

            {/* Bio */}
            <p className="x-bio">{bio}</p>

            {/* Metadata list: Location, Link, Joined date */}
            <div className="x-meta-list">
              <span className="x-meta-item">
                <span className="x-meta-icon" aria-hidden="true">📍</span>
                <span>{location}</span>
              </span>

              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="x-meta-item x-link-meta"
              >
                <span className="x-meta-icon" aria-hidden="true">🔗</span>
                <span>{website}</span>
              </a>

              <span className="x-meta-item">
                <span className="x-meta-icon" aria-hidden="true">📅</span>
                <span>{joinedDate}</span>
              </span>
            </div>

            {/* Following / Followers count stats */}
            <div className="x-stats-bar">
              <span className="x-stat">
                <strong>{following}</strong> Following
              </span>
              <span className="x-stat">
                <strong>{followers}</strong> Followers
              </span>
            </div>

            {/* Direct Profile Action Link */}
            <div className="x-card-action">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="x-view-profile-btn"
              >
                Follow on X ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

