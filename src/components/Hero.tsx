'use client';

import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const Hero = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <m.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
                Open to Opportunities
              </span>
            </m.div>

            <m.p
              className="text-sm font-medium tracking-[0.3em] uppercase text-indigo-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Software Developer &bull; Cyber Security Enthusiast
            </m.p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.05]">
              Udaya
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Chathuranga
              </span>
            </h1>

            <m.p
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              BICT undergraduate passionate about Cyber Security, Network Administration,
              and building solutions that spark change.
            </m.p>

            <m.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 text-sm tracking-wide overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-white/15 text-white font-semibold rounded-xl hover:bg-white/[0.06] hover:border-white/25 transition-all duration-300 text-sm tracking-wide"
              >
                Get in Touch
              </a>
            </m.div>
          </m.div>

          {/* Scroll indicator */}
          <m.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <m.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[10px] text-gray-500 tracking-[0.25em] uppercase">Scroll</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent" />
            </m.div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Hero;
