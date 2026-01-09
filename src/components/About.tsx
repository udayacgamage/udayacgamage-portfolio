import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Me</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Education &amp; Interests
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
           <div className="relative w-64 sm:w-72 lg:w-80 aspect-[3/4] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10 transform hover:scale-105 transition-transform duration-300">
              <Image
                src="/profile.jpg"
                alt="Udaya Chathuranga"
                fill
                className="object-cover"
                priority
              />
           </div>

           <div className="max-w-2xl rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md p-6 text-lg text-gray-500 dark:text-gray-400 shadow-sm">
                <p className="mb-6">
                    My journey through the tech landscape is less about ticking boxes and more about chasing ideas that matter. Each line of code I write, every concept I explore, is powered by an insatiable curiosity and the desire to build solutions that spark change.
                </p>
                <p className="mb-6">
                    Currently diving deep into projects that challenge what I know and push me to learn more. From crafting responsive web apps with React and Tailwind CSS, to building dynamic backends with Python and Node.jsI love bringing ideas to life through modern tech stacks.
                </p>
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
                    <p className="font-semibold text-blue-800 dark:text-blue-200">
                        I have a strong interest in Cyber Security and Network Administration, constantly exploring new ways to secure and optimize digital infrastructure.
                    </p>
                </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
