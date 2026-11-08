"use client";
import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const NAV_ITEMS = [
  { label: "Networking", href: "#networking", id: "networking" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact ↗", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            setScrollProgress(Math.min(1, Math.max(0, window.scrollY / totalHeight)));
          }

          const sections = ["networking", "projects", "about", "skills", "contact"];
          const trigger = window.scrollY + 160;
          let current = "";
          for (const s of sections) {
            const el = document.getElementById(s);
            if (el) {
              const top = el.offsetTop;
              const h = el.offsetHeight;
              if (trigger >= top && trigger < top + h) {
                current = s;
                break;
              }
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="site-header">
      {/* Reading Progress Line */}
      <div
        className="scroll-progress-line"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <nav className="wrap nav" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)}>
          udaya<span>.</span>
          <small>CHATHURANGA</small>
        </a>

        <div className="nav-controls">
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
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
