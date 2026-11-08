"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="wrap nav" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          udaya<span>.</span>
          <small>CHATHURANGA</small>
        </a>

        <div className="nav-actions-cluster">
          <ThemeToggle />

          <button
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen(!open)}
            type="button"
          >
            {open ? "Close −" : "Menu +"}
          </button>
        </div>

        <div id="nav-links" className={`nav-links ${open ? "is-open" : ""}`}>
          {[
            ["Networking", "#networking"],
            ["Work", "#projects"],
            ["About", "#about"],
            ["Toolkit", "#skills"],
            ["Let’s connect ↗", "#contact"],
          ].map(([label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
