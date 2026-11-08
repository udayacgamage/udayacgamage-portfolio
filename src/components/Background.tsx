'use client';

import { memo } from 'react';

/**
 * Professional, calm background with subtle ambient light and fine grid texture.
 */
const Background = memo(function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#090d16]"
    >
      {/* Top subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-900/15 via-indigo-950/10 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle architectural dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Gentle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-[#090d16]/80" />
    </div>
  );
});

export default Background;
