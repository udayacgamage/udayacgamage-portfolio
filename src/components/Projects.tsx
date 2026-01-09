import React from 'react';

const projects = [
  {
    title: 'Pool Management System',
    description: 'A comprehensive management system for pool operations. Currently under active development.',
    link: 'https://github.com/udayacgamage/pool-management-system',
    tags: ['Active Development', 'Management System'],
  },
  {
    title: 'NIC Decoder',
    description: 'A dedicated tool to extract gender, birth year, and birth date from Sri Lankan National Identity Card numbers.',
    link: 'https://github.com/udayacgamage/NIC-decorder',
    tags: ['C#', 'Utility', 'Desktop App'],
  },
  {
    title: 'Age Calculator',
    description: 'A simple yet effective GUI-based age calculator application built with C#.',
    link: 'https://github.com/udayacgamage/Age-Calculator',
    tags: ['C#', 'GUI', 'Windows'],
  },
  {
    title: 'Maykas Holiday Home',
    description: 'A web-based project for a holiday home service.',
    link: 'https://github.com/udayacgamage/MaykasHolidayHome',
    tags: ['HTML', 'Web Design'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            What I've Built
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex gap-2 mb-2">
                     {project.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                            {tag}
                        </span>
                     ))}
                  </div>
                  <a href={project.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{project.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
