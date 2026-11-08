export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 relative z-10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>© {new Date().getFullYear()} Udaya Chathuranga</span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-[11px] text-slate-500">Built with Next.js &amp; Three.js</span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href="https://github.com/udayacgamage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/udaya-chathuranga/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="#home"
            className="hover:text-cyan-400 transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
