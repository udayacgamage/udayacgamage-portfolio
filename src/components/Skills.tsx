import React from 'react';

const skills = [
  { name: 'ICT & Networking', category: 'Technical' },
  { name: 'Troubleshooting', category: 'Technical' },
  { name: 'GitHub Management', category: 'DevOps' },
  { name: 'CTF Organizing', category: 'Security' },
  { name: 'AI Tool Evaluation', category: 'Research' },
  { name: 'React & Next.js', category: 'Development' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Skills</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Technical Proficiency
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-blue-500/60 hover:ring-1 hover:ring-blue-500/30 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex-1 min-w-0">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</p>
                <p className="text-sm text-gray-500 truncate">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
