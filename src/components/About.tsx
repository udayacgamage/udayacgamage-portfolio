'use client';

import React from 'react';
import Image from 'next/image';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const stats = [
  { label: 'University', value: 'USJ' },
  { label: 'Degree', value: 'BICT' },
  { label: 'Focus', value: 'Cyber Security' },
  { label: 'Location', value: 'Sri Lanka' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const About = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <m.div
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={0}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-indigo-400 mb-3">About</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Who I Am
            </h2>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Photo */}
            <m.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10" />
                <Image
                  src="/profile.jpg"
                  alt="Udaya Chathuranga"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </m.div>

            {/* Content */}
            <m.div
              className="lg:col-span-8 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey through the tech landscape is less about ticking boxes and more about chasing ideas that matter. Each line of code I write, every concept I explore, is powered by an insatiable curiosity and the desire to build solutions that spark change.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Currently diving deep into projects that challenge what I know and push me to learn more. From crafting responsive web apps with React and Tailwind CSS, to building dynamic backends with Python and Node.js — I love bringing ideas to life through modern tech stacks.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                {stats.map((stat, i) => (
                  <m.div
                    key={stat.label}
                    className="text-center sm:text-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 2}
                  >
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                  </m.div>
                ))}
              </div>

              <div className="p-5 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                <p className="text-indigo-300 font-medium text-sm leading-relaxed">
                  I have a strong interest in Cyber Security and Network Administration, constantly exploring new ways to secure and optimize digital infrastructure.
                </p>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default About;
