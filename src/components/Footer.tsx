"use client";

import SocialProfileCard from "@/components/SocialProfileCard";

export default function Footer() {
  return (
    <footer className="wrap footer">
      <div className="footer-left">
        <span>© {new Date().getFullYear()} Udaya Chathuranga</span>
        <span className="footer-surprise-hint">Press X for a surprise</span>
      </div>

      <div className="footer-links">
        <a href="mailto:udayacgamage@gmail.com">Email</a>
        <a
          href="https://github.com/udayacgamage"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <SocialProfileCard />
        <a
          href="https://www.linkedin.com/in/udaya-chathuranga/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="#home" className="back-to-top">
          Top ↑
        </a>
      </div>
    </footer>
  );
}
