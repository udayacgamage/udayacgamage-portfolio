'use client';

import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const projects = [
  {
    title: 'Pool Management System',
    description: 'A comprehensive management system for pool operations. Currently under active development.',
    link: 'https://github.com/udayacgamage/pool-management-system',
    tags: ['Active Development', 'Management System'],
    status: 'In Progress',
  },
  {
    title: 'NIC Decoder',
    description: 'A dedicated tool to extract gender, birth year, and birth date from Sri Lankan National Identity Card numbers.',
    link: 'https://github.com/udayacgamage/NIC-decorder',
    tags: ['C#', 'Utility', 'Desktop App'],
    status: 'Completed',
  },
  {
    title: 'Age Calculator',
    description: 'A simple yet effective GUI-based age calculator application built with C#.',
    link: 'https://github.com/udayacgamage/Age-Calculator',
    tags: ['C#', 'GUI', 'Windows'],
    status: 'Completed',
  },
  {
    title: 'Maykas Holiday Home',
    description: 'A web-based project for a holiday home service.',
    link: 'https://github.com/udayacgamage/MaykasHolidayHome',
    tags: ['HTML', 'Web Design'],
    status: 'Completed',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <section id="projects" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <m.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-indigo-400 mb-3">Portfolio</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Featured Projects
            </h2>
          </m.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => (
              <m.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={cardVariants}
                custom={i}
              >
                <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <span className={`text-xs font-medium tracking-wide uppercase ${project.status === 'In Progress' ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {project.status === 'In Progress' && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 mr-2 animate-pulse" />
                      )}
                      {project.status === 'Completed' && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2" />
                      )}
                      {project.status}
                    </span>
                  </div>
                </div>
              </m.a>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default Projects;
