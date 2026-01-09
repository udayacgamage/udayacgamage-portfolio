import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="text-blue-600">Udaya Chathuranga</span>
        </h1>
        
        <div className="mb-8 flex justify-center">
          <a href="https://git.io/typing-svg">
            <div className="inline-flex rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md px-4 py-3 shadow-sm">
              <img
                src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1200&color=70A5FD&center=true&vCenter=true&width=760&lines=Software+Developer+from+Sri+Lanka;Frontend+%7C+Java+%7C+Networking;Always+learning%2C+always+building"
                alt="Typing SVG"
              />
            </div>
          </a>
        </div>

        <p className="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          A spirited BICT undergraduate at the Faculty of Technology, University of Sri Jayewardenepura, passionate about Cyber Security, Network Administration, and building solutions that spark change.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf" // Placeholder path for resume
            className="rounded-full bg-white dark:bg-gray-800 px-8 py-3.5 text-sm font-semibold text-gray-900 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
