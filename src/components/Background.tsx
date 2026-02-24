'use client';

import { memo } from 'react';

/**
 * Pure-CSS animated background — zero JS per frame, fully GPU-composited.
 * Replaces the Three.js starfield + glow orbs for zero lag.
 */
const Background = memo(function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-mesh-rotate">
          <div className="absolute top-[20%] left-[30%] h-[40vmax] w-[40vmax] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute top-[50%] left-[60%] h-[35vmax] w-[35vmax] rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute top-[70%] left-[20%] h-[30vmax] w-[30vmax] rounded-full bg-violet-500/15 blur-[100px]" />
        </div>
      </div>

      {/* Subtle star dots via radial gradients */}
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(1px_1px_at_10%_20%,rgba(255,255,255,0.4),transparent),radial-gradient(1px_1px_at_80%_10%,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_30%_80%,rgba(255,255,255,0.25),transparent),radial-gradient(1px_1px_at_70%_60%,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_50%_40%,rgba(255,255,255,0.2),transparent),radial-gradient(1px_1px_at_15%_55%,rgba(255,255,255,0.35),transparent),radial-gradient(1px_1px_at_90%_35%,rgba(255,255,255,0.25),transparent),radial-gradient(1px_1px_at_40%_15%,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_60%_90%,rgba(255,255,255,0.2),transparent),radial-gradient(1px_1px_at_5%_75%,rgba(255,255,255,0.3),transparent),radial-gradient(1px_1px_at_95%_85%,rgba(255,255,255,0.25),transparent),radial-gradient(1px_1px_at_25%_45%,rgba(255,255,255,0.2),transparent)]" />

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Top vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-transparent to-[#030712] opacity-60" />
    </div>
  );
});

export default Background;
